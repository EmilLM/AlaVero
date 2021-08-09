import { useForm } from 'react-hook-form';
import styles from '../../styles/AddRecipe.module.scss';

const AddRecipe = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(watch('example')); // watch input value by passing the name of it

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
			<label htmlFor='name'>
				Nume:
				<input type='text' name='name' />
			</label>
			<label htmlFor='cooking'>
				Gatire:
				<input type='text' name='cooking' />
			</label>
			<label htmlFor='ingredients'>
				Ingrediente:
				<textarea type='text' name='ingredients' />
			</label>
			<label htmlFor='preparation'>
				Preparare:
				<textarea type='text' name='preparation' />
			</label>
         <button type="submit">Finalizeaza</button>
		</form>
	);
};

export default AddRecipe;
