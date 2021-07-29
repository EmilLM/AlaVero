import styles from '../styles/Content.module.scss';
import RecipeCard from './RecipeCard';
import { useState } from 'react';
import data from '../data'


const Content = () => {
	const [recipes, setRecipes] = useState(data);
	return (
		<section className={styles.container}>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</section>
	);
};

export default Content;
