import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homepageApi = createApi({
  reducerPath: "homepageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = homepageApi;
