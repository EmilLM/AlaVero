export const RecipeCardQuery = `
	{
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
			references
			id
		}
	}
`;
