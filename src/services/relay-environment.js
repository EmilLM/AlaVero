import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const jwt= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJfaWQiOiIxYzgzZDA1MC04ODg3LTQ0ZjgtYTQ0NS1hYjdjYTlhNWQ0ZjciLCJleHRyYSI6eyJicmFuZElEIjoiMSIsImV4dGVybmFsSUQiOiI0MDExNjk1Iiwic2Vzc2lvbklEIjoiYWNiNjlmMjktMTAwNy00OTI5LTk3NWUtMmJlYzI4MjM4MWUxIn0sImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJwbGF5ZXIiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoicGxheWVyIiwieC1oYXN1cmEtdXNlci1pZCI6IjFjODNkMDUwLTg4ODctNDRmOC1hNDQ1LWFiN2NhOWE1ZDRmNyJ9LCJleHAiOjE2NDczNTI1MzMsImlhdCI6MTY0NzI2MjUzM30.OW0AkJAMjGru0bOdQUXMA0OEmTYOqblAoZZDoGLTg14"

// just a simple function for auth token
// to be replaced depending on the final token storage solution
const getJWT = () => {
  localStorage.setItem('token', `Bearer ${jwt}`)
  const token = localStorage.getItem('token');
  return token ? token : '';
};

// const origin = process.env.ORIGIN 
//               ? process.env.ORIGIN.replace('https://','') 
//               : window.location.hostname.replace('www.','');
        

const fetchGraphQL = async (params, variables) => {

  const response = await fetch('http://localhost:3000/api/graphql', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'X-Hasura-Origin': 'westcasino.h4k.co',
      // 'Authorization': getJWT()
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });
  return await response.json();
}

export default new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});

