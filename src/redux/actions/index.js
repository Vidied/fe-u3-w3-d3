export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

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

export const jobAction = (query) => {
  return async (dispatch) => {
    dispatch({ type: GET_JOBS_LOADING, payload: true });
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20",
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOBS_LOADING, payload: false });
        dispatch({ type: GET_JOBS_ERROR, payload: false });
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        throw new Error("Errore recupero dati");
      }
    } catch (err) {
      dispatch({ type: GET_JOBS_ERROR, payload: err.message });
    } finally {
      dispatch({ type: GET_JOBS_LOADING, payload: false });
    }
  };
};
