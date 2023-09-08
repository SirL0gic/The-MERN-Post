let NewsCard = (props) => {
  return (
    <div className="card" style={{width:"80%", marginBottom:"50px"}}>
      <img
        src={props.image}
        className="card-img-top"
        id="new-imgg"
      />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">By: {props.author}</p>
        <p className="card-text">Date {props.date}</p>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-dark" id="linker">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
