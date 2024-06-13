import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "../Pages/PokemonList";
import { PokemonDetails } from "../Pages/PokemonDetails";
import { NotFound } from "../Pages/NotFound";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
