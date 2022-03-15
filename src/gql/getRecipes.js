import { graphql } from "relay-runtime";

export const RecipeCardQuery = graphql`
	query getRecipesQuery {
		getRecipes {
			type
			id
			createdAt
			img,
			addedBy,
			name
			favorite
		}
	}
`;

