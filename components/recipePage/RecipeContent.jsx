import styles from '../../styles/RecipeContent.module.scss';
import Ingredient from '../Ingredient';
import RecipeForm from '../newRecipe.js/RecipeForm';
import Image from 'next/image';
import ph from '../../public/ph.jpg';

const RecipeContent = ({ editRecipe, recipe }) => {
	const ingredients = recipe.ingredients?.map((ingredient, index) => (
		<Ingredient ingredient={ingredient} key={index} />
	));

	const preparationSteps = recipe.preparation?.map((step, index) => {
		return (
			<li className={styles.steps} key={index}>
				{step}
			</li>
		);
	});
	if (editRecipe)
		return (
			<>
				<h5 className={styles.editTitle}>Editare reteta:</h5>

				<div className={styles.recipe}>
					<RecipeForm recipe={recipe} />
				</div>
			</>
		);

	return (
		<>
			<h2 className={styles.recipeName}>{recipe.name}</h2>

			<article className={styles.recipe}>
				<section className={styles.ingredientsContainer}>
					<div className={styles.ingredientsBox}>
						<h6>Ingrediente:</h6>
						<div>{ingredients}</div>
					</div>
					<div className={styles.imgBox}>
						<Image src={ph} alt='ph' layout='responsive' priority />
					</div>
				</section>

				<h6>Preparare:</h6>
				<div className={styles.prepContainer}>
					<ol>{preparationSteps}</ol>
				</div>

				<h6>Gatire:</h6>
				<div className={styles.cooking}>{recipe.cooking}</div>
			</article>
		</>
	);
};

export default RecipeContent;
