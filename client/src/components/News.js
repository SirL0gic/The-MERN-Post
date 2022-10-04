// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/newscard.css';

let NewsCard = () => {
  return (
    <div class="card">
      <img
        src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
       
        </p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
       
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
