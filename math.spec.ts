import { distanceHaversineMeters } from "./math.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// using https://www.nhc.noaa.gov/gccalc.shtml to verify results

// distanceHaversineMeters
(() => {
  Deno.test("it should compute the dist from paris to london", () => {
    assertEquals(
      distanceHaversineMeters(51.509865, -0.118092, 48.864716, 2.349014),
      342536.21226624836, // 342 km
    );
  });
})();
