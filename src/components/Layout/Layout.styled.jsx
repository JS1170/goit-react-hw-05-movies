import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 4px 4px;
  font-size: 14px;
  /* background: repeating-linear-gradient(#000000, #00a6b6 90px); */
  background: #00a6b6;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 24px;
  line-height: 20px;
  color: #000000;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:focus,
  &:hover {
    color: #ffffff;
  }
`;
