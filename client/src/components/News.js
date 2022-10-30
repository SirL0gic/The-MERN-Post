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
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
        {props.mini}
        </p>
        <a href="#" class="btn btn-dark ">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
