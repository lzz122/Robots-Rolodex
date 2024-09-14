import { Component } from "react";
import Card from "../card/Card.component";
import "./card-list.styles.css";


class CardList extends Component {

  render() {
    const {robots} = this.props;
    return (
      <div className="card-list">
        {robots.map((robot) => (
          <Card content={robot} key={robot.id}/>
        ))}
      </div>
    );
  }
}

export default CardList;

