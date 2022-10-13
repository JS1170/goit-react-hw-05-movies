import { reviewsInfoApi } from 'API/filmApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ReviewsLink, ReviewsAuthor, ReviewsContent } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    reviewsInfoApi(movieId)
      .then(({ data }) => {
        console.log(data);
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ReviewsLink>
          {reviews ? (
            reviews.map(({ author, id, content }) => {
              return (
                <li key={id}>
                  <ReviewsAuthor>Author: {author} </ReviewsAuthor>
                  <ReviewsContent>{content}</ReviewsContent>
                </li>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ReviewsLink>
      )}
    </>
  );
};
