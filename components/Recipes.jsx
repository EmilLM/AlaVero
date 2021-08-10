import styles from '../styles/Recipes.module.scss';
import RecipeCard from './RecipeCard';
import { useState } from 'react';
import data from '../data';

const Recipes = () => {
	const [recipes, setRecipes] = useState(data);
	return (
		<section className={styles.container}>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</section>
	);
};

export default Recipes;