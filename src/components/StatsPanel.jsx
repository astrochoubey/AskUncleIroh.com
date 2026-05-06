import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function AnimatedNumber({ value, suffix = "", decimals = 1 }) {
  const count = useMotionValue(value);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals) + suffix);

  useEffect(() => {
    const controls = animate(count, value, { duration: 0.8, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
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