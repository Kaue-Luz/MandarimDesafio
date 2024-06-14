import { FormControl } from "@mui/material";
import styled from "styled-components";

export interface BackgrooundImageProps {
  url: string;
}

export const Main = styled.main`
  h3 {
    background-color: #f5db13;
    padding:8px;
    font-size:24px;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 16px 64px;

  @media (max-width: 768px) {
    padding: 16px 32px;
  }
  @media (max-width: 375px) {
    padding: 16px 16px;
  }

  > section {
    display: flex;
    flex-wrap: wrap;
    gap: 48px 24px;
    justify-content: space-evenly;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: 915px) {
    flex-direction: column;
    gap: 24px;
  }
  > .search {
    display: flex;
    align-items: center;
    background-color: #f6f7f9;
    border-radius: 48px;
    padding: 8px;
    width: 50%;
    max-height: 48px;
    margin-right: 16px;

    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);

    @media (max-width: 915px) {
      width: 100%;
    }

    input {
      background-color: transparent;
      height: 100%;
      width: calc(100% - 60px);
      outline: none;
    }
    button {
      background-color: transparent;
      align-items: center;
      cursor: pointer;
      width: 60px;
      height: 100%;
    }
  }
  > .filters {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const FormControlStyled = styled(FormControl)`
  width: 300px;
  border-radius: 10px;

  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);

  * {
    border: none !important;
  }
  @media (max-width: 915px) {
    flex: 1;
  }
`;

export const Card = styled.div`
  width: 380px;
  height: 160px;
  display: flex;
  flex-direction: row;

  border-radius: 8px;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

  background-color: #f6f7f9;

  @media (max-width: 915px) {
    width: 320px;
    height: 140px;
  }
  @media (max-width: 795px) {
    width: 90%;
    height: 180px;
  }
`;

export const BackgrooundImage = styled.div<BackgrooundImageProps>`
  background-image: url(${(props) => props.url});
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const PokemonDetails = styled.div`
  display: flex;
  width: 40%;
  padding: 16px;
  flex-direction: column;

  > h1 {
    font-size: 24px;
    font-weight: 700;
  }

  > div {
    border-radius: 16px;
    width: fit-content;
    padding: 5px 10px;
    height: fit-content;
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;
    margin-top: 8px;
  }
`;

export const DontFindPokemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  align-self: flex-start;
  > img {
    width: 20%;
    height: 20%;
    @media (max-width: 768px) {
      width: 30%;
      height: 30%;
    }
    @media (max-width: 375px) {
      width: 50%;
      height: 50%;
    }
  }
  h1 {
    display: flex;
    font-size: 32px;
    font-weight: 700;
    align-items: center;
    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;
