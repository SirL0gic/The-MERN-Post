let NewsCard = (props) => {
  return (
    <div className="card" style={{width:"80%"}}>
      <img
        src={props.image}
        className="card-img-top"
        id="new-imgg"
        // height={props.height}
      />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">By: {props.author}</p>
        <br></br>
        <p className="card-text">{props.mini}</p>
        <a href={props.link} className="btn btn-dark" id="linker">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
