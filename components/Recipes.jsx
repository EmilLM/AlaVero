import styles from '../styles/RecipeCard.module.scss';
import RecipeCard from './RecipeCard';

const Recipes = ({ recipes }) => {
	return (
		<section className={styles.container}>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</section>
	);
};

export default Recipes;
