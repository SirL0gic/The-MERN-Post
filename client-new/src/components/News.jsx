import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShareImg from "../assets/share.png";
import RobotImg from "../assets/robot.png";

let NewsCard = (props) => {
  const [msg, setMsg] = useState("");
  const [level, setLevel] = useState([]);

  const copyToClipboard = (value) => {
    const tempElement = document.createElement("textarea");
    tempElement.value = value;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    setMsg("Link copied to clipboard!");
  };

  const getSenti = async (text) => {
    const dev_url = "http://localhost:4000";
    const production_url = "https://thereactpost.xyz";
    axios.defaults.baseURL = production_url;

    const analysis = await axios.post("/api/senti", { textual: text });
    setLevel(analysis.data);
  };

  return (
    <div className="card" style={{ width: "80%", marginBottom: "50px" }}>
      <img
        src={props.image}
        loading="lazy"
        className="card-img-top"
        id="new-imgg"
        alt="news-img"
      />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          <span style={{ fontWeight: "bold" }}>By:</span> {props.author}
        </p>
        <p className="card-text">
          <span style={{ fontWeight: "bold" }}>Date:</span> {props.date}
        </p>
        <p className="card-text">{props.description}</p>
        <Link to={`/article/${props.articleIndex}`}>
          <button className="btn btn-dark">Read More</button>
        </Link>

        <img
          className="share-img"
          loading="lazy"
          src={ShareImg}
          width="25px"
          height="25px"
          alt="share-icon"
          style={{ marginLeft: "20px", cursor: "pointer" }}
          onClick={() => copyToClipboard(props.link)}
        />
        <img
          className="ai-analyse"
          loading="lazy"
          src={RobotImg}
          width="35px"
          height="35px"
          alt="robot-icon"
          style={{ marginLeft: "30px", marginBottom: "5px", cursor: "pointer" }}
          onClick={() => getSenti(props.description)}
        />
        <p style={{ marginTop: "20px" }}>{msg}</p>
        <p style={{ marginTop: "20px" }}>Positivity Value: {level.positivityValue} {level.emoji}</p>
      </div>
    </div>
  );
};

export default NewsCard;
