import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function ExpansionGraph({ hubble }) {
  // Generate fake cosmology data based on Hubble constant
  // Higher H0 means steeper curve
  const data = useMemo(() => {
    const dataPoints = [];
    // cosmic time from 0 to 14 billion years
    for (let time = 0; time <= 14; time += 1) {
      // Let's use a simple exponential model: a(t) ~ exp(H * t)
      // We normalize H0 so the graph looks clean and stays within a nice range
      const normalizedH0 = hubble / 70; 
      
      // Calculate scale factor, making it steeper for higher Hubble constants
      const scale = 0.1 * Math.exp(normalizedH0 * time * 0.18);
      
      dataPoints.push({
        time: time,
        scale: Number(scale.toFixed(3))
      });
    }
    return dataPoints;
  }, [hubble]);

  return (
    <div className="expansion-graph" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#7dd3fc', textAlign: 'center' }}>Expansion Graph</h2>
      
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, bottom: 20, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="time" 
              stroke="#94a3b8" 
              tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: "'Syne Mono', monospace" }}
              label={{ value: 'Cosmic Time (Byrs)', position: 'bottom', offset: 0, fill: '#94a3b8', fontSize: 12, fontFamily: "'Syne Mono', monospace" }} 
            />
            <YAxis 
              stroke="#94a3b8" 
              tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: "'Syne Mono', monospace" }}
              label={{ value: 'Scale Factor (a)', angle: -90, position: 'insideLeft', offset: -5, fill: '#94a3b8', fontSize: 12, fontFamily: "'Syne Mono', monospace" }} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(125, 211, 252, 0.4)', borderRadius: '12px', color: '#fff', fontFamily: "'Syne Mono', monospace" }}
              itemStyle={{ color: '#7dd3fc' }}
              labelStyle={{ color: '#94a3b8', marginBottom: '5px' }}
            />
            <Line 
              type="monotone" 
              dataKey="scale" 
              stroke="#7dd3fc" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#020617', stroke: '#7dd3fc', strokeWidth: 2 }}
              activeDot={{ r: 7, fill: '#fff', stroke: '#7dd3fc', strokeWidth: 2 }}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
