import styles from '../styles/RecipeCard.module.scss';
import RecipeCard from './RecipeCard';
import { Hits } from 'react-instantsearch-dom';

const Recipes = () => {
	return (
		<section className={styles.container}>
		
			<Hits hitComponent={RecipeCard} />
		</section>
	);
};

export default Recipes;



