// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/newscard.css';

let NewsCard = (props) => {
  return (
    <div class="card">
      <img
        src={props.image}
        class="card-img-top"
      />
      <div class="card-body">
        <h4 class="card-title">{props.title}</h4>
        <p class="card-text">By: {props.author}</p>
        <p class="card-text">
        {props.mini}
        </p>
        <a href="#" class="btn btn-dark" id="linker">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
