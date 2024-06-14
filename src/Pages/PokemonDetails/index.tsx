import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Pokemon, getPokemons } from "../../Services/get-pokemons";
import { DontFindPokemon } from "../PokemonList/styles";
import OpenPokeball from "../../Assets/dontFind.png";
import { SmileySad } from "phosphor-react";
import { BackgrooundImage, HomeButton, Main } from "./styles";

export function PokemonDetails() {
  const { name } = useParams();

  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const pokemon = data[0];

  useEffect(() => {
    getPokemons(name).then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, [name]);

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <Main>
      <div className="card">
        {!data.length ? (
          <DontFindPokemon>
            <img src={OpenPokeball} alt="Pokebola aberta" />
            <h1>
              NÃO ENCONTRAMOS SEU POKEMON <SmileySad />
            </h1>
            <HomeButton
              onClick={() => {
                const routeName = "/";
                navigate(routeName);
              }}
            >
              Home
            </HomeButton>
          </DontFindPokemon>
        ) : (
          <div key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <BackgrooundImage url={pokemon.background_image_url}>
              <img src={pokemon.image_url} alt={pokemon.name} />
            </BackgrooundImage>
          </div>
        )}
        <HomeButton
          onClick={() => {
            const routeName = "/";
            navigate(routeName);
          }}
        >
          Home
        </HomeButton>
      </div>
    </Main>
  );
}
