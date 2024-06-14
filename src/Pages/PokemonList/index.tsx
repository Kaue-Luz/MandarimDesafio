import { useCallback, useEffect, useRef, useState } from "react";
import {
  BackgrooundImage,
  Card,
  Content,
  DontFindPokemon,
  FormControlStyled,
  Header,
  Main,
  PokemonDetails,
} from "./styles";
import { Pokemon, getPokemons } from "../../Services/get-pokemons";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Chip,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Category, categoriesColors } from "../../Styles/categoryColors";
import { MagnifyingGlass } from "phosphor-react";
import OpenPokeball from "../../Assets/dontFind.png";

type OrderByOptions = "asc" | "desc";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

export function PokemonList() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [orderBy, setOrderBy] = useState<OrderByOptions>("asc");

  const timer = useRef(0);

  const navigate = useNavigate();

  const categories = !isLoading && data.map((data) => data.category);
  const uniqueCategories = [...new Set(categories || [])];
  console.log(uniqueCategories);

  const filteredData =
    (!isLoading &&
      selectedCategories.length &&
      data.filter((data) => selectedCategories.includes(data.category))) ||
    data;

  const orderedData = filteredData.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return orderBy === "asc" ? -1 : 1;
    }
    if (nameA > nameB) {
      return orderBy === "asc" ? 1 : -1;
    }
    return 0;
  });

  function handleSelectChange(value: Category[]) {
    setSelectedCategories(value);
  }

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

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <Main>
      <h1>Listagem</h1>
      <Content>
        <Header>
          <div className="search">
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
              <MagnifyingGlass size={32} />
            </button>
          </div>
          <div className="filters">
            <FormControlStyled>
              <InputLabel id="demo-multiple-chip-label">Elementos</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={selectedCategories}
                onChange={(e) =>
                  handleSelectChange([...e.target.value] as Category[])
                }
                input={
                  <OutlinedInput id="select-multiple-chip" label="Elementos" />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        sx={{ backgroundColor: categoriesColors[value] }}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {uniqueCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControlStyled>

            <Box>
              <FormControlStyled sx={{ width: "fit-content" }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderBy}
                  onChange={(e) => setOrderBy(e.target.value as OrderByOptions)}
                >
                  <MenuItem value={"asc"}>A - Z</MenuItem>
                  <MenuItem value={"desc"}>Z - A</MenuItem>
                </Select>
              </FormControlStyled>
            </Box>
          </div>
        </Header>
        <section>
          {!orderedData.length ? (
            <DontFindPokemon>
              <h1>NÃO ENCONTRAMOS SEU POKEMON</h1>
              <img src={OpenPokeball} alt="Pokebola aberta" />
            </DontFindPokemon>
          ) : (
            orderedData.map((data) => (
              <Card
                key={data.id}
                onClick={() => {
                  const routeName = `/pokemon/${data.name}`;
                  navigate(routeName);
                }}
              >
                <PokemonDetails>
                  <h1>{data.name}</h1>
                  <div
                    style={{ backgroundColor: categoriesColors[data.category] }}
                  >
                    <span>{data.category}</span>
                  </div>
                </PokemonDetails>
                <BackgrooundImage url={data.background_image_url}>
                  <img
                    src={data.image_url}
                    alt={data.name}
                    style={{
                      width: "160px",
                      height: "130px",
                      objectFit: "contain",
                    }}
                  />
                </BackgrooundImage>
              </Card>
            ))
          )}
        </section>
      </Content>
    </Main>
  );
}
