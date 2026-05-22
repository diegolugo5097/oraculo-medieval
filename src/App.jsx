import { useState, useEffect, useRef } from 'react'
import * as faceapi from 'face-api.js'
import { initBackground, setBackgroundActivated } from './background'
import { ARCHETYPES, getArchetypeKey, pickRandom } from './archetypes'
import MagicEye from './MagicEye'
import GrimoireModal from './GrimoireModal'

const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/model'

export default function App() {
  const videoRef     = useRef(null)
  const intervalRef  = useRef(null)
  const countdownRef = useRef(null)
  const streamRef    = useRef(null)

  const [mousePos,  setMousePos]  = useState({ x: 0, y: 0 })
  const [facePos,   setFacePos]   = useState(null)
  const [detected,  setDetected]  = useState(false)
  const [faceData,  setFaceData]  = useState(null)
  const [countdown, setCountdown] = useState(null)
  const [archetype, setArchetype] = useState(null)
  const [appState,  setAppState]  = useState('loading')
  const [statusMsg, setStatusMsg] = useState('Invocando los modelos arcanos...')

  // ── Refs for stale-closure-safe logic ──
  const detectedRef  = useRef(false)
  const faceDataRef  = useRef(null)
  const countingRef  = useRef(false)
  /**
   * lockedRef = true while the grimoire modal is open OR while we are waiting
   * for the face to leave the frame after closing the modal.
   * No new countdown starts while this is true.
   */
  const lockedRef    = useRef(false)

  // Mouse tracking
  useEffect(() => {
    const onMove  = e => setMousePos({ x: e.clientX, y: e.clientY })
    const onTouch = e => { if (e.touches[0]) setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY }) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouch, { passive: true })
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('touchmove', onTouch) }
  }, [])

  useEffect(() => { const cleanup = initBackground(); return cleanup }, [])

  useEffect(() => {
    startOracle()
    return () => {
      clearInterval(intervalRef.current)
      clearInterval(countdownRef.current)
      streamRef.current?.getTracks().forEach(t => t.stop())
    }
  }, [])

  useEffect(() => { setBackgroundActivated(detected) }, [detected])

  async function startOracle() {
    try {
      setAppState('loading')
      setStatusMsg('Invocando los modelos arcanos...')
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
      await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL)
      setStatusMsg('Abriendo el portal de visión...')
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240, facingMode: 'user' } })
      streamRef.current = stream
      videoRef.current.srcObject = stream
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play()
        setAppState('running')
        setStatusMsg('')
        startDetection()
      }
    } catch (e) {
      setStatusMsg('Error: ' + (e.message || 'Permite el acceso a la cámara y recarga.'))
      setAppState('error')
    }
  }

  function startDetection() {
    intervalRef.current = setInterval(async () => {
      const video = videoRef.current
      if (!video || video.paused || video.ended || !video.videoWidth) return
      try {
        const opts = new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.45 })
        const dets = await faceapi.detectAllFaces(video, opts).withAgeAndGender()

        if (dets.length > 0) {
          const d  = dets[0]
          const fd = { age: Math.round(d.age), gender: d.gender }
          faceDataRef.current = fd

          // Update face position for eye tracking
          const box   = d.detection.box
          const vidW  = video.videoWidth
          const vidH  = video.videoHeight
          const eyeEl = document.querySelector('.eye-frame')
          if (eyeEl) {
            const rect     = eyeEl.getBoundingClientRect()
            const faceCxRel = 1 - (box.x + box.width  / 2) / vidW
            const faceCyRel =     (box.y + box.height / 2) / vidH
            setFacePos({ x: rect.left + faceCxRel * rect.width, y: rect.top + faceCyRel * rect.height })
          }

          if (!detectedRef.current) {
            detectedRef.current = true
            setDetected(true)
            setFaceData(fd)
          } else {
            setFaceData(fd)
          }

          // Only start countdown if nothing is locked and not already counting
          if (!lockedRef.current && !countingRef.current) {
            startCountdown(fd)
          }

        } else {
          // Face lost
          if (detectedRef.current) {
            detectedRef.current = false
            setDetected(false)
            setFacePos(null)
            cancelCountdown()

            // If we were locked waiting for face to leave, unlock now
            if (lockedRef.current) {
              lockedRef.current = false
            }
          }
        }
      } catch { /* ignore */ }
    }, 300)
  }

  function startCountdown(fd) {
    countingRef.current = true
    let secs = 5
    setCountdown(secs)
    countdownRef.current = setInterval(() => {
      secs -= 1
      if (secs <= 0) {
        clearInterval(countdownRef.current)
        countingRef.current = false
        setCountdown(null)
        if (detectedRef.current && faceDataRef.current && !lockedRef.current) {
          revealGrimoire(faceDataRef.current)
        }
      } else {
        setCountdown(secs)
      }
    }, 1000)
  }

  function cancelCountdown() {
    clearInterval(countdownRef.current)
    countingRef.current = false
    setCountdown(null)
  }

  function revealGrimoire(fd) {
    const key    = getArchetypeKey(fd.age, fd.gender)
    const pool   = ARCHETYPES[key]
    const chosen = pickRandom(pool)
    setArchetype(chosen)
    setAppState('revealed')
    cancelCountdown()
    // Lock: no more countdowns until the face leaves and comes back
    lockedRef.current = true
  }

  function handleEyeClick() {
    if (!detectedRef.current || !faceDataRef.current) return
    cancelCountdown()
    revealGrimoire(faceDataRef.current)
  }

  function handleCloseModal() {
    setArchetype(null)
    setAppState('running')
    cancelCountdown()
    // Keep locked — countdown won't restart until face leaves the frame
    // lockedRef stays true; it gets cleared in the detection loop when face disappears
  }

  const isRunning = appState === 'running'
  const isLoading = appState === 'loading'

  return (
    <>
      <div className="vignette" />
      <video ref={videoRef} className="hidden-cam" playsInline muted />

      <div className="oracle-wrap">
        <div className="oracle-title">
          <h1>El Oráculo de las Vidas Pasadas</h1>
          <div className="divider">✦</div>
          <p>Revela quien fuiste en otra era</p>
        </div>

        <div className="eye-section">
          {isLoading ? (
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'20px', width:'clamp(200px,28vw,320px)', height:'clamp(200px,28vw,320px)' }}>
              <div style={{ fontSize:'3rem', animation:'runespin 1s linear infinite', color:'var(--gold)', textShadow:'0 0 20px var(--gold)' }}>ᛟ</div>
              <p style={{ fontFamily:'Cinzel,serif', fontSize:'0.75rem', letterSpacing:'3px', color:'var(--gold)', animation:'textpulse 1s ease-in-out infinite', textAlign:'center', padding:'0 20px' }}>{statusMsg}</p>
            </div>
          ) : (
            <MagicEye
              mousePos={mousePos}
              facePos={facePos}
              detected={detected && isRunning}
              countdown={isRunning ? countdown : null}
              onClick={handleEyeClick}
            />
          )}
        </div>

        {appState === 'error' && (
          <div className="oracle-status"><p style={{ color:'#ff6b35' }}>{statusMsg}</p></div>
        )}
        {isRunning && !detected && (
          <div className="oracle-status"><p>✦ Muéstrale tu rostro al ojo del oráculo ✦</p></div>
        )}
        {isRunning && detected && countdown !== null && (
          <div className="oracle-status">
            <p style={{ color:'#df80ff', letterSpacing:'4px' }}>✦ EL ORÁCULO TE VE... ✦</p>
          </div>
        )}
        {isRunning && detected && countdown === null && !lockedRef.current && (
          <div className="oracle-status">
            <p style={{ color:'#df80ff', letterSpacing:'4px' }}>✦ ALÉJATE PARA VOLVER A CONSULTAR ✦</p>
          </div>
        )}

        {appState === 'error' && (
          <div style={{ position:'absolute', bottom:'80px', left:'50%', transform:'translateX(-50%)', zIndex:10 }}>
            <button className="close-btn" style={{ padding:'10px 30px' }} onClick={startOracle}>↻ Reintentar</button>
          </div>
        )}

        {detected && isRunning && faceData && (
          <div style={{ position:'absolute', bottom:'20px', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'12px', zIndex:10 }}>
            {[
              { label:'Edad detectada', val:`~${faceData.age} años` },
              { label:'Género', val: faceData.gender === 'male' ? '♂ Masculino' : '♀ Femenino' },
            ].map((s, i) => (
              <div key={i} style={{ background:'rgba(10,0,20,0.88)', border:'1px solid rgba(176,64,255,0.5)', padding:'6px 16px', textAlign:'center' }}>
                <div style={{ fontFamily:'Cinzel,serif', fontSize:'9px', letterSpacing:'3px', color:'rgba(176,64,255,0.7)', textTransform:'uppercase', marginBottom:'2px' }}>{s.label}</div>
                <div style={{ fontFamily:'Cinzel,serif', fontSize:'14px', color:'#df80ff', letterSpacing:'2px' }}>{s.val}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {appState === 'revealed' && archetype && (
        <GrimoireModal archetype={archetype} onClose={handleCloseModal} />
      )}
    </>
  )
}
