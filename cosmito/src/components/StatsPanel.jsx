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
    <div className="stats-panel" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0', color: '#7dd3fc', textAlign: 'center' }}>Physics Engine</h2>
      
      <div className="stat-item" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
        <span style={{ color: '#94a3b8' }}>Universe Age</span>
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          <AnimatedNumber value={age} suffix=" Byrs" decimals={1} />
        </span>
      </div>

      <div className="stat-item" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
        <span style={{ color: '#94a3b8' }}>Scale Factor (a)</span>
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          <AnimatedNumber value={scaleFactor} decimals={3} />
        </span>
      </div>

      <div className="stat-item" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
        <span style={{ color: '#94a3b8' }}>Redshift (z)</span>
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          <AnimatedNumber value={redshift} decimals={1} />
        </span>
      </div>

      <div className="stat-item" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
        <span style={{ color: '#94a3b8' }}>Expansion Speed (v)</span>
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          <AnimatedNumber value={expansionSpeed} suffix=" km/s" decimals={0} />
        </span>
      </div>

    </div>
  );
}