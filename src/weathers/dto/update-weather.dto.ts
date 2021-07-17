export class UpdateWeatherQueryDto {
  city: string;
  sequence: string;
}
export class UpdateWeatherDto {
  city: string;
  sequence: string;
  theDate?: string;
  temperature?: string;
  highestTemperature?: string;
  lowestTemperature?: string;
  condition?: string;
}
