import { useEffect, useState, useRef } from "react";

function AnimatedNumber({ value, suffix = "", decimals = 1 }) {
  const [display, setDisplay] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    const from = prevValue.current;
    const to = value;
    prevValue.current = value;

    const duration = 800;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + (to - from) * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [value]);

  return <span>{display.toFixed(decimals) + suffix}</span>;
}

export default function StatsPanel({ hubble, redshift }) {
  const age = 13.8 * (70 / hubble);
  const scaleFactor = 1 / (1 + redshift);
  const distanceMpc = 10; // example observation distance
  const expansionSpeed = hubble * distanceMpc;

  return (
    <div className="stats-panel">
      <h2>Physics Engine</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Universe Age</h3>
          <p>
            <AnimatedNumber value={age} suffix=" Byrs" decimals={1} />
          </p>
        </div>

        <div className="stat-card">
          <h3>Scale Factor (a)</h3>
          <p>
            <AnimatedNumber value={scaleFactor} decimals={3} />
          </p>
        </div>

        <div className="stat-card">
          <h3>Redshift (z)</h3>
          <p>
            <AnimatedNumber value={redshift} decimals={1} />
          </p>
        </div>

        <div className="stat-card">
          <h3>Expansion Speed</h3>
          <p>
            <AnimatedNumber value={expansionSpeed} suffix=" km/s" decimals={0} />
          </p>
        </div>
      </div>
    </div>
  );
}