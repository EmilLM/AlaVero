import { gql } from '@apollo/client';

export const RecipeCardQuery = gql`
	{
		getRecipes {
			name
			favorite
			img
			id
		}
	}
`;

export const RecipePageQuery = gql`
	query getRecipe($name: String!) {
		getRecipe(name: $name) {
			name
			img
			type
			favorite
			addedBy
			cooking
			preparation
			ingredients
		}
	}
`;
