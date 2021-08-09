import styles from '../styles/RecipeModal.module.scss';
import { RiCloseCircleLine } from 'react-icons/ri';

const RecipeModal = ({ handleClick, recipe }) => {
	const ingredients = recipe.ingredients.map((ingredient, index) => (
		<span className={styles.ingredients} key={index}>
			{ingredient},
		</span>
	));

	const preparationSteps = recipe.preparation.map((step, index) => {
		return (
			<li className={styles.steps} key={index}>
				{step}
			</li>
		);
	});

	return (
		<div className={styles.modal}>
			<div className={styles.recipe}>
				<h2>{recipe.name}</h2>
				<h6>Ingrediente:</h6>
				<div className={styles.ingredientsContainer}>{ingredients}</div>
				<h6>Preparare:</h6>

				<div className={styles.prepContainer}>
					<ol>{preparationSteps}</ol>
				</div>
				<h6>Gatire:</h6>
				<div className={styles.cooking}>{recipe.cooking}</div>
			</div>
			<button onClick={handleClick} className={styles.close}>
				<RiCloseCircleLine/>
			</button>
		</div>
	);
};

export default RecipeModal;
