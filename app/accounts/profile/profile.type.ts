export type Speciestype = {
  species: string;
  krSpecies: string;
}

export type GetFetchType = {
  data:  Speciestype[] | null;
  error: string | null;
};
