/**
 * Procedural land-mask data for the interactive globe.
 *
 * Instead of loading an external image we encode simplified continent
 * rectangles as lat/lng bounding boxes and generate land-points by
 * rejection-sampling against them.  The result is a Float32Array of
 * 3D positions on a unit sphere that can be fed directly to a
 * THREE.BufferGeometry.
 */

// --- simplified continental regions (lat °N, lng °E) ---
// Each entry: [latMin, latMax, lngMin, lngMax]
const LAND_RECTS: [number, number, number, number][] = [
  // North America
  [25, 50, -130, -65],
  [50, 60, -140, -55],
  [60, 72, -170, -60],
  [15, 25, -110, -80],
  [10, 20, -90, -75],
  // Central America
  [7, 20, -92, -77],
  // South America
  [-5, 13, -82, -60],
  [-25, -5, -80, -35],
  [-40, -25, -72, -48],
  [-55, -40, -75, -63],
  // Europe
  [36, 45, -10, 30],
  [45, 55, -10, 40],
  [55, 65, 5, 42],
  [65, 72, 10, 35],
  [36, 42, -10, 3],
  // Africa
  [20, 37, -18, 40],
  [5, 20, -18, 50],
  [-10, 5, 8, 42],
  [-25, -10, 15, 40],
  [-35, -25, 17, 33],
  // Middle East
  [12, 42, 30, 60],
  // Asia — Russia / Siberia
  [50, 72, 40, 180],
  [50, 55, 40, 60],
  // China / Mongolia
  [20, 55, 73, 135],
  // India / SE-Asia
  [8, 35, 68, 98],
  [-8, 8, 95, 140],
  // Japan / Korea
  [30, 46, 128, 146],
  // Indonesia / Philippines
  [-8, 20, 95, 140],
  // Australia
  [-40, -12, 112, 154],
  // New Zealand
  [-47, -34, 166, 178],
  // Greenland
  [60, 84, -73, -12],
  // Scandinavia
  [55, 72, 4, 32],
  // UK / Ireland
  [50, 60, -11, 2],
  // Madagascar
  [-26, -12, 43, 50],
  // Iceland
  [63, 66, -24, -13],
];

function isLand(lat: number, lng: number): boolean {
  for (const [latMin, latMax, lngMin, lngMax] of LAND_RECTS) {
    if (lat >= latMin && lat <= latMax && lng >= lngMin && lng <= lngMax) {
      return true;
    }
  }
  return false;
}

function latLngToXYZ(
  lat: number,
  lng: number,
  r: number
): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  const x = -r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.cos(phi);
  const z = r * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

/**
 * Generate land-dot positions on a unit sphere.
 * Returns a Float32Array of [x,y,z, x,y,z, …] with pointCount entries.
 */
export function generateLandPoints(
  pointCount: number = 2800,
  radius: number = 1
): Float32Array {
  const positions: number[] = [];
  // Grid-sampling approach: walk a lat/lng grid and collect land points
  // then subsample to target count
  const candidates: [number, number][] = [];

  // Higher density near equator gets naturally corrected by cos(lat)
  for (let lat = -70; lat <= 80; lat += 1.5) {
    const cosLat = Math.cos((lat * Math.PI) / 180);
    const lngStep = Math.max(1.5, 1.5 / cosLat);
    for (let lng = -180; lng < 180; lng += lngStep) {
      if (isLand(lat, lng)) {
        candidates.push([lat, lng]);
      }
    }
  }

  // Deterministic shuffle using simple PRNG
  let seed = 42;
  const rng = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  const selected = candidates.slice(0, pointCount);
  for (const [lat, lng] of selected) {
    // Small jitter to avoid perfect grid look
    const jLat = lat + (rng() - 0.5) * 1.2;
    const jLng = lng + (rng() - 0.5) * 1.2;
    const [x, y, z] = latLngToXYZ(jLat, jLng, radius);
    positions.push(x, y, z);
  }

  return new Float32Array(positions);
}

/**
 * Generate orbital arc points.  Each arc is a set of 3D positions along
 * a great-circle-like path tilted relative to the equator.
 */
export function generateOrbitalArc(
  tiltDeg: number,
  rotateYDeg: number,
  radius: number,
  segments: number = 128
): Float32Array {
  const tilt = (tiltDeg * Math.PI) / 180;
  const rotY = (rotateYDeg * Math.PI) / 180;
  const pts = new Float32Array(segments * 3);
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    // start with a circle in XZ
    let x = radius * Math.cos(angle);
    let y = 0;
    let z = radius * Math.sin(angle);
    // tilt around X
    const y2 = y * Math.cos(tilt) - z * Math.sin(tilt);
    const z2 = y * Math.sin(tilt) + z * Math.cos(tilt);
    // rotate around Y
    const x3 = x * Math.cos(rotY) + z2 * Math.sin(rotY);
    const z3 = -x * Math.sin(rotY) + z2 * Math.cos(rotY);
    pts[i * 3] = x3;
    pts[i * 3 + 1] = y2;
    pts[i * 3 + 2] = z3;
  }
  return pts;
}
