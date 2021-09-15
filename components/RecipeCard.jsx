import styles from '../styles/RecipeCard.module.scss';
import Image from 'next/image';
import ph from '../public/ph.jpg';
import { useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import Link from 'next/link';

const RecipeCard = ({ recipe }) => {
	const [favorite, setFavorite] = useState(false);

	function handleFavorite(e) {
		e.stopPropagation();
		setFavorite((prevState) => !prevState);
	}

	return (
		<Link href={`/recipes/${encodeURIComponent(recipe.name)}`}  passHref>
			<div className={styles.card}>
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
		</Link>
	);
};

export default RecipeCard;
