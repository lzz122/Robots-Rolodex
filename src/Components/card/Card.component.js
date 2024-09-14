import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const {id, name, email} = this.props.content;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={`monster ${name}`}
        ></img>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;