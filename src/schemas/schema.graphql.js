import { ApolloServer, gql } from 'apollo-server-micro';

export const typeDefs = gql`
	type Recipe {
		id: String
		name: String!
		type: String!
		addedBy: String
		favorite: Boolean
		img: String
		cooking: String
		ingredients: [String]
		references: [String]
		preparation: String
		createdAt: DateTime
	}

	type Query {
		#get Recipe/s
		getRecipes: [Recipe!]!
		getRecipe(name: String!): Recipe!
	}

	input createRecipe {
		name: String
		type: String
		addedBy: String
		favorite: Boolean
		img: String
		cooking: String
		ingredients: [String]
		references: [String]
		preparation: String
		createdAt: DateTime
	}

	type Mutation {
		newRecipe(input: createRecipe): Recipe
		updateRecipe(name: String!, input: createRecipe): Recipe
		deleteRecipe(name: String!): String
	}

	scalar DateTime
`;
