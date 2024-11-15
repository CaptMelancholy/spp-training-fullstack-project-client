import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const baseUrl = import.meta.env.VITE_API_URL;

const client = new ApolloClient({
  link: new HttpLink({ uri: `${baseUrl}graphql`, credentials: 'include' }),
  cache: new InMemoryCache(),
});

export { client };
