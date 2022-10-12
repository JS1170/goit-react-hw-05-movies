import { searchMovieApi } from '../../API/filmApi';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [filmsApi, setFilmsApi] = useState(null);
  const refForm = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation ();

  useEffect(() => {
    const lastFilmSearch = searchParams.get('name');
    if (lastFilmSearch) {
      setInputValue(lastFilmSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    if (inputValue) {
      searchMovieApi(inputValue)
        .then(({ data }) => {
          console.log(data);
          setFilmsApi(data.results);
          setSearchParams({
            name: inputValue,
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [inputValue, setSearchParams]);

  const onSearchForm = event => {
    event.preventDefault();

    const { searchValue } = event.target.elements;
    setInputValue(searchValue.value);
    refForm.current.reset();
  };

  return (
    <>
      <form onSubmit={onSearchForm} ref={refForm}>
        <input name="searchValue" placeholder="Film's name"></input>
        <button type="submit">Search</button>
      </form>
      {filmsApi?.length < 1 && !null && <p>This film doesn't found</p>}
      <ul>
        {filmsApi &&
          filmsApi.map(({ id, original_title, poster_path }) => {
            const imgEmpty = poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : `https://image.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg`;

            return (
              <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                    <img alt={original_title} src={imgEmpty} />
                    <p>
                        {original_title}
                        </p>
                        </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
