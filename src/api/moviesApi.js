import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getMovies: builder.query({
      query: (page = 1) => `photos?_limit=10&_page=${page}`,
    }),
  }),
});

export const {useGetMoviesQuery} = moviesApi;
