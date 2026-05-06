import React from 'react';

const navStyles = {
  display: 'flex',
  gap: '20px',
  marginBottom: '30px',
  padding: '8px 20px',
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '50px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  width: 'fit-content',
  margin: '0 auto 30px auto'
};

const buttonStyles = (active) => ({
  background: 'none',
  border: 'none',
  color: active ? '#7dd3fc' : '#94a3b8',
  fontFamily: "'Syne Mono', monospace",
  fontSize: '1.4rem',
  cursor: 'pointer',
  padding: '5px 20px',
  transition: 'all 0.3s ease',
  textShadow: active ? '0 0 15px rgba(125, 211, 252, 0.6)' : 'none',
  letterSpacing: '1px'
});

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav style={navStyles}>
      <button 
        style={buttonStyles(activeTab === 'simulation')} 
        onClick={() => setActiveTab('simulation')}
      >
        Simulation
      </button>
      <button 
        style={buttonStyles(activeTab === 'calculator')} 
        onClick={() => setActiveTab('calculator')}
      >
        Calculator
      </button>
    </nav>
  );
}