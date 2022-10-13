import { useState, useEffect } from 'react';
import { trendingApi } from '../../API/filmApi';
import { useLocation } from 'react-router-dom';
import { HomeContainer, Title, HomeList, LinkStyled, HomeImg, HomeName } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [filmsApi, setFilmsApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    trendingApi()
      .then(({ data }) => {
        console.log(data);
        setFilmsApi(data.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <HomeContainer>
      <Title>Trending today</Title>
      {loading ? (
        <Loader />
      ) : (
        <HomeList>
          {filmsApi &&
            filmsApi.map(({ id, original_title, poster_path }) => (
              <li key={id}>
                <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                  <HomeImg
                    alt={original_title}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    width={300}
                  />
                  <HomeName>{original_title}</HomeName>
                </LinkStyled>
              </li>
            ))}
        </HomeList>
      )}
    </HomeContainer>
  );
};
