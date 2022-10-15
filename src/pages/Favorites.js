import { useContext } from "react";
import MeetupList from "../meetup/MeetupList";
import FavoritesContext from "../store/favorites-context";


function Favorites() {

    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if(favoritesCtx.total ===0 ){
      content= "You got no favorites yet..."
    } 
    else {
      content = <MeetupList meetups = {favoritesCtx.favorites}/>
    }

    return <div>
      <h1> Your favorites:</h1>
      {content}
    </div>;
  }
  
  export default Favorites;
  