import styles from '../styles/Content.module.scss';
import RecipeCard from './RecipeCard';
import { useState } from 'react';

const Content = () => {
	const data = [
		'Ora 12',
		'Bulgari',
		'Foi',
		'Daia cu mere',
		'Ora 12',
		'Bulgari',
		'Foi',
		'Daia cu mere',
		];
	const [recipes, setRecipes] = useState(data);
	return (
		<section className={styles.container}>
			{recipes.map((recipe, index) => (
				<RecipeCard key={index} name={recipe} />
			))}
		</section>
	);
};

export default Content;
