import styles from '../styles/RecipeCard.module.scss';
import RecipeCard from './RecipeCard';
import { useState } from 'react';
import data from '../data';

const Recipes = ({recipes}) => {
	// const [recipes, setRecipes] = useState(data);
	return (
		<section className={styles.container}>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</section>
	);
};

export default Recipes;
