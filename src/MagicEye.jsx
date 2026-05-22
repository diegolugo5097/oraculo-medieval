import { useState, useEffect, useRef } from 'react'

export default function MagicEye({ mousePos, detected, onClick }) {
  const eyeRef = useRef(null)
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 })
  const [blinking, setBlinking] = useState(false)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 150)
    }, 3000 + Math.random() * 2000)
    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    if (!eyeRef.current) return
    const rect = eyeRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = mousePos.x - cx
    const dy = mousePos.y - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const maxDist = 22
    const ratio = Math.min(dist, maxDist) / (dist || 1)
    setPupilPos({ x: dx * ratio, y: dy * ratio })
  }, [mousePos])

  const eyeColor = detected ? '#ffd700' : '#c9922a'
  const pupilColor = detected ? '#8b0000' : '#2c1a00'
  const irisColor = detected ? '#ff8c00' : '#8b4513'

  const runeChars = ['ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᚾ','ᛁ','ᛃ']

  return (
    <div className="eye-frame" ref={eyeRef} onClick={onClick} style={{ position: 'relative' }}>
      {detected && <div className="detected-ring" />}

      {/* Outer rune ring */}
      <svg
        className="rune-ring"
        viewBox="0 0 400 400"
        style={{ position: 'absolute', inset: -30, width: 'calc(100% + 60px)', height: 'calc(100% + 60px)' }}
      >
        <circle cx="200" cy="200" r="185" fill="none" stroke={eyeColor} strokeWidth="1" strokeOpacity="0.4" />
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2
          return (
            <line key={i}
              x1={200 + 178 * Math.cos(a)} y1={200 + 178 * Math.sin(a)}
              x2={200 + 192 * Math.cos(a)} y2={200 + 192 * Math.sin(a)}
              stroke={eyeColor} strokeWidth="1.5" strokeOpacity="0.6"
            />
          )
        })}
        {runeChars.map((r, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2
          return (
            <text key={i}
              x={200 + 160 * Math.cos(a)} y={200 + 160 * Math.sin(a)}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="14" fill={eyeColor} fillOpacity="0.7" fontFamily="serif"
            >{r}</text>
          )
        })}
      </svg>

      {/* Inner rune ring */}
      <svg
        className="rune-ring2"
        viewBox="0 0 340 340"
        style={{ position: 'absolute', inset: -15, width: 'calc(100% + 30px)', height: 'calc(100% + 30px)' }}
      >
        <circle cx="170" cy="170" r="155" fill="none" stroke={eyeColor} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 8" />
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i / 16) * Math.PI * 2
          return (
            <line key={i}
              x1={170 + 148 * Math.cos(a)} y1={170 + 148 * Math.sin(a)}
              x2={170 + 160 * Math.cos(a)} y2={170 + 160 * Math.sin(a)}
              stroke={eyeColor} strokeWidth="1" strokeOpacity="0.4"
            />
          )
        })}
      </svg>

      {/* Main eye SVG */}
      <svg className="eye-svg" viewBox="0 0 300 300">
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#1a0800" />
            <stop offset="100%" stopColor="#0a0300" />
          </radialGradient>
          <radialGradient id="irisGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor={detected ? '#ff9500' : '#b8722a'} />
            <stop offset="40%" stopColor={irisColor} />
            <stop offset="100%" stopColor={detected ? '#6b0000' : '#3d1a00'} />
          </radialGradient>
          <radialGradient id="pupilGrad" cx="35%" cy="30%">
            <stop offset="0%" stopColor={detected ? '#4a0000' : '#1a0800'} />
            <stop offset="100%" stopColor={pupilColor} />
          </radialGradient>
          <filter id="eyeGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="irisGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <clipPath id="eyeClip">
            <ellipse cx="150" cy="150" rx="110" ry={blinking ? 3 : 68} />
          </clipPath>
        </defs>

        {/* Eye socket bg */}
        <ellipse cx="150" cy="150" rx="130" ry="90" fill="url(#bgGrad)" />

        <g clipPath="url(#eyeClip)">
          {/* Sclera */}
          <ellipse cx="150" cy="150" rx="110" ry="68" fill={detected ? '#ffeedd' : '#f5e8c8'} />

          {/* Iris */}
          <circle cx={150 + pupilPos.x} cy={150 + pupilPos.y} r="50" fill="url(#irisGrad)" filter="url(#irisGlow)" />

          {/* Iris lines */}
          {Array.from({ length: 16 }, (_, i) => {
            const a = (i / 16) * Math.PI * 2
            const px = 150 + pupilPos.x, py = 150 + pupilPos.y
            return (
              <line key={i}
                x1={px + 20 * Math.cos(a)} y1={py + 20 * Math.sin(a)}
                x2={px + 48 * Math.cos(a)} y2={py + 48 * Math.sin(a)}
                stroke={detected ? '#ff6600' : '#8b4513'} strokeWidth="0.8" strokeOpacity="0.4"
              />
            )
          })}

          {/* Pupil */}
          <circle cx={150 + pupilPos.x} cy={150 + pupilPos.y} r="22" fill="url(#pupilGrad)" />
          {/* Slit */}
          <ellipse cx={150 + pupilPos.x} cy={150 + pupilPos.y} rx="8" ry="20" fill="#050200" />
          {/* Highlight */}
          <ellipse
            cx={150 + pupilPos.x - 8} cy={150 + pupilPos.y - 8}
            rx="5" ry="7"
            fill="rgba(255,255,255,0.35)"
            transform={`rotate(-20,${150 + pupilPos.x - 8},${150 + pupilPos.y - 8})`}
          />

          {detected && (
            <>
              <circle cx={150 + pupilPos.x} cy={150 + pupilPos.y} r="50" fill="none" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.5" />
              <circle cx={150 + pupilPos.x} cy={150 + pupilPos.y} r="38" fill="none" stroke="#ff8c00" strokeWidth="0.8" strokeOpacity="0.4" />
            </>
          )}
        </g>

        {/* Eyelids */}
        <path d="M 40 150 Q 150 70 260 150" fill="none" stroke={eyeColor} strokeWidth="2.5" />
        <path d="M 40 150 Q 150 230 260 150" fill="none" stroke={eyeColor} strokeWidth="2.5" />

        {/* Corner dots */}
        <circle cx="40" cy="150" r="4" fill={eyeColor} fillOpacity="0.6" />
        <circle cx="260" cy="150" r="4" fill={eyeColor} fillOpacity="0.6" />

        {detected && (
          <ellipse cx="150" cy="150" rx="115" ry="72" fill="none" stroke="#ffd700" strokeWidth="2" strokeOpacity="0.4" filter="url(#eyeGlow)" />
        )}
      </svg>

      {/* Sparks */}
      {detected && Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="spark" style={{
          '--ang': `${i * 45}deg`,
          '--dur': `${1.5 + i * 0.2}s`,
          '--delay': `${i * 0.18}s`
        }} />
      ))}

      {detected && (
        <div className="click-hint">✦ TOCA EL OJO PARA REVELAR TU DESTINO ✦</div>
      )}
    </div>
  )
}
