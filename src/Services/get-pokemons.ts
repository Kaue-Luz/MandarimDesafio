import { api } from "./api";

export interface Pokemon {
  background_image_url: string;
  category: string;
  created_at: Date;
  id: number;
  image_url: string;
  name: string;
}
export async function getPokemons(name?: string): Promise<Pokemon[]> {
  const nameQuery = name ? `?name=${name}` : "";
  const data = await api.get(`/pokemons${nameQuery}`);

  return data.data;
}
