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
			const recipe = await Recipe.findOne({name: name});

			if (!recipe) {
				throw new Error('Recipe not found!');
			}

			return recipe;
		},
	},

	Mutation: {
		// recipes
		newRecipe: async (parent, {input }) => {
      
			try {
				const recipe = new Recipe(input);
				const result = await recipe.save();
				return result;
			} catch (err) {
				console.log(err);
			}
		},
		updateRecipe: async (parent, { id, input }) => {
			let recipe = await Recipe.findById(id);

			if (!recipe) {
				throw new Error('Recipe not found!');
			}

			recipe = await Recipe.findOneAndUpdate({ _id: id }, input, {
				new: true,
			});

			return recipe;
		},
		deleteRecipe: async (parent, { id }) => {
			const recipe = await Recipe.findById(id);

			if (!recipe) {
				throw new Error('Recipe not found!');
			}

			await Recipe.findOneAndDelete({ _id: id });

			return 'Recipe deleted!';
		},
	},
};


