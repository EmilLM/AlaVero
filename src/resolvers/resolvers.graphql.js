import { Recipe } from '../schemas/recipe.schema';

export const resolvers = {
	Query: {
		// recipes
		getRecipes: async () => {
			try {
				const recipes = await Recipe.find({});
				return recipes;
			} catch (err) {
				console.log(err);
			}
		},
		getRecipe: async (_, { name }) => {
			const recipe = await Recipe.findOne({ name: name });

			if (!recipe) {
				throw new Error('Recipe not found!');
			}

			return recipe;
		},
	},

	Mutation: {
		// recipes
		newRecipe: async (parent, { input }) => {
			try {
				const recipe = new Recipe(input);
				const result = await recipe.save();
				return result;
			} catch (err) {
				console.log(err);
			}
		},
		updateRecipe: async (parent, { name, input }) => {
			// let recipe = await Recipe.findById(id);

			// if (!recipe) {
			// 	throw new Error('Recipe not found!');
			// }

			const recipe = await Recipe.findOneAndUpdate({ name: name }, input, {
				new: true,
			});
			
			if (!recipe) {
				throw new Error('Recipe not found!');
			}
			return recipe;
		},
		deleteRecipe: async (parent, { name }) => {
			const recipe = await Recipe.findOne({ name: name });

			if (!recipe) {
				throw new Error('Recipe not found!');
			}

			await Recipe.findOneAndDelete({ name: name });

			return 'Recipe deleted!';
		},
	},
};
