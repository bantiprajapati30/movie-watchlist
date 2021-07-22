
import { createContext, useEffect, useReducer } from "react";
import AppReducer from './AppReducer';
const initialState = {
    watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
}
//useEffect 

//create context 
export const GlobalContext = createContext(initialState);

//create provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    console.log(state)
    
    useEffect(()=>{
        localStorage.setItem('watchList', JSON.stringify(state.watchList));
    }, [state])
    
    //  action
    const addMovieToWatchList = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
        console.log("sent")
    };

    const removeMovieFormWatchlist =(id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    }

    const addMovieToWatched = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
        console.log("added in watched list")
    };
    
    const moveToWatchlist = movie=> {
        dispatch({type: "MOVE_TO_WATCHLIST", payload:movie})
    }
    
    const removeFromWatched =(id)=> {
        dispatch({type: "REMOVE_FROM_WATCHED", paylaod: id})
        console.log("remove movie from watched List");
    }

    return (
        <GlobalContext.Provider
            value={{
                watchList: state.watchList,
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFormWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}