const initialState = {
  favourites: {
    content: [],
  },
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (fav) => fav !== action.payload,
          ),
        },
      };
    default:
      return state;
  }
};

export default favouritesReducer;
