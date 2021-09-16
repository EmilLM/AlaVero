import Head from 'next/head';
import RecipeInfo from '../../components/recipePage/RecipePageInfo';
import { request } from 'graphql-request';
import { RecipePageQuery } from '../../src/gql/queries.graphql';
import recipe from '../../data';

const RecipesPage = ({ data }) => {
	const { name } = data;
	return (
		<>
			<Head>
				<title>{name}</title>
			</Head>
			<RecipeInfo recipe={data} />
		</>
	);
};

export default RecipesPage;

// use ssprops with graphql to get the recipe by name
export async function getServerSideProps({ params }) {
	const variables = { name: params.name };
	const { getRecipe } = await request(
		'http://localhost:3000/api/graphql',
		RecipePageQuery,
		variables
	);
	return {
		props: { data: getRecipe },
	};
}
