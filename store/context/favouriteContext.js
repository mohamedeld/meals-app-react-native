import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids:[],
  addFavourite:(id)=>{},
  removeFavourite:(id)=>{}
});

function FavouriteContextProvider({children}){
  const [favouriteMealIds,setFavouriteMealIds] = useState([]);
  function addFavourite(id){
    setFavouriteMealIds(prev=> [...prev,id])
  }
  function removeFavourite(id){
    setFavouriteMealIds(prev=> prev?.filter(mealId=> mealId !== id));
  }
  return(
    <FavouritesContext.Provider value={{
      ids:favouriteMealIds,
      addFavourite:addFavourite,
      removeFavourite:removeFavourite
    }}>
      {children}
    </FavouritesContext.Provider>
  )
}
export default FavouriteContextProvider;