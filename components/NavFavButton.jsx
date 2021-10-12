import styles from '../styles/Nav.module.scss';

import { CgDisplayGrid } from 'react-icons/cg';
import { MdFavorite } from 'react-icons/md';
import { connectToggleRefinement } from 'react-instantsearch-dom';

const FavButton = ({ currentRefinement, refine }) => {

	function handleClick() {
		refine(!currentRefinement);
	}
	return (
		<button className={styles.navBtn} onClick={handleClick}>
			{currentRefinement ? (
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
const NavFavButton = connectToggleRefinement(FavButton);
export default NavFavButton;
