import { Suspense } from 'react';
import RecipeCard from '../components/RecipeCard'
import { loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import { RecipeCardQuery } from '../src/gql/getRecipesQuery';


const Test = ({preloadedQuery}) => {

    const data = usePreloadedQuery(RecipeCardQuery, preloadedQuery);
	console.log('relay', data);

    return ( 
        <>
            {data.getRecipes.map(hit => <RecipeCard key={hit.id} hit={hit}/>)}
        </>
    );
}
 
export default Test;