import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../store/favorites-context";
function MeetupItem(props) {

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.isFavorite(props.id);

  function toggleFavoriteStatusHandler(){
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id)
    }
    else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        desc: props.desc,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <Card >
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.desc}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>{(itemIsFavorite) ? 'REMOVE FAVORITE' : 'TO FAVORITES'}</button>
      </div>
    </Card>
  );
}
export default MeetupItem;
