import styles from '../styles/Recipes.module.scss';
import Image from 'next/image';
import ph from '../public/ph.jpg';
import { useState } from 'react';
import RecipeModal from './RecipeModal';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const RecipeCard = ({ recipe }) => {
	const [showModal, setShowModal] = useState(false);
	const [favorite, setFavorite] = useState(false);

	function handleClick() {
		setShowModal((prevState) => !prevState);
	}

	function handleFavorite(e) {
		e.stopPropagation();
		setFavorite((prevState) => !prevState);
	}

	return (
		<>
			<div className={styles.card} onClick={handleClick}>
				<div className={styles.cardImage}>
					<Image src={ph} alt='ph' layout='responsive' />
				</div>
				<div className={styles.cardInfo}>
					<div>{recipe.name}</div>
					<button className={styles.favButton} onClick={handleFavorite}>
						{favorite ? <MdFavorite /> : <MdFavoriteBorder />}
					</button>
				</div>
			</div>
			{showModal && <RecipeModal handleClick={handleClick} recipe={recipe} />}
		</>
	);
};

export default RecipeCard;
