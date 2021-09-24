import { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.scss';

import { CgDisplayGrid } from 'react-icons/cg';
import { MdFavorite } from 'react-icons/md';

const NavFavButton = ({ toggleFavorites }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	function handleClick() {
		setIsFavorite((prev) => !prev);
	}
	useEffect(() => {
		toggleFavorites(isFavorite);
	}, [isFavorite]);

	return (
		<button className={styles.navBtn} onClick={handleClick}>
			{isFavorite ? (
				<>
					<CgDisplayGrid />
					Toate
				</>
			) : (
				<>
					<MdFavorite />
					Favorite
				</>
			)}
		</button>
	);
};

export default NavFavButton;
