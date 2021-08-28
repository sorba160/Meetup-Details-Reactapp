import { useContext } from 'react';
import Card from '../ui/card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';
function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext)
    const itemsFavorite = favoritesCtx.itemsFavorite(props.id)
    function toggleFavoriteStatusHandler() {
        if (itemsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image:props.image,
                address: props.address


            })
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemsFavorite ? "remove from favorites" : "to favorites"}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;