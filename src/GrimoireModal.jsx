export default function GrimoireModal({ archetype, onClose }) {
  const a = archetype

  return (
    <div
      className="reveal-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="grimoire">
        <div className="grimoire-inner">
          <span className="grim-corner-bl">✦</span>
          <span className="grim-corner-br">✦</span>

          {/* Seal / Header */}
          <div className="archetype-seal">
            <div className="archetype-icon">{a.icon}</div>
            <div className="archetype-name">{a.name}</div>
            <div className="archetype-title">{a.title}</div>
          </div>

          {/* Stats badges */}
          <div className="stats-row">
            <span className="stat-badge">⚔ {a.stats.era}</span>
            <span className="stat-badge">⚜ {a.stats.reino}</span>
            <span className="stat-badge">☽ {a.stats.edad_vivida}</span>
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

          <button className="close-btn" onClick={onClose}>
            ✦ Cerrar el Grimorio ✦
          </button>
        </div>
      </div>
    </div>
  )
}
