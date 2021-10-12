import styles from '../styles/RecipeCard.module.scss';
import RecipeCard from './RecipeCard';
import { Hits } from 'react-instantsearch-dom';

const Recipes = ({ recipes }) => {
	return (
		<section className={styles.container}>
			{/* {typeof recipes !== 'string' &&
				recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)} */}
			<Hits hitComponent={RecipeCard} />
		</section>
	);
};

export default Recipes;



