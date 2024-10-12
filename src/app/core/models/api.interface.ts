export interface IPokemonResponse {
  count: number;
  next: string;
  previous: null | string;
  results: IPokemonList[];
}

export interface IPokemonList {
    name: string;
    url: string;
}
