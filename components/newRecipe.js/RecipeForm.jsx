import { useState } from 'react';
import styles from '../../styles/RecipeForm.module.scss';

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
			<label htmlFor='ingredients'>
				Ingrediente:
				<textarea
					type='text'
					name='ingredients'
					value={formState.ingredients}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor='preparation'>
				Preparare:
				<textarea
					type='text'
					name='preparation'
					value={formState.preparation}
					onChange={handleChange}
				/>
			</label>
			<button type='submit'>Finalizeaza</button>
		</form>
	);
};

export default RecipeForm;
