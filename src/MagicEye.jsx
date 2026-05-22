import { useState, useEffect, useRef } from 'react'

export default function MagicEye({ mousePos, detected, onClick, countdown, facePos }) {
  const eyeRef    = useRef(null)
  const rafRef    = useRef(null)
  const currentPos= useRef({ x: 0, y: 0 })   // smoothed current position
  const targetPos = useRef({ x: 0, y: 0 })   // raw target (face or mouse)
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 })
  const [blinking, setBlinking] = useState(false)

  // ── Random blink ──
  useEffect(() => {
    let t
    const schedule = () => {
      t = setTimeout(() => {
        setBlinking(true)
        setTimeout(() => { setBlinking(false); schedule() }, 160)
      }, 2500 + Math.random() * 2500)
    }
    schedule()
    return () => clearTimeout(t)
  }, [])

  // ── Update raw target whenever mouse or facePos changes ──
  useEffect(() => {
    const src = (detected && facePos) ? facePos : mousePos
    if (!eyeRef.current) { targetPos.current = src; return }
    const rect = eyeRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width  / 2
    const cy = rect.top  + rect.height / 2
    const dx = src.x - cx
    const dy = src.y - cy
    const dist = Math.sqrt(dx * dx + dy * dy) || 1
    const max  = 26
    const r    = Math.min(dist, max) / dist
    targetPos.current = { x: dx * r, y: dy * r }
  }, [mousePos, facePos, detected])

  // ── Smooth animation loop — lerp current → target every frame ──
  useEffect(() => {
    const LERP = 0.18   // 0 = no movement, 1 = instant — tweak here

    const loop = () => {
      const cur = currentPos.current
      const tgt = targetPos.current
      const nx  = cur.x + (tgt.x - cur.x) * LERP
      const ny  = cur.y + (tgt.y - cur.y) * LERP
      currentPos.current = { x: nx, y: ny }

      // Only re-render when movement is visible (> 0.05px)
      if (Math.abs(nx - cur.x) > 0.05 || Math.abs(ny - cur.y) > 0.05) {
        setPupilPos({ x: nx, y: ny })
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // ── Colors ──
  const eyeColor  = detected ? '#b040ff' : '#c9922a'
  const eyeColor2 = detected ? '#df80ff' : '#f0c060'
  const irisInner = detected ? '#cc00ff' : '#b8722a'
  const irisOuter = detected ? '#600080' : '#3d1a00'
  const sclera    = detected ? '#f0e0ff' : '#f5e8c8'
  const pupilDark = detected ? '#1a0030' : '#050200'

  // ── Countdown ring ──
  const radius  = 155
  const circum  = 2 * Math.PI * radius
  const dashOff = countdown !== null ? circum * (1 - (5 - countdown) / 5) : circum

  const runeChars = ['ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᚾ','ᛁ','ᛃ']

  return (
    <div
      className="eye-frame"
      ref={eyeRef}
      onClick={onClick}
      style={{
        position: 'relative',
        filter: detected
          ? 'drop-shadow(0 0 40px #b040ff) drop-shadow(0 0 80px rgba(160,0,255,0.4))'
          : 'drop-shadow(0 0 30px #c9922a) drop-shadow(0 0 60px rgba(200,80,20,0.4))',
        transition: 'filter 0.8s ease',
      }}
    >
      {detected && <div className="detected-ring" style={{ borderColor: '#b040ff' }} />}

      {/* ── OUTER RUNE RING ── */}
      <svg className="rune-ring" viewBox="0 0 400 400"
        style={{ position:'absolute', inset:-30, width:'calc(100% + 60px)', height:'calc(100% + 60px)' }}>

        {/* Countdown arc */}
        {countdown !== null && (
          <circle cx="200" cy="200" r={radius}
            fill="none" stroke={eyeColor2} strokeWidth="3"
            strokeDasharray={circum} strokeDashoffset={dashOff}
            strokeLinecap="round" transform="rotate(-90 200 200)"
            style={{ transition:'stroke-dashoffset 0.25s linear', opacity:0.9 }}
          />
        )}

        <circle cx="200" cy="200" r="185" fill="none" stroke={eyeColor} strokeWidth="1" strokeOpacity="0.4"/>
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2
          return <line key={i}
            x1={200 + 178 * Math.cos(a)} y1={200 + 178 * Math.sin(a)}
            x2={200 + 192 * Math.cos(a)} y2={200 + 192 * Math.sin(a)}
            stroke={eyeColor} strokeWidth="1.5" strokeOpacity="0.6"/>
        })}
        {runeChars.map((r, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2
          return <text key={i}
            x={200 + 160 * Math.cos(a)} y={200 + 160 * Math.sin(a)}
            textAnchor="middle" dominantBaseline="middle"
            fontSize="14" fill={eyeColor} fillOpacity="0.8" fontFamily="serif">{r}</text>
        })}
      </svg>

      {/* ── INNER RUNE RING ── */}
      <svg className="rune-ring2" viewBox="0 0 340 340"
        style={{ position:'absolute', inset:-15, width:'calc(100% + 30px)', height:'calc(100% + 30px)' }}>
        <circle cx="170" cy="170" r="155" fill="none" stroke={eyeColor}
          strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="4 8"/>
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i / 16) * Math.PI * 2
          return <line key={i}
            x1={170 + 148 * Math.cos(a)} y1={170 + 148 * Math.sin(a)}
            x2={170 + 160 * Math.cos(a)} y2={170 + 160 * Math.sin(a)}
            stroke={eyeColor} strokeWidth="1" strokeOpacity="0.5"/>
        })}
      </svg>

      {/* ── COUNTDOWN NUMBER ── */}
      {countdown !== null && countdown > 0 && (
        <div style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%,-50%)',
          zIndex:10, pointerEvents:'none',
          fontFamily:'Cinzel Decorative,serif',
          fontSize:'clamp(2.5rem,6vw,4rem)',
          color:'#df80ff',
          textShadow:'0 0 30px #b040ff, 0 0 60px rgba(160,0,255,0.6)',
          fontWeight:900, lineHeight:1,
          animation:'textpulse 0.5s ease-in-out infinite',
        }}>
          {countdown}
        </div>
      )}

      {/* ── MAIN EYE SVG ── */}
      <svg className="eye-svg" viewBox="0 0 300 300">
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%">
            <stop offset="0%"   stopColor={detected ? '#200030' : '#1a0800'}/>
            <stop offset="100%" stopColor={detected ? '#0d0015' : '#0a0300'}/>
          </radialGradient>
          <radialGradient id="irisGrad" cx="40%" cy="35%">
            <stop offset="0%"   stopColor={detected ? '#e060ff' : '#b8722a'}/>
            <stop offset="40%"  stopColor={irisInner}/>
            <stop offset="100%" stopColor={irisOuter}/>
          </radialGradient>
          <radialGradient id="pupilGrad" cx="35%" cy="30%">
            <stop offset="0%"   stopColor={detected ? '#3a0050' : '#1a0800'}/>
            <stop offset="100%" stopColor={pupilDark}/>
          </radialGradient>
          <filter id="irisGlow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <filter id="eyeGlow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <clipPath id="eyeClip">
            <ellipse cx="150" cy="150" rx="110" ry={blinking ? 3 : 68}/>
          </clipPath>
        </defs>

        <ellipse cx="150" cy="150" rx="130" ry="90" fill="url(#bgGrad)"/>

        <g clipPath="url(#eyeClip)">
          <ellipse cx="150" cy="150" rx="110" ry="68" fill={sclera}/>

          <circle cx={150 + pupilPos.x} cy={150 + pupilPos.y} r="50"
            fill="url(#irisGrad)" filter="url(#irisGlow)"/>

          {Array.from({ length: 16 }, (_, i) => {
            const a  = (i / 16) * Math.PI * 2
            const px = 150 + pupilPos.x, py = 150 + pupilPos.y
            return <line key={i}
              x1={px + 20 * Math.cos(a)} y1={py + 20 * Math.sin(a)}
              x2={px + 48 * Math.cos(a)} y2={py + 48 * Math.sin(a)}
              stroke={detected ? '#9900cc' : '#8b4513'} strokeWidth="0.8" strokeOpacity="0.45"/>
          })}

          <circle cx={150 + pupilPos.x} cy={150 + pupilPos.y} r="22" fill="url(#pupilGrad)"/>
          <ellipse cx={150 + pupilPos.x} cy={150 + pupilPos.y} rx="8" ry="20" fill={pupilDark}/>
          <ellipse
            cx={150 + pupilPos.x - 8} cy={150 + pupilPos.y - 8} rx="5" ry="7"
            fill="rgba(255,255,255,0.35)"
            transform={`rotate(-20,${150 + pupilPos.x - 8},${150 + pupilPos.y - 8})`}/>

          {detected && <>
            <circle cx={150 + pupilPos.x} cy={150 + pupilPos.y} r="50"
              fill="none" stroke="#cc44ff" strokeWidth="1.5" strokeOpacity="0.5"/>
            <circle cx={150 + pupilPos.x} cy={150 + pupilPos.y} r="36"
              fill="none" stroke="#9900ff" strokeWidth="0.8" strokeOpacity="0.4"/>
          </>}
        </g>

        <path d="M 40 150 Q 150 70 260 150"  fill="none" stroke={eyeColor} strokeWidth="2.5"/>
        <path d="M 40 150 Q 150 230 260 150" fill="none" stroke={eyeColor} strokeWidth="2.5"/>
        <circle cx="40"  cy="150" r="4" fill={eyeColor} fillOpacity="0.7"/>
        <circle cx="260" cy="150" r="4" fill={eyeColor} fillOpacity="0.7"/>

        {detected && (
          <ellipse cx="150" cy="150" rx="115" ry="72"
            fill="none" stroke="#b040ff" strokeWidth="2.5" strokeOpacity="0.35"
            filter="url(#eyeGlow)"/>
        )}
      </svg>

      {/* Sparks */}
      {detected && Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="spark" style={{
          '--ang':   `${i * 36}deg`,
          '--dur':   `${1.4 + i * 0.18}s`,
          '--delay': `${i * 0.15}s`,
          background: i % 2 === 0 ? '#cc44ff' : '#df80ff',
        }}/>
      ))}

      {detected && countdown === null && (
        <div className="click-hint" style={{ color:'#b040ff' }}>
          ✦ TOCA EL OJO PARA REVELAR TU DESTINO ✦
        </div>
      )}
    </div>
  )
}
