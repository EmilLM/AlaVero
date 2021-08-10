import styles from '../styles/RecipeModal.module.scss';
import Ingredient from './Ingredient';
import RecipeForm from './newRecipe.js/RecipeForm';

const RecipeContent = ({ editRecipe, recipe }) => {
	const ingredients = recipe.ingredients.map((ingredient, index) => (
		<Ingredient ingredient={ingredient} key={index} />
	));

	const preparationSteps = recipe.preparation.map((step, index) => {
		return (
			<li className={styles.steps} key={index}>
				{step}
			</li>
		);
	});
	if (editRecipe)
		return (
			<div className={styles.recipe}>
				<RecipeForm recipe={recipe}/>
			</div>
		);

	return (
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
	);
};

export default RecipeContent;
