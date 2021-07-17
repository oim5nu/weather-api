export interface Weather {
  id: string;
  theDate: Date;
  city: string;
  sequence: number;
  temperature: string;
  highestTemperature: string;
  lowestTemperature: string;
  condition: WeatherCondition;
}

export enum WeatherCondition {
  CLEAR = 'Clear',
  CLOUDY = 'Cloudy',
  RAINING = 'Raining',
}
