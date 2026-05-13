const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: [...state.favourites.list, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: state.favourites.list.filter((fav) => fav !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
