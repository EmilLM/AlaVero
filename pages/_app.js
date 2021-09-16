import '../styles/globals.scss';
import '../styles/CKEditor.scss';
import { ApolloProvider } from '@apollo/client';
import {client} from '../src/services/apollo-client';

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
