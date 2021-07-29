import styles from '../styles/RecipeModal.module.scss';

const RecipeModal = ({ handleClick, recipe }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.recipe}>
				<h2>{recipe.name}</h2>

				<p className={styles.ingredients}>{recipe.ingredients}</p>
				<div>
					{recipe.preparation.map((step, index) => {
						return (
							<p className={styles.preparation} key={index}>
								{index + 1}.{step}
							</p>
						);
					})}
				</div>
			</div>
			<button onClick={handleClick} className={styles.close}>X</button>
		</div>
	);
};

export default RecipeModal;
