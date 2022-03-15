import { Suspense, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard'

import RelayEnvironment from '../src/services/relay-environment';
import { useLazyLoadQuery, usePreloadedQuery, useMutation, commitMutation } from 'react-relay';
import { RecipeCardQuery } from '../src/gql/getRecipes';
import { SessionInfoQuery } from '../src/gql/getSessionInfo';
import { loginUsername } from '../src/gql/loginUsername';
import { PostRecipe } from '../src/gql/AddNewRecipe';


// function handleLogin (environment) {
//     return commitMutation(environment, {
//         mutation: loginUsername,
//         variables: {
//             username: 'testingabc',
//             password: 'Pass123!'
//         },
//         onCompleted(data) {
//             console.log(data)
//         }
//     })
// };

const Test = ({preloadedQuery}) => {

    // const data = useLazyLoadQuery(RecipeCardQuery, {});
    const data = usePreloadedQuery(RecipeCardQuery, preloadedQuery)
    
    // const [commit, isInFlight] = useMutation(PostRecipe)

  
    useEffect(()=>{
        // handleLogin(RelayEnvironment)
        // testRecipe(RelayEnvironment)
    }, [])

    return ( 
        <>
            {data.getRecipes.map(hit => <RecipeCard key={hit.id} hit={hit}/>)}

            <h2>Test</h2>
        </>
    );
}
 
export default Test;