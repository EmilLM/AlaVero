import styles from '../styles/Content.module.scss';
import Image from 'next/image';
import ph from '../public/ph.jpg';
import { useState } from 'react';
import RecipeModal from './RecipeModal';

const RecipeCard = ({ recipe }) => {
	const {name, ingredients, preparation} = recipe
	const [showModal, setShowModal] = useState(false);

	function handleClick() {
		setShowModal((prevState) => !prevState);
	}

	return (
		<>
			<div className={styles.card} onClick={handleClick}>
				<div className={styles.cardImage}>
					<Image src={ph} alt='ph' layout='responsive' />
				</div>
				<div className={styles.cardInfo}>
					<div>{name}</div>
				</div>
			</div>
			{showModal && <RecipeModal handleClick={handleClick} recipe={recipe} />}
		</>
	);
};

export default RecipeCard;
