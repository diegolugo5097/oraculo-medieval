import { useState, useEffect } from 'react'
import { buildImageUrl, buildFallbackImageUrl } from './imageApi'

export default function GrimoireModal({ archetype, onClose, isLoading, loadingStep }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [useFallback, setUseFallback] = useState(false)

  const imageUrl = useFallback
    ? buildFallbackImageUrl(archetype.type)
    : buildImageUrl(archetype.type)

  const handleImgError = () => {
    if (!useFallback) {
      setUseFallback(true)
      setImgLoaded(false)
    } else {
      setImgError(true)
    }
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="reveal-overlay">
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px',
          color: 'var(--gold2)',
        }}>
          <div style={{ fontSize: '4rem', animation: 'runespin 1.5s linear infinite', display: 'inline-block' }}>ᛟ</div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', letterSpacing: '4px', textAlign: 'center', maxWidth: '300px' }}>
            {loadingStep}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['🔮','📜','✨'].map((r, i) => (
              <span key={i} style={{
                fontSize: '1.5rem',
                animation: `textpulse 1.2s ${i * 0.3}s ease-in-out infinite`
              }}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!archetype?.data) return null
  const a = archetype.data
  const t = archetype.type

  return (
    <div className="reveal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="grimoire">
        <div className="grimoire-inner">
          <span className="grim-corner-bl">✦</span>
          <span className="grim-corner-br">✦</span>

          {/* CHARACTER IMAGE */}
          <div style={{ position: 'relative', marginBottom: '20px', textAlign: 'center' }}>
            <div style={{
              position: 'relative',
              display: 'inline-block',
              border: '3px solid var(--gold)',
              boxShadow: '0 0 30px rgba(201,146,42,0.4), inset 0 0 30px rgba(0,0,0,0.3)',
              background: 'var(--deep)',
              overflow: 'hidden',
              maxWidth: '300px',
              width: '100%',
            }}>
              {/* Decorative corner marks */}
              {['tl','tr','bl','br'].map(pos => (
                <div key={pos} style={{
                  position: 'absolute',
                  width: '20px', height: '20px',
                  top: pos.includes('t') ? '6px' : 'auto',
                  bottom: pos.includes('b') ? '6px' : 'auto',
                  left: pos.includes('l') ? '6px' : 'auto',
                  right: pos.includes('r') ? '6px' : 'auto',
                  borderTop: pos.includes('t') ? '2px solid var(--gold)' : 'none',
                  borderBottom: pos.includes('b') ? '2px solid var(--gold)' : 'none',
                  borderLeft: pos.includes('l') ? '2px solid var(--gold)' : 'none',
                  borderRight: pos.includes('r') ? '2px solid var(--gold)' : 'none',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}/>
              ))}

              {/* Loading skeleton */}
              {!imgLoaded && !imgError && (
                <div style={{
                  width: '100%', aspectRatio: '2/3',
                  background: 'linear-gradient(135deg, var(--deep) 0%, #3d2200 50%, var(--deep) 100%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: '12px', minHeight: '240px',
                }}>
                  <div style={{ fontSize: '3rem', animation: 'iconFloat 2s ease-in-out infinite' }}>{t.icon}</div>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '10px', letterSpacing: '3px', color: 'var(--gold)', animation: 'textpulse 1.5s infinite' }}>
                    CONJURANDO IMAGEN...
                  </div>
                </div>
              )}

              {/* Actual image */}
              {!imgError && (
                <img
                  src={imageUrl}
                  alt={t.name}
                  onLoad={() => setImgLoaded(true)}
                  onError={handleImgError}
                  style={{
                    width: '100%',
                    display: imgLoaded ? 'block' : 'none',
                    aspectRatio: '2/3',
                    objectFit: 'cover',
                    filter: 'sepia(20%) contrast(1.05)',
                  }}
                />
              )}

              {/* Fallback if image completely fails */}
              {imgError && (
                <div style={{
                  width: '100%', minHeight: '240px',
                  background: 'var(--deep)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: '12px',
                }}>
                  <div style={{ fontSize: '5rem' }}>{t.icon}</div>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)', textAlign: 'center', padding: '0 20px' }}>
                    {t.name}
                  </div>
                </div>
              )}

              {/* Overlay gradient at bottom */}
              {imgLoaded && (
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '60px',
                  background: 'linear-gradient(to top, var(--parchment), transparent)',
                  pointerEvents: 'none',
                }}/>
              )}
            </div>
          </div>

          {/* Seal / Header */}
          <div className="archetype-seal" style={{ marginBottom: '14px', marginTop: 0 }}>
            <div style={{ fontSize: '1.8rem', lineHeight: 1 }}>{t.icon}</div>
            <div className="archetype-name">{t.name}</div>
            <div className="archetype-title">{t.title}</div>
          </div>

          {/* Stats badges */}
          <div className="stats-row">
            <span className="stat-badge">⚔ {t.era}</span>
            <span className="stat-badge">⚜ {t.reino}</span>
          </div>

          <div className="grim-divider">✦ ✧ ✦</div>

          {/* Prophecy */}
          <div className="prophecy-scroll">
            <div className="prophecy-label">⚡ La Profecía de tu Vida Pasada</div>
            <div className="prophecy-text" style={{ whiteSpace: 'pre-line' }}>{a.prophecy}</div>
          </div>

          {/* Legend */}
          <div className="legend-block">
            <div className="legend-label">📜 La Leyenda</div>
            <div className="legend-text" style={{ whiteSpace: 'pre-line' }}>{a.legend}</div>
          </div>

          <div className="grim-divider">✦ ✧ ✦</div>

          {/* Abilities */}
          <div style={{ marginBottom: '6px' }}>
            <div className="legend-label">⚜ Dones y Habilidades</div>
          </div>
          <div className="abilities-grid">
            {a.abilities.map((ab, i) => (
              <div className="ability-card" key={i}>
                <span className="ability-icon">{ab.icon}</span>
                <span className="ability-name">{ab.name}</span>
                <div className="ability-bar">
                  <div className="ability-fill" style={{ '--pct': `${ab.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="grim-divider">✦ ✧ ✦</div>

          {/* Verse */}
          <div className="fate-verse">
            <p style={{ whiteSpace: 'pre-line' }}>{a.verse}</p>
            <cite>{a.verse_attr}</cite>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button className="close-btn" onClick={onClose} style={{ flex: 1 }}>
              ✦ Cerrar el Grimorio ✦
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
