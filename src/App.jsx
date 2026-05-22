import { useState, useEffect, useRef } from 'react'
import * as faceapi from 'face-api.js'
import { initBackground } from './background'
import { ARCHETYPE_TYPES, getArchetypeKey, pickRandom } from './archetypes'
import { generateMedievalCharacter } from './claudeApi'
import MagicEye from './MagicEye'
import GrimoireModal from './GrimoireModal'

const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/model'

const LOADING_STEPS = [
  '🔮 Consultando los pergaminos arcanos...',
  '📜 Descifrando las runas del destino...',
  '✨ Invocando tu vida pasada...',
  '🌙 El oráculo está escribiendo tu leyenda...',
  '⚡ Conjurando tu imagen del pasado...',
]

function getSavedKey() {
  try { return localStorage.getItem('oracle_api_key') || '' } catch { return '' }
}
function saveKey(k) {
  try { localStorage.setItem('oracle_api_key', k) } catch {}
}

export default function App() {
  const videoRef = useRef(null)
  const intervalRef = useRef(null)
  const streamRef = useRef(null)
  const faceDataRef = useRef(null)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [detected, setDetected] = useState(false)
  const [faceData, setFaceData] = useState(null)
  const [archetype, setArchetype] = useState(null)
  const [appState, setAppState] = useState('loading')
  const [statusMsg, setStatusMsg] = useState('Invocando los modelos arcanos...')
  const [loadingStep, setLoadingStep] = useState(LOADING_STEPS[0])
  const [showKeyPrompt, setShowKeyPrompt] = useState(false)
  const [keyInput, setKeyInput] = useState('')
  const [savedKey, setSavedKey] = useState('')

  // Load saved key after mount (avoids SSR / init crash)
  useEffect(() => {
    setSavedKey(getSavedKey())
  }, [])

  // Mouse / touch tracking
  useEffect(() => {
    const onMove = e => setMousePos({ x: e.clientX, y: e.clientY })
    const onTouch = e => {
      if (e.touches[0]) setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouch, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  // Background canvas
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

  // keep faceData in a ref so async handlers always have latest value
  useEffect(() => { faceDataRef.current = faceData }, [faceData])

  async function startOracle() {
    try {
      setAppState('loading')
      setStatusMsg('Invocando los modelos arcanos...')
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
      console.error('Oracle start error:', e)
      setStatusMsg('Error: ' + (e.message || 'No se pudo iniciar. Permite la cámara y recarga.'))
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
      } catch { /* ignore frame errors */ }
    }, 350)
  }

  async function handleEyeClick() {
    const fd = faceDataRef.current
    if (!fd) return
    const key = getSavedKey()
    if (!key) {
      setShowKeyPrompt(true)
      return
    }
    await generateCharacter(key, fd)
  }

  async function generateCharacter(key, fd) {
    const pool = ARCHETYPE_TYPES[getArchetypeKey(fd.age, fd.gender)]
    const chosenType = pickRandom(pool)

    setAppState('generating')
    let stepIdx = 0
    setLoadingStep(LOADING_STEPS[0])
    const stepTimer = setInterval(() => {
      stepIdx = (stepIdx + 1) % LOADING_STEPS.length
      setLoadingStep(LOADING_STEPS[stepIdx])
    }, 1800)

    try {
      const data = await generateMedievalCharacter(chosenType, fd.age, fd.gender, key)
      clearInterval(stepTimer)
      setArchetype({ type: chosenType, data })
      setAppState('revealed')
    } catch (err) {
      clearInterval(stepTimer)
      console.error('Generation error:', err)
      setStatusMsg('El oráculo falló: ' + (err.message || 'verifica tu API key.'))
      setAppState('error_gen')
    }
  }

  function handleSaveKey() {
    const trimmed = keyInput.trim()
    if (!trimmed) { alert('Ingresa tu API key'); return }
    saveKey(trimmed)
    setSavedKey(trimmed)
    setShowKeyPrompt(false)
    setKeyInput('')
    const fd = faceDataRef.current
    if (fd) generateCharacter(trimmed, fd)
  }

  function handleCloseModal() {
    setArchetype(null)
    setAppState('running')
    setStatusMsg('')
  }

  const isRunning = appState === 'running'
  const isLoading = appState === 'loading'
  const isGenerating = appState === 'generating'
  const isError = appState === 'error' || appState === 'error_gen'

  const statusText = isRunning
    ? (detected ? null : '✦ Muéstrale tu rostro al ojo del oráculo ✦')
    : isError ? statusMsg
    : appState === 'loading' ? statusMsg
    : null

  return (
    <>
      <div className="vignette" />
      <video ref={videoRef} className="hidden-cam" playsInline muted />

      <div className="oracle-wrap">
        {/* Title */}
        <div className="oracle-title">
          <h1>El Oráculo de las Vidas Pasadas</h1>
          <div className="divider">✦</div>
          <p>Revela quien fuiste en otra era</p>
        </div>

        {/* Eye / loading area */}
        <div className="eye-section">
          {isLoading ? (
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: '20px',
              width: 'clamp(200px,28vw,320px)', height: 'clamp(200px,28vw,320px)'
            }}>
              <div style={{ fontSize: '3rem', animation: 'runespin 1s linear infinite', color: 'var(--gold)', textShadow: '0 0 20px var(--gold)' }}>ᛟ</div>
              <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '3px', color: 'var(--gold)', animation: 'textpulse 1s ease-in-out infinite', textAlign: 'center', padding: '0 20px' }}>
                {statusMsg}
              </p>
            </div>
          ) : (
            <MagicEye
              mousePos={mousePos}
              detected={detected && isRunning}
              onClick={handleEyeClick}
            />
          )}
        </div>

        {/* Status */}
        {statusText && (
          <div className="oracle-status">
            <p style={{ color: isError ? '#ff6b35' : undefined }}>{statusText}</p>
          </div>
        )}

        {/* Error retry button */}
        {appState === 'error' && (
          <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            <button className="close-btn" style={{ padding: '10px 30px' }} onClick={startOracle}>
              ↻ Reintentar
            </button>
          </div>
        )}
        {appState === 'error_gen' && (
          <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '10px' }}>
            <button className="close-btn" style={{ padding: '10px 20px' }} onClick={() => { setAppState('running'); setStatusMsg('') }}>
              ↩ Volver
            </button>
            <button className="close-btn" style={{ padding: '10px 20px' }} onClick={() => setShowKeyPrompt(true)}>
              🔑 Cambiar Key
            </button>
          </div>
        )}

        {/* Face badges */}
        {detected && isRunning && faceData && (
          <div style={{
            position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '12px', zIndex: 10,
          }}>
            {[
              { label: 'Edad detectada', val: `~${faceData.age} años` },
              { label: 'Género', val: faceData.gender === 'male' ? '♂ Masculino' : '♀ Femenino' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(10,5,0,0.85)', border: '1px solid rgba(201,146,42,0.5)',
                padding: '6px 16px', textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '9px', letterSpacing: '3px', color: 'rgba(201,146,42,0.6)', textTransform: 'uppercase', marginBottom: '2px' }}>{s.label}</div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', color: '#f0c060', letterSpacing: '2px' }}>{s.val}</div>
              </div>
            ))}
          </div>
        )}

        {/* API Key button */}
        <button
          onClick={() => setShowKeyPrompt(true)}
          style={{
            position: 'fixed', top: '14px', right: '14px', zIndex: 20,
            background: 'rgba(10,5,0,0.85)', border: '1px solid rgba(201,146,42,0.4)',
            color: 'rgba(201,146,42,0.8)', fontFamily: 'Cinzel, serif',
            fontSize: '10px', letterSpacing: '2px', padding: '6px 12px',
            cursor: 'pointer',
          }}
        >
          {savedKey ? '🔑 KEY ✓' : '🔑 API KEY'}
        </button>
      </div>

      {/* Grimoire modal */}
      {(appState === 'revealed' || appState === 'generating') && (
        <GrimoireModal
          archetype={archetype}
          onClose={handleCloseModal}
          isLoading={isGenerating}
          loadingStep={loadingStep}
        />
      )}

      {/* API Key modal */}
      {showKeyPrompt && (
        <div className="reveal-overlay" onClick={e => e.target === e.currentTarget && setShowKeyPrompt(false)}>
          <div style={{
            background: 'var(--parchment)', border: '3px solid var(--gold)',
            boxShadow: '0 0 60px rgba(201,146,42,0.4)', padding: '32px',
            maxWidth: '460px', width: '90%',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🔑</div>
              <div style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '1.1rem', color: 'var(--crimson)', letterSpacing: '2px' }}>Llave del Oráculo</div>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '3px', color: 'var(--gold)', marginTop: '4px' }}>API KEY DE ANTHROPIC</div>
            </div>
            <p style={{ fontFamily: 'IM Fell English, serif', fontSize: '0.88rem', color: 'var(--deep)', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>
              Consigue tu key gratis en <strong>console.anthropic.com</strong> → API Keys → Create Key
            </p>
            <input
              type="password"
              placeholder="sk-ant-..."
              value={keyInput}
              onChange={e => setKeyInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSaveKey()}
              autoFocus
              style={{
                width: '100%', padding: '10px 14px', marginBottom: '12px',
                background: 'var(--deep)', border: '1px solid var(--gold)',
                color: 'var(--gold2)', fontFamily: 'monospace',
                fontSize: '13px', outline: 'none', display: 'block',
              }}
            />
            {savedKey && (
              <p style={{ fontFamily: 'Cinzel, serif', fontSize: '10px', color: 'var(--gold)', marginBottom: '10px', textAlign: 'center', letterSpacing: '2px' }}>
                ✓ Ya tienes una key guardada. Deja vacío para mantenerla.
              </p>
            )}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="close-btn" onClick={() => setShowKeyPrompt(false)} style={{ flex: 1, marginTop: 0 }}>
                Cancelar
              </button>
              <button className="close-btn" onClick={handleSaveKey} style={{ flex: 1, marginTop: 0, background: 'var(--gold)', color: 'var(--deep)' }}>
                ✦ Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
