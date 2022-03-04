// your-app-name/src/RelayEnvironment.js
import {Environment, Network, RecordSource, Store, Observable} from 'relay-runtime';

const fetchGraphQL = async (text, variables) => {
    const response = await fetch('https://hasura-frontend.h4k.co/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': 'adminsecret'
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
//   console.log(`fetching ${params.text} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}



export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});