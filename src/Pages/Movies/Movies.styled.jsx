import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  text-align: center;
  max-width: 1170px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  width: 600px;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin: auto;
  padding: 14px;
  background-color: rgba(4, 122, 140, 0.3);
  outline: none;
  border: 0;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #cbcbcb;
  :-webkit-autofill {
    transition: all 5000s ease-in-out 0s;
  }
`;

export const Button = styled.button`
  width: 20%;
  height: 38px;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 500;
  opacity: 1;
  background-color: rgba(23, 208, 236, 0.827);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: transform 250ms linear;
  :hover {
    transform: scale(1.1);
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  justify-content: center;
`;

export const MovieItem = styled.li`
  /* width: 20%; */
`;

export const NotFoundText = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
`;

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
  font-size: 14px;
  text-align: center;
  hyphens: auto;
  color: white;
  &:focus,
  &:hover {
    color: #00a597;
  }
`;
