export interface Weather {
  id: string;
  theDate: string;
  city: string;
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
