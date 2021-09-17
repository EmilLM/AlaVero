export const RecipeCardQuery = `
	{
		getRecipes {
			name
			favorite
			addedBy
			img
			id
		}
	}
`;

export const RecipePageQuery = `
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
