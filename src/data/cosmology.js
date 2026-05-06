import { SPEED_OF_LIGHT } from './constants';

export function calculateDistances(z, h0, om, ol) {
  const ok = 1 - om - ol;
  const dh = SPEED_OF_LIGHT / h0; // Hubble distance in Mpc

  // Numerical integration for Comoving Distance
  // Dc = Dh * integral(0 to z) [ 1 / sqrt(om*(1+z')^3 + ok*(1+z')^2 + ol) ] dz'
  const steps = 1000;
  const dz = z / steps;
  let integral = 0;

  for (let i = 0; i < steps; i++) {
    const z1 = i * dz;
    const z2 = (i + 1) * dz;
    
    const e1 = Math.sqrt(om * Math.pow(1 + z1, 3) + ok * Math.pow(1 + z1, 2) + ol);
    const e2 = Math.sqrt(om * Math.pow(1 + z2, 3) + ok * Math.pow(1 + z2, 2) + ol);
    
    integral += (1 / e1 + 1 / e2) * 0.5 * dz;
  }

  const dc = dh * integral;

  // Transverse Comoving Distance Dm
  let dm;
  if (ok > 0.0001) {
    dm = dh / Math.sqrt(ok) * Math.sinh(Math.sqrt(ok) * dc / dh);
  } else if (ok < -0.0001) {
    dm = dh / Math.sqrt(Math.abs(ok)) * Math.sin(Math.sqrt(Math.abs(ok)) * dc / dh);
  } else {
    dm = dc;
  }

  const dl = (1 + z) * dm;
  const da = dm / (1 + z);
  
  // Light travel time approximation (lookback time)
  // t = 1/H0 * integral(0 to z) [ 1 / ((1+z')*E(z')) ] dz'
  let timeIntegral = 0;
  for (let i = 0; i < steps; i++) {
    const z1 = i * dz;
    const z2 = (i + 1) * dz;
    
    const f1 = 1 / ((1 + z1) * Math.sqrt(om * Math.pow(1 + z1, 3) + ok * Math.pow(1 + z1, 2) + ol));
    const f2 = 1 / ((1 + z2) * Math.sqrt(om * Math.pow(1 + z2, 3) + ok * Math.pow(1 + z2, 2) + ol));
    
    timeIntegral += (f1 + f2) * 0.5 * dz;
  }
  
  // Convert to Billion years. 1 Mpc = 3.0857e19 km. 1 year = 3.1536e7 s.
  // Dh / c = 1/H0. H0 in km/s/Mpc.
  // 1/H0 (s*Mpc/km) * (3.0857e19 km / 1 Mpc) / (3.1536e7 s / 1 yr)
  const conversionFactor = (3.0857e19 / 3.1536e7) / 1e9; // Mpc to Byrs conversion
  const lookbackTime = (1 / h0) * timeIntegral * conversionFactor;

  return {
    comoving: dc,
    luminosity: dl,
    angularDiameter: da,
    lookbackTime: lookbackTime
  };
}
