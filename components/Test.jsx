import { Suspense } from 'react';
import RecipeCard from '../components/RecipeCard'
import { loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import { RecipeCardQuery } from '../src/gql/getRecipes';
import { BasicResponseQuery } from '../src/gql/getBasic';


const Test = ({preloadedQuery}) => {

    const data = usePreloadedQuery(BasicResponseQuery, preloadedQuery);
	// console.log('relay', data);

    return ( 
        <>
            {/* {data.getRecipes.map(hit => <RecipeCard key={hit.id} hit={hit}/>)} */}
            {/* <h2>{data.getBasic.success}</h2> */}
            <h1>test</h1>
        </>
    );
}
 
export default Test;