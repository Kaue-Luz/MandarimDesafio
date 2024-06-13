import { useCallback, useEffect, useRef, useState } from "react";
import { Main } from "./styles";
import { Pokemon, getPokemons } from "../../Services/get-pokemons";
import { useNavigate } from "react-router-dom";

export function PokemonList() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const timer = useRef(0);

  const navigate = useNavigate();

  const searchPokemon = useCallback(async () => {
    setIsLoading(true);
    const pokemonData = await getPokemons(search);

    setData(pokemonData);
    setIsLoading(false);
  }, [search]);

  useEffect(() => {
    getPokemons().then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      searchPokemon();
    }, 300);
  }, [searchPokemon]);

  if (isLoading){
    return <h1>loading</h1>;
  }
  return (
    <Main>
      <h1>Listagem</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button
          onClick={() => {
            searchPokemon();
          }}
        >
          aaa
        </button>
      </div>
      <section>
        {!data.length ? (
          <h1>n encontramos seu pokemon ;-;</h1>
        ) : (
          data.map((data) => (
            <div
              key={data.id}
              onClick={() => {
                const routeName = `/pokemon/${data.name}`;
                navigate(routeName);
              }}
            >
              <h2>{data.name}</h2>
              <img src={data.image_url} alt={data.name} />
            </div>
          ))
        )}
      </section>
    </Main>
  );
}
