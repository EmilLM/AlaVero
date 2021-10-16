import { useState, useEffect } from 'react';
import styles from '../../styles/RecipeForm.module.scss';
import PrepEditor from './RecipePrepEditor';
import Image from 'next/image';
import { PostRecipe, UpdateRecipe } from '../../src/gql/mutations.graphql';
import { request } from 'graphql-request';
import { useRouter } from 'next/router';
import { index } from '../../src/services/algolia-search';
import FormTooltip from '../general/FormTooltip';

// try using react-hook-form
const RecipeForm = ({ recipe, editRecipe, setEditRecipe }) => {
	const [formState, setFormState] = useState({
		name: recipe?.name ?? '',
		addedBy: recipe?.addedBy ?? 'Vero',
		type: recipe?.type ?? 'Mancare',
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
	function handleSelect(e) {
		setFormState({
			...formState,
			type: e.target.value,
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
			await index.saveObject({ ...formState, objectID: newRecipe.id });
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
			await index.partialUpdateObject({
				...formState,
				objectID: recipe.id,
			});
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
						<div className={styles.labelInfo}>
							<p>Denumire:</p>
							<FormTooltip
								title={'Numele retetei'}
								infoOne={'Minim 3 caractere lungime'}
								infoTwo={'Max 30 caractere.'}
							/>
							{name.length > 0 && (
								<span>{30 - name.length > 0 ? 30 - name.length : 0}</span>
							)}
						</div>
						<input
							type='text'
							name='name'
							value={name}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor='addedBy'>
						<div className={styles.labelInfo}>
							<p>Adaugata de:</p>
							<FormTooltip
								title={'De cine a fost creata/adaugata reteta'}
								infoOne={'Poti inlocui Vero cu numele tau.'}
							/>
						</div>
						<input
							type='text'
							name='addedBy'
							value={addedBy}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor='cooking'>
						<div className={styles.labelInfo}>
							<p>Mod Gatire:</p>
							<FormTooltip
								title={'Informatii despre gatire'}
								infoOne={'Detalii cuptor: temperatura, raft, program, durata'}
								infoTwo={'Detalii foc: intensitate, durata etc.'}
							/>
						</div>
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

					<select value={type} onChange={handleSelect} name='type'>
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
					<div className={styles.labelInfo}>
						<p>Ingrediente:</p>
						<FormTooltip
							title={'Ingredientele folosite'}
							infoOne={'Model: Cantitate + ingredient + virgula.'}
							infoTwo={'Ex: 1 cupa faina, 0.5l lapte, 300ml apa'}
						/>
					</div>
					<textarea
						type='text'
						name='ingredients'
						value={ingredients}
						onChange={handleIngredients}
					/>
				</label>
				<div className={styles.editor}>
					<div className={styles.labelInfo}>
						<h6>Preparare:</h6>
						<FormTooltip
							title={'Pasii de preparare'}
							infoOne={'Urmeaza modelul altor retete.'}
							infoTwo={'Separa preparea in pasi!'}
							infoThree={
								'La final, selecteaza tot textul si apasa penultimul buton!'
							}
						/>
					</div>
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
