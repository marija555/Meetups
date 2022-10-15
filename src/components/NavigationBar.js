import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";
import classes from "./NavigationBar.module.css"

function NavigationBar() {

    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <h1> Meetups</h1>
            <nav>
                <ul>
                    <li>
                        <Link to = "/" > All meetups </Link>
                    </li>
                    <li>
                        <Link to = "/new-meetup" > New Meetup </Link>
                    </li>
                    <li>
                        <Link to = "/favorites" > Favorites <span className="total">{favoritesCtx.total}</span> </Link>
                    </li>
                </ul>
           </nav>
        </header>
    )
}

export default NavigationBar;