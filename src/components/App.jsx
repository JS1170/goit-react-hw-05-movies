import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { Home } from '../Pages/Home/Home';
// import { Movies } from '../Pages/Movies/Movies';
// import { MovieDetails } from '../Pages/MovieDetails/MovieDetails';

const Home = lazy(() => import('../Pages/Home/Home').then(module=>({...module, default:module.Home}))
)
const Movies = lazy(() => import('../Pages/Movies/Movies').then(module => ({ ...module, default: module.Movies }))
)
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails').then(module=>({...module, default:module.MovieDetails}))
)
const Cast = lazy(() => import('./Cast/Cast').then(module=>({...module, default:module.Cast}))
)
const Reviews = lazy(() => import('./Reviews/Reviews').then(module=>({...module, default:module.Reviews}))
)



export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
};
