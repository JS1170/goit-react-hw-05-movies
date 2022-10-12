import { reviewsInfoApi } from 'API/filmApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsInfoApi(movieId)
      .then(({ data }) => {
        console.log(data);
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews ? (
          reviews.map(({author, id, content}) => {
            return (
              <li key={id}>
                <p>Author: {author} </p>
                    <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
