// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/newscard.css';
import React from 'react';

let NewsCard = (props) => {
  return (
    <div class="card">
      <img
        src={props.image}
        class="card-img-top"
        id="new-imgg"
        height={props.height}
      />
      <div class="card-body">
        <h4 class="card-title">{props.title}</h4>
        <p class="card-text">By: {props.author}</p>
        <br></br>
        <p class="card-text">
        {props.mini}
        </p>
        <a href={props.link} class="btn btn-dark" id="linker">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
