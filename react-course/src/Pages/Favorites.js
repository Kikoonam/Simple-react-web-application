import{useContext} from 'react';

import FavoritesContext from '../store/favorite-context';
import MeetupList from '../Components/meetups/MeetupList';



function FavoritesPages(){
    const favoritesCtx = useContext(FavoritesContext);
    return <section>
        <h1> Favorites Pages </h1>
        <MeetupList meetups ={favoritesCtx.favorites}/>
        </section>
};

export default FavoritesPages;