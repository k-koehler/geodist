import { distanceHaversineMeters } from "./math.ts";

export enum DistanceAlgorithm {
  Haversine,
  Vincenty,
}

export class GeoLocation {
  /**
   * latitude of the location
   */
  public latitude: number;
  /**
   * longitude of the location
   */
  public longitude: number;

  /**
   * create a new geolocation
   * @param latitude
   * @param longitude
   * @returns new instance of a GeoLocation class
   */
  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  /**
   * get the distance in meters between two geolocations
   * @param geolocation 
   * @returns f64 distance in meters between this and param
   */
  public distanceTo(
    geolocation: GeoLocation,
    algorithm: DistanceAlgorithm = DistanceAlgorithm.Haversine,
  ) {
    switch (algorithm) {
      case DistanceAlgorithm.Haversine:
        return distanceHaversineMeters(
          this.latitude,
          this.longitude,
          geolocation.latitude,
          geolocation.longitude,
        );
      default:
        throw new Error("not implemented yet");
    }
  }
}
