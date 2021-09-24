import { useState, useEffect } from 'react';
import styles from '../../styles/RecipeForm.module.scss';
import PrepEditor from './RecipePrepEditor';
import Image from 'next/image';
import { PostRecipe, UpdateRecipe } from '../../src/gql/mutations.graphql';
import { request } from 'graphql-request';
import { useRouter } from 'next/router';

// try using react-hook-form
const RecipeForm = ({ recipe, editRecipe, setEditRecipe }) => {
	const [formState, setFormState] = useState({
		name: recipe?.name ?? '',
		addedBy: recipe?.addedBy ?? 'Vero',
		type: recipe?.type ?? 'mancare',
		favorite: recipe?.favorite ?? false,
		img: recipe?.img ?? 'placeholder.png',
		ingredients: recipe?.ingredients ?? '',
		preparation: recipe?.preparation ?? '',
		cooking: recipe?.cooking ?? '',
	});

	const [fileInput, setFileInput] = useState('placeholder.png');

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

	useEffect(() => {
		const storageRecipe = localStorage.getItem(recipe?.name ?? 'newRecipe');
		if (storageRecipe) setFormState(JSON.parse(storageRecipe));
	}, []);

	useEffect(() => {
		localStorage.setItem(
			editRecipe ? recipe?.name : 'newRecipe',
			JSON.stringify(formState)
		);
	}, [formState]);

	const isValid = name && ingredients && cooking;

	
	function handleChange(e) {
		const input = e.target.value;
		setFormState({
			...formState,
			[e.target.name]: input.charAt(0).toUpperCase() + input.slice(1),
		});
	}
	function handleIngredients(e) {
		setFormState({
			...formState,
			ingredients: e.target.value.split(','),
		});
	}
	function handleEditorChange(data) {
		setFormState({
			...formState,
			preparation: data,
		});
	}
	function handleFileChange(e) {
		// setFormState({
		// 	...formState,
		// 	img: URL.createObjectURL(e.target.files[0]),
		// });
		setFileInput(URL.createObjectURL(e.target.files[0]));
	}
	function handleCheckboxChange(e) {
		setFormState({
			...formState,
			favorite: !favorite,
		});
	}

	const router = useRouter();
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const { newRecipe } = await request(
				'http://localhost:3000/api/graphql',
				PostRecipe,
				{ input: formState }
			);
			localStorage.removeItem('newRecipe');
			router.push('/recipes/' + newRecipe.name);
		} catch (err) {
			console.error('formError', err);
		}
	};
	const handleEditSubmit = async (e) => {
		try {
			e.preventDefault();
			const { updateRecipe } = await request(
				'http://localhost:3000/api/graphql',
				UpdateRecipe,
				{ updateRecipeName: recipe.name, updateRecipeInput: formState }
			);
			localStorage.removeItem(recipe.name);
			router.push('/recipes/' + updateRecipe.name);
			setEditRecipe(false);
		} catch (err) {
			console.error('edit form error:', err);
		}
	};
	return (
		<form
			className={styles.formContainer}
			onSubmit={editRecipe ? handleEditSubmit : handleSubmit}
		>
			<section className={styles.smallInputs}>
				<div className={styles.textInputs}>
					<label htmlFor='name'>
						Denumire:
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
					<label htmlFor='favorite' className={styles.favCheckbox}>
						favorita?
						<input
							type='checkbox'
							name='favorite'
							checked={favorite}
							onChange={handleCheckboxChange}
						/>
					</label>

					<select value={type} onChange={handleChange} name='type'>
						<option disabled>Categorie:</option>
						<option value='prajitura'>Prajitura</option>
						<option value='mancare'>Mancare</option>
						<option value='sos'>Sos</option>
					</select>
				</div>
				<div className={styles.imgInput}>
					<label htmlFor='imgInput'>
						Click <br />
						sa alegi imaginea!
						<input
							type='file'
							name='imgInput'
							id='imgInput'
							accept='image/*'
							onChange={handleFileChange}
						/>
						<div className={styles.imgBox}>
							{/* change state & Image comp */}
							<img
								src={
									fileInput === 'placeholder.png'
										? '/placeholder.png'
										: fileInput
								}
								alt='ph'
								layout='fill'
							/>
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
						onChange={handleIngredients}
					/>
				</label>
				<div className={styles.editor}>
					<h6>Preparare:</h6>
					<PrepEditor
						recipePrep={preparation}
						handleChange={handleEditorChange}
					/>
				</div>

				<button
					type='submit'
					className={styles.submitButton}
					disabled={!isValid}
				>
					Finalizeaza
				</button>
			</section>
		</form>
	);
};

export default RecipeForm;
