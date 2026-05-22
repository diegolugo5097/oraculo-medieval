import { useState, useEffect, useRef, useCallback } from 'react'
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
  const selectedFaceRef = useRef(0)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [detected, setDetected] = useState(false)
  const [faceData, setFaceData] = useState(null)
  const [archetype, setArchetype] = useState(null)
  const [appState, setAppState] = useState('init')
  const [statusMsg, setStatusMsg] = useState('Iniciando el oráculo...')

  // Track mouse globally
  useEffect(() => {
    const onMove = e => setMousePos({ x: e.clientX, y: e.clientY })
    const onTouch = e => {
      if (e.touches[0]) setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouch)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  // Init background canvas
  useEffect(() => {
    const cleanup = initBackground()
    return cleanup
  }, [])

  // Auto-start oracle
  useEffect(() => {
    startOracle()
    return () => {
      clearInterval(intervalRef.current)
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop())
    }
  }, [])

  async function startOracle() {
    setAppState('loading')
    setStatusMsg('Invocando los modelos arcanos...')
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
      await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL)
      setStatusMsg('Abriendo el portal de visión...')

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: 'user' }
      })
      streamRef.current = stream
      videoRef.current.srcObject = stream
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play()
        setAppState('running')
        setStatusMsg('')
        startDetection()
      }
    } catch (e) {
      console.error(e)
      setStatusMsg('El oráculo no puede ver... permite el acceso a la cámara y recarga la página.')
      setAppState('error')
    }
  }

  function startDetection() {
    intervalRef.current = setInterval(async () => {
      const video = videoRef.current
      if (!video || video.paused || video.ended) return
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
      } catch (err) {
        // silently ignore detection errors
      }
    }, 300)
  }

  function handleEyeClick() {
    if (!detected || !faceData) return
    const key = getArchetypeKey(faceData.age, faceData.gender)
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
  const isError = appState === 'error'

  const statusText = isRunning
    ? detected
      ? null
      : '✦ Muéstrale tu rostro al ojo del oráculo ✦'
    : statusMsg

  return (
    <>
      <div className="vignette" />

      {/* Hidden camera (detection only, not shown) */}
      <video ref={videoRef} className="hidden-cam" playsInline muted />

      <div className="oracle-wrap">
        {/* Title bar */}
        <div className="oracle-title">
          <h1>El Oráculo de las Vidas Pasadas</h1>
          <div className="divider">✦</div>
          <p>Revela quien fuiste en otra era</p>
        </div>

        {/* Eye / loading */}
        <div className="eye-section">
          {isLoading ? (
            <div className="loading-rune">
              <div className="rune-spin">ᛟ</div>
              <p>{statusMsg}</p>
            </div>
          ) : (
            <MagicEye
              mousePos={mousePos}
              detected={detected && isRunning}
              onClick={handleEyeClick}
            />
          )}
        </div>

        {/* Status message */}
        {statusText && (
          <div className="oracle-status">
            <p style={{ color: isError ? '#ff6b35' : undefined }}>{statusText}</p>
          </div>
        )}

        {/* Detected face data badges */}
        {detected && isRunning && faceData && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '12px',
            zIndex: 10,
          }}>
            {[
              { label: 'Edad detectada', val: `~${faceData.age} años` },
              { label: 'Género', val: faceData.gender === 'male' ? '♂ Masculino' : '♀ Femenino' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(10,5,0,0.85)',
                border: '1px solid rgba(201,146,42,0.5)',
                padding: '6px 16px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '9px',
                  letterSpacing: '3px',
                  color: 'rgba(201,146,42,0.6)',
                  textTransform: 'uppercase',
                  marginBottom: '2px'
                }}>{s.label}</div>
                <div style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '14px',
                  color: '#f0c060',
                  letterSpacing: '2px'
                }}>{s.val}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grimoire reveal modal */}
      {appState === 'revealed' && archetype && (
        <GrimoireModal archetype={archetype} onClose={handleCloseModal} />
      )}
    </>
  )
}
