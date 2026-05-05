
const TEA_OPTIONS = [
  { 
    id: 'jasmine', 
    name: 'Jasmine Dragon', 
    desc: 'Delicate & floral',
    image: 'https://img.icons8.com/color/96/tea-cup.png', 
    theme: '#e8dfc8', 
    textColor: '#3d1f0e' 
  },
  { 
    id: 'ginseng', 
    name: 'Ginseng Tea', 
    desc: 'Earthy & reviving',
    image: 'https://img.icons8.com/color/96/teapot.png', 
    theme: '#e8d5b0', 
    textColor: '#3d1f0e'
  },
  { 
    id: 'oolong', 
    name: 'Oolong Tea', 
    desc: 'Smooth & complex',
    image: 'https://img.icons8.com/color/96/tea.png', 
    theme: '#ddc9a0', 
    textColor: '#3d1f0e'
  },
  { 
    id: 'white-dragon', 
    name: 'White Dragon', 
    desc: 'Pure & serene',
    image: 'https://img.icons8.com/color/96/lotus.png', 
    theme: '#f0e8d0', 
    textColor: '#3d1f0e'
  },
  { 
    id: 'ginger', 
    name: 'Ginger Tea', 
    desc: 'Bold & warming',
    image: 'https://img.icons8.com/color/96/ginger.png', 
    theme: '#e0cc90', 
    textColor: '#3d1f0e'
  }
];

function Menu({ onSelect }) {
  return (
    <div className="menu-page">
      {/* Hanging wooden sign */}
      <div className="shop-sign-wrapper">
        <div className="sign-chain">
          <div className="sign-chain-link" />
          <div className="sign-chain-link" />
          <div className="sign-chain-link" />
        </div>
        <div className="shop-sign">
          {/* Corner bracket decorations */}
          <div className="sign-corner sign-corner--tl" />
          <div className="sign-corner sign-corner--tr" />
          <div className="sign-corner sign-corner--bl" />
          <div className="sign-corner sign-corner--br" />

          {/* Moon medallion with dragon */}
          <div className="sign-moon">
            <div className="sign-dragon">🐉</div>
            <p className="shop-sign-title">The Jasmine Dragon</p>
            <p className="sign-tea-house">Tea House</p>
            <p className="sign-quality">Quality Teas of<br />Ba Sing Se</p>
          </div>

          {/* Tagline at bottom */}
          <p className="sign-tagline">Or Deadly Poison?</p>
        </div>
      </div>


      {/* Iroh quote */}
      <p className="menu-quote-banner">
        "Sharing tea with a fascinating stranger is one of life's true delights." — Iroh
      </p>

      <p className="menu-label">Choose Your Tea</p>

      <div className="tea-grid">
        {TEA_OPTIONS.map((tea) => (
          <button
            key={tea.id}
            onClick={() => onSelect(tea)}
            className="tea-card-button"
          >
            <img src={tea.image} alt={tea.name} className="menu-icon" />
            <span className="tea-card-name">{tea.name}</span>
            <span className="tea-card-desc">{tea.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Menu;