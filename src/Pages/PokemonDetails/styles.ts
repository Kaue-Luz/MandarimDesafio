import styled from "styled-components";
import { BackgrooundImageProps } from "../PokemonList/styles";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BackgrooundImage = styled.div<BackgrooundImageProps>`
  background-image: url(${(props) => props.url});
  width: 320px;
  height: 240px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-repeat: no-repeat;

  > img {
    object-fit: contain;
    width: 160px;
    height: 120px;
  }
`;

export const HomeButton = styled.button`
  width: 230px;
  height: 60px;
  border-radius: 16px;
  background-color: #f2cb07;
  font-size: 24px;
  font-weight: bold;

  box-shadow: 0px 8px 0 rgba(198, 166, 6, 25);
  margin-top: 16px;
`;
