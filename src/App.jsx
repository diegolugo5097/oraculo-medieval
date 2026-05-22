import { useState, useEffect, useRef } from 'react'
import * as faceapi from 'face-api.js'
import { initBackground } from './background'
import { ARCHETYPES, getArchetypeKey, pickRandom } from './archetypes'
import MagicEye from './MagicEye'
import GrimoireModal from './GrimoireModal'

const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/model'

export default function App() {
  const videoRef = useRef(null)
  const intervalRef = useRef(null)
  const streamRef = useRef(null)
  const faceDataRef = useRef(null)

  const [mousePos, setMousePos]   = useState({ x: 0, y: 0 })
  const [detected, setDetected]   = useState(false)
  const [faceData, setFaceData]   = useState(null)
  const [archetype, setArchetype] = useState(null)
  const [appState, setAppState]   = useState('loading')
  const [statusMsg, setStatusMsg] = useState('Invocando los modelos arcanos...')

  useEffect(() => { faceDataRef.current = faceData }, [faceData])

  // Mouse / touch
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
    return () => { clearInterval(intervalRef.current); streamRef.current?.getTracks().forEach(t => t.stop()) }
  }, [])

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
          const d = dets[0]
          setDetected(true)
          setFaceData({ age: Math.round(d.age), gender: d.gender })
        } else {
          setDetected(false)
        }
      } catch { /* ignore */ }
    }, 350)
  }

  function handleEyeClick() {
    const fd = faceDataRef.current
    if (!fd) return
    const key  = getArchetypeKey(fd.age, fd.gender)
    const pool = ARCHETYPES[key]
    const chosen = pickRandom(pool)
    setArchetype(chosen)
    setAppState('revealed')
  }

  function handleCloseModal() {
    setArchetype(null)
    setAppState('running')
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
            <MagicEye mousePos={mousePos} detected={detected && isRunning} onClick={handleEyeClick} />
          )}
        </div>

        {appState === 'error' && (
          <div className="oracle-status">
            <p style={{ color:'#ff6b35' }}>{statusMsg}</p>
          </div>
        )}
        {isRunning && !detected && (
          <div className="oracle-status">
            <p>✦ Muéstrale tu rostro al ojo del oráculo ✦</p>
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
            ].map((s,i) => (
              <div key={i} style={{ background:'rgba(10,5,0,0.85)', border:'1px solid rgba(201,146,42,0.5)', padding:'6px 16px', textAlign:'center' }}>
                <div style={{ fontFamily:'Cinzel,serif', fontSize:'9px', letterSpacing:'3px', color:'rgba(201,146,42,0.6)', textTransform:'uppercase', marginBottom:'2px' }}>{s.label}</div>
                <div style={{ fontFamily:'Cinzel,serif', fontSize:'14px', color:'#f0c060', letterSpacing:'2px' }}>{s.val}</div>
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
