import styles from '../styles/Content.module.scss';
import Image from 'next/image';
import ph from '../public/ph.jpg';

const RecipeCard = ({ name }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardImage}>
				<Image src={ph} alt='ph' layout='responsive' />
			</div>
			<div className={styles.cardInfo}>
				<div>{name}</div>
			</div>
		</div>
	);
};

export default RecipeCard;
