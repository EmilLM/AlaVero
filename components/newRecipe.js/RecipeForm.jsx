import { useState, useEffect } from 'react';
import styles from '../../styles/RecipeForm.module.scss';
import PrepEditor from './RecipePrepEditor';
import Image from 'next/image';
import ph from '../../public/placeholder.png';

const RecipeForm = ({ recipe }) => {
	const [formState, setFormState] = useState({
		name: recipe?.name,
		addedBy: recipe?.addedBy,
		type: recipe?.type,
		favorite: recipe?.favorite,
		img: recipe?.img,
		ingredients: recipe?.ingredients,
		preparation: recipe?.preparation,
		cooking: recipe?.cooking,
	});
	const {
		name,
		addedBy,
		img,
		favorite,
		type,
		ingredients,
		preparation,
		cooking,
	} = formState;

	function handleChange(e) {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<form className={styles.formContainer}>
			<section className={styles.smallInputs}>
				<div className={styles.textInputs}>
					<label htmlFor='name'>
						Nume:
						<input
							type='text'
							name='name'
							value={name}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor='addedBy'>
						Adaugata de:
						<input
							type='text'
							name='addedBy'
							value={addedBy}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor='cooking'>
						Mod Gatire:
						<input
							type='text'
							name='cooking'
							value={cooking}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className={styles.checkSelect}>
					<label htmlFor='isFavorite' className={styles.favCheckbox}>
						favorita?
						<input
							type='checkbox'
							name='isFavorite'
							value={favorite}
							checked={favorite}
							onChange={handleChange}
						/>
					</label>

					<select>
						<option disabled>Categorie:</option>
						<option>Prajitura</option>
						<option>Mancare</option>
						<option>Sos</option>
					</select>
				</div>
				<div className={styles.imgInput}>
					<label htmlFor='imgInput'>
						Click <br />
						pentru alegerea imaginii!
						<input type='file' name='imgInput' id='imgInput' accept='image/*' />
						<div className={styles.imgBox}>
							<Image src={ph} alt='ph' layout='responsive' />
						</div>
					</label>
				</div>
			</section>

			<section className={styles.largeInputs}>
				<label htmlFor='ingredients'>
					Ingrediente:
					<textarea
						type='text'
						name='ingredients'
						value={ingredients}
						onChange={handleChange}
					/>
				</label>
				<div className={styles.editor}>
					<h6>Preparare:</h6>
					<PrepEditor recipePrep={preparation} />
				</div>

				<button type='submit' className={styles.submitButton}>
					Finalizeaza
				</button>
			</section>
		</form>
	);
};

export default RecipeForm;
