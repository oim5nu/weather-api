export class CreateWeatherDto {
  theDate: string;
  city: string;
  sequence: string;
  temperature: string;
  highestTemperature: string;
  lowestTemperature: string;
  condition: string;
}

export class GetWeatherDto {
  city?: string;
}
