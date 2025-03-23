import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendingMovieData("movie");
  }, []);


  async function getTrendingMovieData(type) {
    try {
      const apiKey = '';
      let resp = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`);
      console.log(21, resp.data.results);

      setMovieData(resp.data.results);

    } catch (e) {


    } finally {

    }

  }



  return (
    <>
      <div className="background_container">
        <div className="button_container">
          <button onClick={() => {
            getTrendingMovieData("movie");
          }
          }>
            Trending Movies
          </button>
          <button onClick={() => {
            getTrendingMovieData("tv");
          }
          }>
            Trending TV
          </button>
        </div>
        <div className='flex-container'>
          {movieData.map((item) =>
            <div className="movie_item">
              <img alt={"Movie or tv show"} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
              <div className="movie_name">
                {item.original_title ? item.original_title : item.original_name}

              </div>
            </div>
          )}
        </div>
      </div>
    </>

  );
}

export default App;
