export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const removeFromFavouritesAction = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: fav,
  };
};

export const addToFavouritesAction = (fav) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: fav,
  };
};
