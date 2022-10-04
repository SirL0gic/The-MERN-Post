import ReactWeather from "react-open-weather-widget";
import "react-open-weather-widget/lib/css/ReactWeather.css";
import '../css/weather.css'


//remove a certain class
// const boxes = document.querySelectorAll('.rw-box-right');

// boxes.forEach(box => {
//   box.remove();
// });


export default function WeatherWidget() {
    return (
        
      <div className="w-widget">
        <ReactWeather
          forecast="today"
          apikey="f6973195b3a29969a6ad7e393d2ac38b"
          type="city"
          city="Dubai"
        />
      </div>
    );
  }
  