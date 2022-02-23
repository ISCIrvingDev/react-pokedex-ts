export interface IDtoPokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: IDtoPokemon[];
}

export interface IDtoPokemon {
  name: string;
  url: string;
  img?: string;
}
