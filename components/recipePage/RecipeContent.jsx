import styles from '../../styles/RecipeContent.module.scss';
import Ingredient from '../Ingredient';
import RecipeForm from '../newRecipe.js/RecipeForm';
import Image from 'next/image';
import ph from '../../public/ph.jpg';
import ReactHtmlParser from 'react-html-parser';

const RecipeContent = ({ editRecipe, recipe }) => {
	if (editRecipe)
		return (
			<>
				<h5 className={styles.editTitle}>Editare reteta:</h5>

				<RecipeForm recipe={recipe} />
			</>
		);

	const ingredients = recipe.ingredients?.map((ingredient, index) => (
		<Ingredient ingredient={ingredient} key={index} />
	));

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
						<Image src={ph} alt='ph' layout='responsive' />
					</div>
				</section>

				<div className={styles.prepContainer}>
					<h6>Preparare:</h6>

					<div>{ReactHtmlParser(recipe.preparation)}</div>
				</div>

				<div className={styles.cooking}>
					<h6>Gatire:</h6>

					<p>{recipe.cooking}</p>
				</div>
			</article>
		</>
	);
};

export default RecipeContent;
