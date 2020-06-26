// using SI base unit R_⊕
const EARTH_RADIUS_M = 6371000;
const DEG_2_RAD_SCALAR = 0.0174533;
const EARTH_RADIUS_EQ_M = 6378137.0;
const EARTH RADIUS_POLES_M = 6356752.314245;

export function distanceHaversineMeters(
  lat1Deg: number,
  lng1Deg: number,
  lat2Deg: number,
  lng2Deg: number,
) {
  const lat1Rad = lat1Deg * DEG_2_RAD_SCALAR;
  const lat2Rad = lat2Deg * DEG_2_RAD_SCALAR;
  return (
    2 *
    EARTH_RADIUS_M *
    Math.asin(
      Math.sqrt(
        (Math.sin((lat2Rad - lat1Rad) / 2) ** 2) +
          Math.cos(lat1Rad) *
            Math.cos(lat2Rad) *
            (Math.sin(
              ((lng2Deg * DEG_2_RAD_SCALAR) - (lng1Deg * DEG_2_RAD_SCALAR)) / 2,
            ) ** 2),
      ),
    )
  );
}

export function distanceVincentyMeters(
  lat1Deg: number,
  lng1Deg: number,
  lat2Deg: number,
  lng2Deg: number,
){
  const a = EARTH_RADIUS_M,
  f = 1/298.257223563,
}