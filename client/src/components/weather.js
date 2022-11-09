import ReactWeather from "react-open-weather-widget";
import "react-open-weather-widget/lib/css/ReactWeather.css";

export default function WeatherWidget() {
  return (
    <ReactWeather
      forecast="today"
      apikey="f6973195b3a29969a6ad7e393d2ac38b"
      type="city"
      city="Dubai"
    />
  );
}
