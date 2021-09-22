import styles from '../../styles/RecipeContent.module.scss';
import Ingredient from '../Ingredient';
import RecipeForm from '../newRecipe.js/RecipeForm';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const RecipeContent = ({ editRecipe, recipe, setEditRecipe }) => {
	if (editRecipe)
		return (
			<>
				<h5 className={styles.editTitle}>Editare reteta:</h5>

				<RecipeForm recipe={recipe} editRecipe={editRecipe} setEditRecipe={setEditRecipe} />
			</>
		);

	const { ingredients, img, cooking, preparation, favorite, type, addedBy } =
		recipe;

	const ingredientsArr = ingredients?.map((ingredient, index) => (
		<Ingredient ingredient={ingredient} key={index} />
	));

	return (
		<>
			<div className={styles.contentHeader}>
				<h2 className={styles.recipeName}>{recipe.name}</h2>
				<div className={styles.subtitle}>
					{type} &Agrave; la <b>{addedBy}</b>
				</div>
			</div>

			<article className={styles.recipe}>
				<section className={styles.ingredientsContainer}>
					<div className={styles.ingredientsBox}>
						<h6>Ingrediente:</h6>
						<div>{ingredientsArr}</div>
					</div>
					<div className={styles.imgBox}>
						<Image src={'/' + img} alt='ph' layout='fill' />
						<div className={styles.favIcon}>
							{favorite ? <MdFavorite /> : <MdFavoriteBorder />}
						</div>
					</div>
				</section>

				<div className={styles.prepContainer}>
					<h6>Preparare:</h6>

					<div>{ReactHtmlParser(preparation)}</div>
				</div>

				<div className={styles.cooking}>
					<h6>Gatire:</h6>

					<p>{cooking}</p>
				</div>
			</article>
		</>
	);
};

export default RecipeContent;
