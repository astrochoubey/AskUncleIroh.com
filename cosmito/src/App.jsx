import { useState } from 'react';
import './styles/global.css';
import UniverseCanvas from './components/UniverseCanvas';
import Controls from './components/Controls';
import StatsPanel from './components/StatsPanel';
import ExpansionGraph from './components/ExpansionGraph';

function App() {
  const [hubble, setHubble] = useState(70);
  const [redshift, setRedshift] = useState(0);
  const [darkEnergy, setDarkEnergy] = useState(68);
  return (
    <div className="app">
      <header className="header">

        <div className="header-left">
          <h1>COSMITO</h1>

          <p>
            Interactive Cosmological Expansion Simulator
          </p>
        </div>

        <div className="header-right">
          <div className="status-dot"></div>

          <div className="header-stats">
            <span>LIVE UNIVERSE</span>
            <span>z = {redshift}</span>
            <span>H₀ = {hubble} km/s/Mpc</span>
          </div>
        </div>
      </header>

      <div className="main-grid">

        <aside className="controls">
          <Controls
            hubble={hubble} setHubble={setHubble}
            redshift={redshift} setRedshift={setRedshift}
            darkEnergy={darkEnergy} setDarkEnergy={setDarkEnergy}
          />
        </aside>

        <section className="universe">
          <UniverseCanvas hubble={hubble} />
        </section>

        <section className="stats">
          <StatsPanel hubble={hubble} redshift={redshift} />
        </section>

        <section className="graph">
          <ExpansionGraph hubble={hubble} />
        </section>

      </div>

    </div>
  );
}

export default App;