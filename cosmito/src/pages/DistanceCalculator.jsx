import React, { useState, useMemo } from 'react';
import { calculateDistances } from '../data/cosmology';
import { HUBBLE_DEFAULT, OMEGA_M_DEFAULT, OMEGA_L_DEFAULT } from '../data/constants';
import { motion } from 'framer-motion';

const StatRow = ({ label, value, unit }) => (
  <div className="stat-item" style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    borderBottom: '1px solid rgba(255,255,255,0.1)', 
    padding: '12px 0' 
  }}>
    <span style={{ color: '#94a3b8' }}>{label}</span>
    <span style={{ color: 'white', fontWeight: 'bold' }}>
      {typeof value === 'number' ? value.toLocaleString(undefined, { maximumFractionDigits: 2 }) : value} {unit}
    </span>
  </div>
);

export default function DistanceCalculator() {
  const [z, setZ] = useState(1.0);
  const [h0, setH0] = useState(HUBBLE_DEFAULT);
  const [om, setOm] = useState(OMEGA_M_DEFAULT);
  const [ol, setOl] = useState(OMEGA_L_DEFAULT);

  const resetParameters = () => {
    setZ(1.0);
    setH0(HUBBLE_DEFAULT);
    setOm(OMEGA_M_DEFAULT);
    setOl(OMEGA_L_DEFAULT);
  };

  const results = useMemo(() => calculateDistances(z, h0, om, ol), [z, h0, om, ol]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="main-grid"
      style={{ gridTemplateRows: 'auto' }}
    >
      <aside className="controls panel">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#7dd3fc', fontFamily: "'Syne Mono', monospace" }}>Parameters</h2>
        
        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
            Redshift (z): <span style={{ color: 'white' }}>{z.toFixed(2)}</span>
          </label>
          <input 
            type="range" min="0" max="20" step="0.01" value={z} 
            onChange={(e) => setZ(parseFloat(e.target.value))} 
            style={{ width: '100%' }}
          />
        </div>

        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
            Hubble H₀: <span style={{ color: 'white' }}>{h0}</span>
          </label>
          <input 
            type="range" min="50" max="100" step="1" value={h0} 
            onChange={(e) => setH0(parseInt(e.target.value))} 
            style={{ width: '100%' }}
          />
        </div>

        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
            Ω_matter: <span style={{ color: 'white' }}>{om.toFixed(2)}</span>
          </label>
          <input 
            type="range" min="0" max="1" step="0.01" value={om} 
            onChange={(e) => setOm(parseFloat(e.target.value))} 
            style={{ width: '100%' }}
          />
        </div>

        <div className="control-group">
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
            Ω_lambda: <span style={{ color: 'white' }}>{ol.toFixed(2)}</span>
          </label>
          <input 
            type="range" min="0" max="1" step="0.01" value={ol} 
            onChange={(e) => setOl(parseFloat(e.target.value))} 
            style={{ width: '100%' }}
          />
        </div>

        <button className="reset-button" onClick={resetParameters}>
          RESET TO STANDARD
        </button>
      </aside>

      <section className="stats panel">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#7dd3fc', fontFamily: "'Syne Mono', monospace" }}>Results</h2>
        <StatRow label="Comoving Distance" value={results.comoving} unit="Mpc" />
        <StatRow label="Luminosity Distance" value={results.luminosity} unit="Mpc" />
        <StatRow label="Angular Diameter Distance" value={results.angularDiameter} unit="Mpc" />
        <StatRow label="Light Travel Time" value={results.lookbackTime} unit="Byrs" />
        
        <div className="astrophysics-note">
          <p>
            <strong>Astrophysics Note:</strong> At z={z.toFixed(2)}, the photons we receive today left their source approximately {results.lookbackTime.toFixed(2)} billion years ago. Due to cosmic expansion, the object is now {results.comoving.toFixed(0)} Mpc away from us.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
