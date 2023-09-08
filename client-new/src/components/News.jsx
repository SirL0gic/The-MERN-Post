import ShareImg from "../assets/share.png"

let NewsCard = (props) => {

  const copyToClipboard = (value) => {
    const tempElement = document.createElement('textarea');
    tempElement.value = value;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="card" style={{ width: "80%", marginBottom: "50px" }}>
      <img src={props.image} className="card-img-top" id="new-imgg" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          <span style={{ fontWeight: "bold" }}>By:</span> {props.author}
        </p>
        <p className="card-text">
          <span style={{ fontWeight: "bold" }}>Date:</span> {props.date}
        </p>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-dark" id="linker">
          Read More
        </a>
        <img className="share-img" src={ShareImg} width="25px" height="25px" alt="share-icon" style={{marginLeft:"20px"}} onClick={() => copyToClipboard(props.link)} />
      </div>
    </div>
  );
};

export default NewsCard;
