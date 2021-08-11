import { useState } from 'react';
import styles from '../styles/RecipeContent.module.scss';

const Ingredient = ({ ingredient }) => {
	const [checked, setChecked] = useState(false);

	function handleCheckbox() {
		setChecked(!checked);
	}
	return (
		<label
			className={styles.ingredients}
			style={{ textDecoration: checked ? 'line-through' : 'none' }}
		>
			<input
				type='checkbox'
				className={styles.checkbox}
				onChange={handleCheckbox}
				checked={checked}
			/>
			{ingredient},
		</label>
	);
};

export default Ingredient;
