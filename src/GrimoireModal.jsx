import { useState, useEffect } from 'react'
import { buildImageUrl, buildFallbackImageUrl } from './imageApi'

export default function GrimoireModal({ archetype, onClose }) {
  const [imgLoaded, setImgLoaded]   = useState(false)
  const [imgError, setImgError]     = useState(false)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    setImgLoaded(false); setImgError(false); setUseFallback(false)
  }, [archetype?.name])

  if (!archetype) return null

  const a = archetype
  const imageUrl = useFallback ? buildFallbackImageUrl(a) : buildImageUrl(a)

  const handleImgError = () => {
    if (!useFallback) { setUseFallback(true); setImgLoaded(false) }
    else setImgError(true)
  }

  return (
    <div className="reveal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="grimoire">
        <div className="grimoire-inner">
          <span className="grim-corner-bl">✦</span>
          <span className="grim-corner-br">✦</span>

          {/* IMAGE */}
          <div style={{ textAlign:'center', marginBottom:'20px' }}>
            <div style={{ position:'relative', display:'inline-block', border:'3px solid var(--gold)', boxShadow:'0 0 30px rgba(201,146,42,0.4)', background:'var(--deep)', overflow:'hidden', maxWidth:'280px', width:'100%' }}>
              {['tl','tr','bl','br'].map(pos => (
                <div key={pos} style={{ position:'absolute', width:'18px', height:'18px', zIndex:2, pointerEvents:'none',
                  top: pos.includes('t') ? '6px':'auto', bottom: pos.includes('b') ? '6px':'auto',
                  left: pos.includes('l') ? '6px':'auto', right: pos.includes('r') ? '6px':'auto',
                  borderTop: pos.includes('t') ? '2px solid var(--gold)':'none',
                  borderBottom: pos.includes('b') ? '2px solid var(--gold)':'none',
                  borderLeft: pos.includes('l') ? '2px solid var(--gold)':'none',
                  borderRight: pos.includes('r') ? '2px solid var(--gold)':'none',
                }}/>
              ))}

              {!imgLoaded && !imgError && (
                <div style={{ width:'100%', aspectRatio:'2/3', minHeight:'220px', background:'linear-gradient(135deg,var(--deep) 0%,#3d2200 50%,var(--deep) 100%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'12px' }}>
                  <div style={{ fontSize:'3rem', animation:'iconFloat 2s ease-in-out infinite' }}>{a.icon}</div>
                  <div style={{ fontFamily:'Cinzel,serif', fontSize:'10px', letterSpacing:'3px', color:'var(--gold)', animation:'textpulse 1.5s infinite' }}>CONJURANDO IMAGEN...</div>
                </div>
              )}

              {!imgError && (
                <img src={imageUrl} alt={a.name}
                  onLoad={() => setImgLoaded(true)} onError={handleImgError}
                  style={{ width:'100%', display: imgLoaded ? 'block':'none', aspectRatio:'2/3', objectFit:'cover', filter:'sepia(15%) contrast(1.05)' }}
                />
              )}

              {imgError && (
                <div style={{ width:'100%', minHeight:'220px', background:'var(--deep)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'12px' }}>
                  <div style={{ fontSize:'5rem' }}>{a.icon}</div>
                  <div style={{ fontFamily:'Cinzel,serif', fontSize:'10px', letterSpacing:'2px', color:'var(--gold)', textAlign:'center', padding:'0 20px' }}>{a.name}</div>
                </div>
              )}

              {imgLoaded && (
                <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'50px', background:'linear-gradient(to top,var(--parchment),transparent)', pointerEvents:'none' }}/>
              )}
            </div>
          </div>

          {/* HEADER */}
          <div className="archetype-seal" style={{ marginTop:0, marginBottom:'14px' }}>
            <div style={{ fontSize:'1.8rem', lineHeight:1 }}>{a.icon}</div>
            <div className="archetype-name">{a.name}</div>
            <div className="archetype-title">{a.title}</div>
          </div>

          <div className="stats-row">
            <span className="stat-badge">⚔ {a.era}</span>
            <span className="stat-badge">⚜ {a.reino}</span>
          </div>

          <div className="grim-divider">✦ ✧ ✦</div>

          <div className="prophecy-scroll">
            <div className="prophecy-label">⚡ La Profecía de tu Vida Pasada</div>
            <div className="prophecy-text">{a.prophecy}</div>
          </div>

          <div className="legend-block">
            <div className="legend-label">📜 La Leyenda</div>
            <div className="legend-text">{a.legend}</div>
          </div>

          <div className="grim-divider">✦ ✧ ✦</div>

          <div className="legend-label" style={{ marginBottom:'8px' }}>⚜ Dones y Habilidades</div>
          <div className="abilities-grid">
            {(a.abilities || []).map((ab, i) => (
              <div className="ability-card" key={i}>
                <span className="ability-icon">{ab.icon}</span>
                <span className="ability-name">{ab.name}</span>
                <div className="ability-bar">
                  <div className="ability-fill" style={{ '--pct':`${ab.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="grim-divider">✦ ✧ ✦</div>

          <div className="fate-verse">
            <p style={{ whiteSpace:'pre-line' }}>{a.verse}</p>
            <cite>{a.verse_attr}</cite>
          </div>

          <button className="close-btn" onClick={onClose}>✦ Cerrar el Grimorio ✦</button>
        </div>
      </div>
    </div>
  )
}
