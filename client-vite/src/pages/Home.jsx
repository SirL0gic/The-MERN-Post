import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../components/Nav";
import Header from "../components/Head";
import DateTime from "../components/Date";
import NewsCard from "../components/News";
import WeatherWidget from "../components/weather";
import { Tweet } from "react-twitter-widgets";
import CalendarWidget from "../components/Calendar";
import AnimationNews from "../components/Animation";
import FooterComp from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";



let HomePage = () =>{
    return (
        <h1>Home page</h1>
    )
}

export default HomePage;