import '../styles/globals.scss';
import '../styles/customLibStyles.scss';
// import {Suspense} from 'react';
import { RecipeCardQuery } from '../src/gql/getRecipesQuery';


import {
	RelayEnvironmentProvider,
	loadQuery,
  } from 'react-relay/hooks';
  import RelayEnvironment from '../src/services/relay-environment';

const preloadedQuery = loadQuery(RelayEnvironment, RecipeCardQuery);
 

function MyApp({ Component, pageProps }) {
	return (
		<RelayEnvironmentProvider environment={RelayEnvironment}>
			<Component {...pageProps} preloadedQuery={preloadedQuery} />
		</RelayEnvironmentProvider>
	);
}

export default MyApp;
