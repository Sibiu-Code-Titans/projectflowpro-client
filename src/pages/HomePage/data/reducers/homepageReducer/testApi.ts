import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPikachu: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPikachuQuery } = testApi;
