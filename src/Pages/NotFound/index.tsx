import { useNavigate } from "react-router-dom";
import Error404 from "../../Assets/404.svg";
import TeamRocket from "../../Assets/teamRocket.svg";
import { HomeButton } from "../PokemonDetails/styles";
import { Main } from "./styles";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Main>
      <img className="Error" src={Error404} alt="" />
      <img className="TeamRocket" src={TeamRocket} alt="" />
      <HomeButton
        onClick={() => {
          const routeName = "/";
          navigate(routeName);
        }}
      >
        Home
      </HomeButton>
    </Main>
  );
}
