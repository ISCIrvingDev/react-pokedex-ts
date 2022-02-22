export interface IDtoPokemonList {
  count: number;
  next: string;
  previous: null;
  results: IDtoPokemon[];
}

export interface IDtoPokemon {
  name: string;
  url: string;
  img?: string;
}
