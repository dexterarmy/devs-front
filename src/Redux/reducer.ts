// src/services/userApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using RTK Query to fetch users
export const userApi = createApi({
  reducerPath: 'userApi', // The key that will be added to the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // Base URL of the API
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users', // Specify the API endpoint
    }),
  }),
});

// Export the auto-generated hook for the `getUsers` query endpoint
export const { useGetUsersQuery } = userApi;

// Define the User type
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}