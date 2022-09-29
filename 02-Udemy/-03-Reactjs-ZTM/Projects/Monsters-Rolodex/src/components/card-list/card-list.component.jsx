import Card from "./card.component";
import "./card-list.styles.css";
// inialize cartlist component
const CardList = ({ monsters }) => (
  // const { monsters } = props;
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);
export default CardList;
