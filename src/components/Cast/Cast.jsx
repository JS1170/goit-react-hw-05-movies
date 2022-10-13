import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { castInfoApi } from '../../API/filmApi';
import {
  CastContainer,
  CastImage,
  CastName,
  CastCharacter,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    castInfoApi(movieId)
      .then(({ data }) => {
        console.log(data.cast);
        setCast(data.cast);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading? (<Loader/>) : (
        <CastContainer>
        {cast &&
          cast.map(({ name, id, profile_path, character }) => {
            const imgEmpty = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : `https://spectrumpaint.com/store/media/10071/pv/50_rhinosatin-1604334194.jpg?`;

            return (
              <li key={id}>
                <CastImage alt={name} src={imgEmpty} width={100} height={150} />
                <CastName>{name}</CastName>
                <CastCharacter>Character: {character}</CastCharacter>
              </li>
            );
          })}
      </CastContainer>
      )}
    </div>
  );
};
