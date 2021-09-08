import { useState, useEffect } from 'react';
import styles from '../../styles/RecipeForm.module.scss';
import PrepEditor from './RecipePrepEditor';

const RecipeForm = ({ recipe }) => {
	const [formState, setFormState] = useState({
		name: recipe?.name,
		ingredients: recipe?.ingredients,
		preparation: recipe?.preparation,
		cooking: recipe?.cooking,
	});

	function handleChange(e) {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<form className={styles.formContainer}>
			<section className={styles.sectionInputs}>
				<div className={styles.textInputsArea}>
					<label htmlFor='name'>
						Nume:
						<input
							type='text'
							name='name'
							value={formState.name}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor='cooking'>
						Gatire:
						<input
							type='text'
							name='cooking'
							value={formState.cooking}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className={styles.otherInputsArea}>
					<label htmlFor='isFavorite' className={styles.favoriteCheckbox}>
						Este favorita?
						<input type='checkbox' name='isFavorite' />
					</label>

					<select>
						<option>Categorie:</option>
						<option>Prajitura</option>
						<option>Mancare</option>
						<option>Sos</option>
					</select>

					<label htmlFor='imgInput' className={styles.imgInput}>
						Alege imagine:
						<input type='file' name='imgInput' accept='image/*' />
						{/* <input type='submit' name='submit' className={styles.fileSubmit} /> */}
					</label>
				</div>
			</section>
			<section className={styles.standardInputs}>
				<label htmlFor='ingredients'>
					Ingrediente:
					<textarea
						type='text'
						name='ingredients'
						value={formState.ingredients}
						onChange={handleChange}
					/>
				</label>
				<h6>Preparare:</h6>

				<div className={styles.prepEditor}>
					<PrepEditor />
				</div>

				<button type='submit' className={styles.submitButton}>
					Finalizeaza
				</button>
			</section>
		</form>
	);
};

export default RecipeForm;
