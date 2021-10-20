import {
	createHttpLink,
	ApolloClient,
	InMemoryCache,
} from '@apollo/client';

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createHttpLink({ uri: '/api/graphql' }),
});
