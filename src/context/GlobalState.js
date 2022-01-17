import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer (AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
}, [state])

  const addMovieToWatchList = (id) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: id });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const moveToWatchlist = (id) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: id });
  };


  return (
    <GlobalContext.Provider value={{
      watchlist: state.watchlist, 
      addMovieToWatchList,
      removeMovieFromWatchList,
      moveToWatchlist}}>
      {props.children}
    </GlobalContext.Provider>
  );
};