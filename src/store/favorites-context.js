import { createContext,useState } from "react";
const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0 , 
    addFavorite : (favoriteMeetup)=>{},
    removeFavorite:(meetupId)=>{},
    itemsFavorite:(meetupId)=>{}
}) 
 export function FavoritesContextProvider(props){  
    const[userFavorites,setUserFavorites]=useState([])
    
    function AddFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }
    
    function RemoveFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup=>meetup.id!==meetupId)
        })
    }
    
    function ItemsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=>meetup.id===meetupId)
    }
    const context = {
        favorites:userFavorites,
        totalFavorites : userFavorites.length ,
        addFavorite: AddFavoriteHandler,
        removeFavorite: RemoveFavoriteHandler,
        itemsFavorite : ItemsFavoriteHandler
    }
    return <FavoritesContext.Provider value={context}>
    {props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext

