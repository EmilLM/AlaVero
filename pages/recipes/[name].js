import Head from 'next/head';
import RecipePageInfo from '../../components/recipePage/RecipePageInfo';
import { request } from 'graphql-request';
import { RecipePageQuery } from '../../src/gql/queries.graphql';
import { RecipeContext } from '../../components/general/recipe.context';

const RecipePage = ({ recipe }) => {
	return (
		<>
			<Head>
				<title>{recipe.name}</title>
			</Head>
			<RecipeContext.Provider value={{ recipe }}>
				<RecipePageInfo />
			</RecipeContext.Provider>
		</>
	);
};

export default RecipePage;

export async function getServerSideProps({ req, params }) {
	console.log(req.headers.host)
	const variables = { name: params.name };
	const { getRecipe } = await request(
		// 'http://localhost:3000/api/graphql',

		`https://${req.headers.host}/api/graphql`,
		RecipePageQuery,
		variables
	);
	return {
		props: { recipe: getRecipe },
	};
}
