export type Category = 
  | "Ice"
  | "Grass"
  | "Psychic"
  | "Fire"
  | "Water"
  | "Bug"
  | "Electric"
  | "Rock"
  | "Normal"
  | "Ground";

export const categoriesColors: Record<Category, string> = {
  Ice: "#A2CFF0",
  Grass: "#70A83B",
  Psychic: "#A974BC",
  Fire: "#F76545",
  Water: "#A2CFF0",
  Bug: "#70A83B",
  Electric: "#F7C545",
  Rock: "#A1A1A1",
  Normal: "#76AADB",
  Ground: "#9B897B",
};
