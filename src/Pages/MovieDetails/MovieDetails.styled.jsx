import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  width: 70px;
  text-align: center;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  color: white;
  border: 1px solid #00a6b6;
  border-radius: 4px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:focus,
  &:hover {
    color: #00a6b6;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const MovieImage = styled.img`
  margin-right: 30px;
  width: 300px;
  height: 400px;
`;

export const MovieName = styled.h2`
  color: #00a6b6;
`;

export const MovieUserScore = styled.p`
  color: #d7d6d6ec;
`;

export const MovieOverview = styled.p`
  padding: 0;
  display: flex;
  width: 100%;
  color: #d7d6d6ec;
`;

export const MovieGenre = styled.p`
  color: #d7d6d6ec;
  font-size: 14px;
`;

export const MovieAdditionalBox = styled.div`
  color: #d7d6d6ec;
  font-size: 14px;
`;

export const MovieTitle = styled.h3`
  display: block;
  text-align: left;
  color: #00a6b6;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const MovieAdditionalList = styled.ul`
  list-style: none;
  display: flex;
`;

export const MovieAdditionalBtn = styled.li`
  margin-left: 20px;
`;

export const MovieAdditionalLink = styled(NavLink)`
  display: block;
  margin-bottom: 10px;
  padding: 10px 20px;
  text-decoration: none;
  width: 70px;
  text-align: center;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  color: white;
  border: 1px solid #00a6b6;
  border-radius: 4px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:focus,
  &:hover {
    color: #00a6b6;
  }
`;
