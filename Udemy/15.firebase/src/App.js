import React, { useEffect, useCallback , useReducer } from 'react';
import { initalData, reducer , actionType } from './reducer';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
// import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [state , dispatch] = useReducer(reducer , initalData);
  console.log(state);
  const fetchMoviesHandler = useCallback(async () => {
    dispatch({type : actionType.DATABASE_REPONSE })
    try {
      const response = await fetch('https://fir-967c0-default-rtdb.firebaseio.com/movie.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const Arr = Object.keys(data).map((key) => ({...data[key] , id : key}));
      
      dispatch({type : 'FETCH_SUCESSES' , payload : Arr});

    } catch (error) {
      dispatch({type : 'FETCH_FALSE' , payload : error.message})
    }
    dispatch({type : 'DATABASE_REPONSE_COMPLETE'})
  }, []);


  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  async function addMovieHandler(movie) {
    try {
      const response = await fetch('https://fir-967c0-default-rtdb.firebaseio.com/movie.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Server returned an Error!!');
      }
      dispatch({type : 'ADD'});
    } catch (error) {
      console.log(error.message);
    }
  }

  const movieDelete = async(id) => {
    dispatch({type : 'DELETE_ING'});
    try{
      await fetch(`https://fir-967c0-default-rtdb.firebaseio.com/movie/${id}.json` , 
      {
        method : 'DELETE',
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      dispatch({type : 'DELETE_SUCESSES'});
    }
    catch(error){
      console.log(error.message);
    }
  
  }


  let content = <p>Found no movies.</p>;

  if(state.movie){
    content = <MoviesList movieDelete={movieDelete} movies={state.movie}/>
  }
  if (state.movie === 0) {
    content = <p>데이터가 없습니다.</p>;
  }
  if(state.error){
    content = <p>{state.error}</p>;
  }
  if (state.isLoading) {
    content = <p>Loading...</p>;
  }
  if (state.isDelete) {
    content = <p>삭제중...</p>;
  }

 
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
 