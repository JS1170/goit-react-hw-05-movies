import { useState, useEffect } from 'react';
import { trendingApi } from '../../API/filmApi';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [filmsApi, setFilmsApi] = useState(null);
  const location = useLocation();

  useEffect(() => {
    trendingApi()
      .then(({ data }) => {
        console.log(data);
        setFilmsApi(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {filmsApi &&
          filmsApi.map(({ id, original_title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                      {/* <img alt={original_title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width={300}  /> */}
                <h2>{original_title}</h2>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
