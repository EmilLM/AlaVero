import '../styles/globals.scss';
import '../styles/customLibStyles.scss';
import {Suspense} from 'react';
import { RecipePageQuery } from '../src/gql/getRecipeQuery';


import {
	RelayEnvironmentProvider,
	loadQuery,
  } from 'react-relay/hooks';
  import RelayEnvironment from '../src/services/relay-environment';

const preloadedQuery = loadQuery(RelayEnvironment, RecipePageQuery, {
	name: 'sos marinara'
});
 

function MyApp({ Component, pageProps }) {
	return (
		<RelayEnvironmentProvider environment={RelayEnvironment}>
				<Component preloadedQuery={preloadedQuery} {...pageProps} />
		</RelayEnvironmentProvider>
	);
}

export default MyApp;
