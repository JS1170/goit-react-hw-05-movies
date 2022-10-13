import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Header, HeaderList, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderList>
            <li>
              <NavLinkStyled end to="/">
                Home
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </li>
          </HeaderList>
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}> <Outlet /></Suspense>
    </>
  );
};
