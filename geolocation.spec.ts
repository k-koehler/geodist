import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import { GeoLocation, DistanceAlgorithm } from "./geolocation.ts";

// get latitude/longitude
(() => {
  Deno.test("it should return the lat/lng props", () => {
    const location = new GeoLocation(15, 15);
    assertEquals(location.latitude, 15);
    assertEquals(location.longitude, 15);
  });
})();

// distanceTo
(() => {
  Deno.test("it should throw an exception, distance algorithm not implemented yet", () => {
    assertThrows(() => {
      new GeoLocation(0, 0).distanceTo(
        new GeoLocation(0, 0),
        DistanceAlgorithm.Vincenty,
      );
    });
  });

  Deno.test("it should calculate the haversine distance from paris to london", () => {
    const london = new GeoLocation(51.509865, -0.118092);
    const paris = new GeoLocation(48.864716, 2.349014);
    assertEquals(london.distanceTo(paris), 342536.21226624836);
  });
})();
