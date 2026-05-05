function TeaAnimation({ tea }) {
  return (
    <div className="brewing-container">
      <div className="tea-cup-emoji">🍵</div>
      <div className="steam-container">
        <span className="steam-particle"></span>
        <span className="steam-particle"></span>
        <span className="steam-particle"></span>
      </div>
      <h2 className="brewing-text">
        "Good tea takes time…"
      </h2>
      <p style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '0.8rem',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: '#6b3a1f',
        opacity: 0.8,
        marginTop: '4px'
      }}>
        Your {tea?.name} is steeping
      </p>
    </div>
  );
}

export default TeaAnimation;
