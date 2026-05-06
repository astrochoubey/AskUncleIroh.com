import React from 'react';

const navStyles = {
  display: 'flex',
  gap: '30px',
  marginBottom: '30px',
  padding: '10px 30px',
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '50px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.1)',
  width: 'fit-content',
  margin: '0 auto 30px auto'
};

const buttonStyles = (active) => ({
  background: 'none',
  border: 'none',
  color: active ? '#7dd3fc' : '#94a3b8',
  fontFamily: "'Iceland', sans-serif",
  fontSize: '1.2rem',
  cursor: 'pointer',
  padding: '5px 15px',
  transition: 'all 0.3s ease',
  textShadow: active ? '0 0 10px rgba(125, 211, 252, 0.5)' : 'none'
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
}git 