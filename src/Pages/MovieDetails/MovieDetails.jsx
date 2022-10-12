import { aboutFilmInfo } from 'API/filmApi';
import { useState, useEffect } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const [filmApi, setFilmApi] = useState(null);
  const { movieId } = useParams();
  // console.log(movieId);
  const location = useLocation();
  const linkLocation = location.state?.from ?? '/movies';

  useEffect(() => {
    aboutFilmInfo(movieId)
      .then(({ data }) => {
        console.log(data);
        setFilmApi(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);
  return (
    <div>
      <Link to={linkLocation}>Go back</Link>
      {filmApi && (
        <div>
          <img
            alt={filmApi.original_title}
                      src={`https://image.tmdb.org/t/p/w500/${filmApi.poster_path}`}
                      width={300}
          />
          <div>
                      <h2>{filmApi.original_title} ({filmApi.release_date.slice(0,4)})</h2>
                      <p>User score: {Math.round(Number(filmApi.vote_average)*10)} %</p>
                      <p>Overview</p>
                      <p>{filmApi.overview}</p>
                      <p>Genres</p>
                      <p>{(filmApi.genres.map(genre => genre.name)).join(' ')}</p>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to='cast' state={{from:location.state?.from}}>Cast</Link>
              </li>
              <li>
                <Link to='reviews' state={{from:location.state?.from}}>Reviews</Link>
              </li>
            </ul>
          </div>
              </div>
             
          )}
           <Outlet/>
    </div>
  );
};
