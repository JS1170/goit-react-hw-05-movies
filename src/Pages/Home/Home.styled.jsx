import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  text-align: center;
  max-width: 1170px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  padding: 10px 20px;
  margin: 1em 0 0.5em 0;
  color: #ffffff;
  font-size: 20px;
  line-height: 40px;
  font-weight: 300px;
  text-transform: uppercase;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 1px;
`;

export const HomeList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;

// export const HomeItem = styled.li`
//   width: 24%;
// `;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const HomeImg = styled.img`
  display: block;
  width: 300px;
  height: 450px;
  border-radius: 4px;
  box-shadow: rgba(11, 153, 185, 0.25) 0px 50px 100px -20px,
    rgba(4, 122, 140, 0.3) 0px 28px 60px -30px,
    rgba(5, 71, 138, 0.35) 0px -2px 6px 0px inset;
`;

export const HomeName = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  width: 299px;
  font-size: 18px;
  color: white;
  &:focus,
  &:hover {
    color: #00a597;
  }
`;
