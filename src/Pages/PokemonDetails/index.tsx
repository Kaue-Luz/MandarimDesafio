import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon, getPokemons } from "../../Services/get-pokemons";

export function PokemonDetails() {
  const { name } = useParams();

  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      {!data.length ? (
        <h1>n encontramos seu pokemon</h1>
      ) : (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image_url} alt={pokemon.name} />
        </div>
      )}
    </>
  );
}
