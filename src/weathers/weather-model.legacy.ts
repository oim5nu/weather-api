export interface Weather {
  id: string;
  theDate: Date;
  city: string;
  seq: number;
  temperature: string;
  highestTemperature: string;
  lowestTemperature: string;
  weatherCondition: WeatherCondition;
}

export enum WeatherCondition {
  CLEAR = 'Clear',
  CLOUDY = 'Cloudy',
  RAINING = 'Raining',
}
