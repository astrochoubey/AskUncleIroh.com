import { useState } from 'react';
import './styles/global.css';
import UniverseCanvas from './components/UniverseCanvas';
import Controls from './components/Controls';
import StatsPanel from './components/StatsPanel';
import Navbar from './components/Navbar';
import DistanceCalculator from './pages/DistanceCalculator';

function App() {
  const [activeTab, setActiveTab] = useState('simulation');
  const [hubble, setHubble] = useState(70);
  const [redshift, setRedshift] = useState(0);
  const [darkEnergy, setDarkEnergy] = useState(68);

  const resetParameters = () => {
    setHubble(70);
    setRedshift(0);
    setDarkEnergy(68);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <h1>COSMITO</h1>
          <p>Interactive Cosmological Expansion Simulator</p>
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

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'simulation' ? (
        <div className="main-grid simulation-grid">
          <aside className="controls panel">
            <Controls
              hubble={hubble} setHubble={setHubble}
              redshift={redshift} setRedshift={setRedshift}
              darkEnergy={darkEnergy} setDarkEnergy={setDarkEnergy}
              onReset={resetParameters}
            />
          </aside>

          <section className="universe panel">
            <UniverseCanvas hubble={hubble} />
          </section>

          <section className="stats panel">
            <StatsPanel hubble={hubble} redshift={redshift} />
          </section>
        </div>
      ) : (
        <DistanceCalculator />
      )}
    </div>
  );
}

export default App;