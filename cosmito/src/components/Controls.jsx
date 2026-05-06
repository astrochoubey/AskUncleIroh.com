export default function Controls({ hubble, setHubble, redshift, setRedshift, darkEnergy, setDarkEnergy, onReset }) {
  return (
    <div className="controls-panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#7dd3fc', fontFamily: "'Iceland', sans-serif" }}>Parameters</h2>

      <div className="control-group">
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
          Hubble Constant (H₀): <span style={{ color: 'white' }}>{hubble}</span>
        </label>
        <input
          type="range"
          min="50"
          max="100"
          value={hubble}
          onChange={(e) => setHubble(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <div className="control-group">
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
          Redshift (z): <span style={{ color: 'white' }}>{redshift.toFixed(1)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={redshift}
          onChange={(e) => setRedshift(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <div className="control-group">
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
          Dark Energy (%): <span style={{ color: 'white' }}>{darkEnergy}</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={darkEnergy}
          onChange={(e) => setDarkEnergy(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <button 
        onClick={onReset}
        style={{
          marginTop: '10px',
          padding: '12px',
          background: 'rgba(125, 211, 252, 0.1)',
          border: '1px solid rgba(125, 211, 252, 0.3)',
          borderRadius: '12px',
          color: '#7dd3fc',
          fontFamily: "'Syne Mono', monospace",
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          letterSpacing: '1px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(125, 211, 252, 0.2)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(125, 211, 252, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(125, 211, 252, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        RESET TO STANDARD
      </button>
    </div>
  );
}
