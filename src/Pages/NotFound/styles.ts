import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #d93e30;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Error {
    position: absolute;
    @media (max-width: 768px) {
      width: 99%;
    }
    
  }
  .TeamRocket {
    position: absolute;
    z-index: 1;
    @media (max-width: 768px) {
      width: 60%;
    }
    
  }
  button {
    margin-top: calc(80vh + 20px);
    @media (max-width: 375px) {
      width: 170px;
      height: 50px;
    }
  }
`;
