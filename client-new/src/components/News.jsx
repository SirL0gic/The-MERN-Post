import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShareImg from "../assets/share.png";

let NewsCard = (props) => {
  const [msg, setMsg] = useState("")

  const copyToClipboard = (value) => {
    const tempElement = document.createElement("textarea");
    tempElement.value = value;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    // alert("Link copied to clipboard!");
    setMsg("Link copied to clipboard!")
  };

  return (
    <div className="card" style={{ width: "80%", marginBottom: "50px" }}>
      <img src={props.image} className="card-img-top" id="new-imgg" alt="news-img" />
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
          <button className="btn btn-dark">
            Read More
          </button>
        </Link>

        <img
          className="share-img"
          src={ShareImg}
          width="25px"
          height="25px"
          alt="share-icon"
          style={{ marginLeft: "20px" }}
          onClick={() => copyToClipboard(props.link)}
        />
        <p style={{ marginTop: "20px" }}>{msg}</p>
      </div>
    </div>
  );
};

export default NewsCard;
