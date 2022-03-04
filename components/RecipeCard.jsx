import styles from '../styles/RecipeCard.module.scss';
import Image from 'next/image';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import Link from 'next/link';

const RecipeCard = ({ hit }) => {
	const { name, favorite, img, addedBy } = hit;
	
	function handleFavorite(e) {
		e.stopPropagation();
		setIsFavorite((prevState) => !prevState);
		// use apollo client for cache update when fav/unfav
	}

	return (
		<Link href={`/recipes/${encodeURIComponent(name)}`} passHref>
			<div className={styles.card}>
				<div className={styles.cardImage}>
					<Image
						src={'/' + img}
						alt='ph'
						layout='fill'
						priority

						// placeholder='blur'
						// blurDataURL={'/' + img}
						// loading='lazy'
					/>
				</div>
				<div className={styles.cardInfo}>
					<div className={styles.cardName}>{name}</div>
					<div className={styles.cardDesc}>
						<div>&Agrave; la {addedBy ?? 'N/A'}</div>
						<button className={styles.favButton}>
							{favorite ? <MdFavorite /> : <MdFavoriteBorder />}
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default RecipeCard;