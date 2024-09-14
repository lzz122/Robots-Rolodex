import Card from "../card/Card.component";
import "./card-list.styles.css";


function CardList(props) {
  const {robots} = props;
  return (
    <div className="card-list">
      {robots.map((robot) => (
        <Card content={robot} key={robot.id}/>
      ))}
    </div>
  );
}

export default CardList;

