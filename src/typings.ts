export interface IWeatherData {
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  city: string;
  countryCode: string;
  timestamp: number;
  humidity: number;
  weatherDescription: string;
  cloudiness: number;
}
