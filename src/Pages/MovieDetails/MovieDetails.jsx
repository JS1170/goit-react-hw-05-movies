import { aboutFilmInfo } from 'API/filmApi';
import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  MovieName,
  StyledLink,
  MovieContainer,
  MovieImage,
  MovieUserScore,
  MovieOverview,
  MovieGenre,
  MovieAdditionalBtn,
  MovieAdditionalList,
  MovieAdditionalLink,
  MovieTitle,
} from './MovieDetails.styled';
import { Box } from '../../components/Box';

export const MovieDetails = () => {
  const [filmApi, setFilmApi] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  // console.log(movieId);
  const location = useLocation();
  const linkLocation = location.state?.from ?? '/movies';

  useEffect(() => {
    setLoading(true);
    aboutFilmInfo(movieId)
      .then(({ data }) => {
        console.log(data);
        setFilmApi(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  return (
    <Box width="800px" ml="auto" mr="auto" pb={2} pt={2} pl={6} pr={6}>
      <StyledLink to={linkLocation}>Go back</StyledLink>
      {loading && <Loader />}
      {filmApi && (
        <MovieContainer>
          <MovieImage
            alt={filmApi.original_title}
            src={`https://image.tmdb.org/t/p/w500/${filmApi.poster_path}`}
            width={300}
          />
          <div>
            <MovieName>
              {filmApi.original_title} ({filmApi.release_date.slice(0, 4)})
            </MovieName>
            <MovieUserScore>
              User score: {Math.round(Number(filmApi.vote_average) * 10)} %
            </MovieUserScore>
            <MovieTitle>Overview</MovieTitle>
            <MovieOverview>{filmApi.overview}</MovieOverview>
            <MovieTitle>Genres</MovieTitle>
            <MovieGenre>
              {filmApi.genres.map(genre => genre.name).join(', ')}
            </MovieGenre>
          </div>
        </MovieContainer>
      )}
      <div>
        <MovieTitle>Additional information</MovieTitle>
        <MovieAdditionalList>
          <MovieAdditionalBtn>
            <MovieAdditionalLink
              to="cast"
              state={{ from: location.state?.from }}
            >
              Cast
            </MovieAdditionalLink>
          </MovieAdditionalBtn>
          <MovieAdditionalBtn>
            <MovieAdditionalLink
              to="reviews"
              state={{ from: location.state?.from }}
            >
              Reviews
            </MovieAdditionalLink>
          </MovieAdditionalBtn>
        </MovieAdditionalList>
      </div>
      <Suspense fallback={<Loader />}>
        {' '}
        <Outlet />
      </Suspense>
    </Box>
  );
};
