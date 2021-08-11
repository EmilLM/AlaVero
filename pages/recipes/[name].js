import Head from 'next/head';
import RecipePage from '../../components/recipePage/RecipePage';

import recipe from '../../data';
import { useRouter } from 'next/router';

const RecipesPage = () => {
	return (
		<>
			<Head>
				<title>{recipe.name}</title>
			</Head>
			<RecipePage recipe={recipe[0]} />
		</>
	);
};

export default RecipesPage;

// use ssprops with graphql to get the recipe by name
