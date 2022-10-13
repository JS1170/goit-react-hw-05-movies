import { searchMovieApi } from '../../API/filmApi';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  MovieList,
  MovieItem,
  LinkStyled,
  HomeImg,
  HomeName,
  NotFoundText,
} from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import { HomeContainer } from '../Home/Home.styled';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [filmsApi, setFilmsApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const refForm = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const lastFilmSearch = searchParams.get('name');
    if (lastFilmSearch) {
      setInputValue(lastFilmSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    if (inputValue) {
      setLoading(true);
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
        })
        .finally(() => {
          setLoading(false);
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
    <HomeContainer>
      <Form onSubmit={onSearchForm} ref={refForm}>
        <Input name="searchValue" placeholder="Film's name"></Input>
        <Button type="submit">Search</Button>
      </Form>
      {filmsApi?.length < 1 && !null && (
        <NotFoundText>This film doesn't found</NotFoundText>
      )}
      {loading ? (
        <Loader />
      ) : (
        <MovieList>
          {filmsApi &&
            filmsApi.map(({ id, original_title, poster_path }) => {
              const imgEmpty = poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : `https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=230%2C350&ssl=1`;
              return (
                <MovieItem key={id}>
                  <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                    <HomeImg alt={original_title} src={imgEmpty} />
                    <HomeName>{original_title}</HomeName>
                  </LinkStyled>
                </MovieItem>
              );
            })}
        </MovieList>
      )}
    </HomeContainer>
  );
};
