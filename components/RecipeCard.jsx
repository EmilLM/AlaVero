
import styles from '../styles/RecipeCard.module.scss';
import Image from 'next/image';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import Link from 'next/link';

const RecipeCard = ({ recipe }) => {
	// const [favorite, setFavorite] = useState(false);
	const { name, favorite, img, addedBy } = recipe;

	function handleFavorite(e) {
		e.stopPropagation();
		setFavorite((prevState) => !prevState);
	}
	return (
		<Link href={`/recipes/${encodeURIComponent(name)}`} passHref>
			<div className={styles.card}>
				<div className={styles.cardImage}>
					<Image src={'/' + img} alt='ph' layout='fill' />
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
