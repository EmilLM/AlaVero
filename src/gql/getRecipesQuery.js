import { graphql } from "relay-runtime";

export const RecipeCardQuery = graphql`
	query getRecipesQuery {
		getRecipes {
			name
			favorite
			addedBy
			type
			img
			id
			createdAt
		}
	}
`;