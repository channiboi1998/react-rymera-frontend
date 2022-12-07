import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Fab } from '@mui/material'
import Style from '../../styles/movies/moviesListEntry.module.css'

const favorites = ({ movie }: any) => {

    /***
     * I am using localStorage for the `favorites` functionality.
     * The movies that are set favorite by the client will be stored on the localstorage id `favorites`.
     * Using useState for the purpose of fetching localStorage after build time.
     */
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [favoriteStatus, setFavoriteStatus] = useState(false);

    useEffect(() => {
        /***
         * Initial fetching of `favorites` on localStorage.
         */
        if (typeof window !== 'undefined') {
            const favorites = JSON.parse(localStorage.getItem("favorites") || '{}');
            setFavoriteItems(favorites);
        }
    }, []);

    useEffect(() => {
        /***
         * Checking if the movie.id is exisiting on this component's `favoriteItems`. This will serve as a condition on button to display on frontend.
         */
        const found = favoriteItems.find((id: number) => id === movie.id);
        if (found) {
            setFavoriteStatus(true);
        } else {
            setFavoriteStatus(false);
        }
    }, [favoriteItems]);

    const handleAddFavoriteEvent = (id: number, method: string) => {
        /***
         * This function is for handling `favorite` change event when the client toggles on the buttons.
         */
        let favorites = JSON.parse(localStorage.getItem("favorites") || '{}');

        if (method === "add") {
            /***
             * Add method is called, just adding the movie.id on the localStorage `favorites`.
             */
            favorites.push(movie.id);
            setFavoriteItems(favorites);
        /***
         * Updating the localStorage
         */
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else if (method === "remove") {
            /***
             * Remove method is called, then will find the `movie.id` on the localStorage `favorites` and remove it.
             */
            const index = favorites.indexOf(movie.id);
            if (index > -1) {
                favorites.splice(index, 1);
            }
            setFavoriteItems(favorites);
            /***
             * Updating the localStorage
             */
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }

    return (
        <React.Fragment>
            {favoriteStatus === true ?
                <Fab
                    size="small"
                    color="primary"
                    aria-label="add to favorites"
                    className={Style.favoriteIcon}
                    onClick={() => handleAddFavoriteEvent(movie.id, "remove")}
                ><FavoriteIcon />
                </Fab>
                :
                <Fab
                    size="small"
                    color="primary"
                    aria-label="add to favorites"
                    className={Style.favoriteIcon}
                    onClick={() => handleAddFavoriteEvent(movie.id, "add")}
                ><FavoriteBorderIcon />
                </Fab>
            }
        </React.Fragment>
    )
}

export default favorites