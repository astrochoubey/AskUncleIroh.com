export default function Controls({ hubble, setHubble, redshift, setRedshift, darkEnergy, setDarkEnergy }) {
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
    </div>
  );
}
