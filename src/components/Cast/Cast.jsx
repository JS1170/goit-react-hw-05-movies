import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { castInfoApi } from '../../API/filmApi';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    castInfoApi(movieId)
      .then(({ data }) => {
        console.log(data.cast);
        setCast(data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast &&
          cast.map(({ name, id, profile_path, character }) => {
            const imgEmpty = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : `https://image.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg`;

            return (
              <li key={id}>
                <img alt={name} src={imgEmpty} width={100} height={150} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
