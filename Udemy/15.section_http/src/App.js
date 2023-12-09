import React , {useState , useEffect , useCallback }from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies , setMovie] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(false);

  const fetchMovieHandler = useCallback( async ()=>{
    setLoading(true);
    setError(false);

    try{
      const response = await fetch('https://swapi.dev/api/films')
      if(!response.ok){
        throw new Error('Connect Error');
      }

      const fetchData = await response.json();

      const resultData = fetchData.results.map((e)=>{
        return{
            id : e.episode_id,
            title : e.title,
            releaseDate : e.release_date, 
            openingText: e.opening_crawl
        }
      });

      setMovie(resultData);
    }

    catch(error){
      setError(error.message);
    }

    finally{
      setLoading(false);
    }
  
  },[])

  useEffect(()=>{
    fetchMovieHandler();
  },[fetchMovieHandler]);

  console.log(movies);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading && <p>Loading.....</p>}
        {!loading && movies.length === 0 && !error && <p>Not Found Moive</p> }
        {!loading && <MoviesList movies={movies}/>}
        {error && !loading && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
