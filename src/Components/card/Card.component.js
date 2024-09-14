import "./card.styles.css";

function Card(props) {
  const {id, name, email} = props.content;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={`robot ${name}`}
        ></img>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
}

export default Card;