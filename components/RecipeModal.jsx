import { useState } from 'react';

import styles from '../styles/RecipeModal.module.scss';
import { RiCloseCircleLine } from 'react-icons/ri';
import MenuButton from './general/MenuButton';
import ModalMenu from './ModalMenu';
import RecipeContent from './RecipeContent';

const RecipeModal = ({ handleClick, recipe }) => {
	const [editRecipe, setEditRecipe] = useState(false);

	function handleEditRecipe() {
		setEditRecipe((prevState) => !prevState);
		console.log(editRecipe);
	}



	return (
		<div className={styles.modal}>
			<MenuButton>
				<ModalMenu handleEditRecipe={handleEditRecipe} />
			</MenuButton>

			<RecipeContent editRecipe={editRecipe} recipe={recipe} />

			<button onClick={handleClick} className={styles.close}>
				<RiCloseCircleLine />
			</button>
		</div>
	);
};

export default RecipeModal;
