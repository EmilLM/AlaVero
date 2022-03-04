import '../styles/globals.scss';
import '../styles/customLibStyles.scss';
// import {Suspense} from 'react';
import { RecipeCardQuery } from '../src/gql/getRecipes';


import {
	RelayEnvironmentProvider,
	loadQuery,
  } from 'react-relay/hooks';
  import RelayEnvironment from '../src/services/relay-environment';

 

function MyApp({ Component, pageProps }) {
	return (
			<Component {...pageProps}  />
	);
}

export default MyApp;
