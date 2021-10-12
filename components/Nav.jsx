import { useState } from 'react';
import styles from '../styles/Nav.module.scss';
import Link from 'next/link';
import SelectCategory from './SelectCategory';
import Search from './Search';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import NavFavButton from './NavFavButton';

const Nav = ({ toggleFavorites, selectTypeAllRecipes }) => {
	const [showSearch, setShowSearch] = useState(false);

	function handleShowSearch() {
		setShowSearch((prevState) => !prevState);
	}

	return (
		<div className={styles.navContainer}>
			<nav className={styles.tabContainer}>
				<NavFavButton attribute='favorite' value={true} label='fav' />
				<button className={styles.navBtn} onClick={handleShowSearch}>
					<FaSearch />
					Cauta
				</button>
				<Link href='/newRecipe' passHref>
					<button className={styles.navBtn}>
						<BsFillPlusCircleFill />
						Adauga
					</button>
				</Link>
				<SelectCategory defaultRefinement='' attribute='type' />
			</nav>
			{showSearch && <Search />}
		</div>
	);
};

export default Nav;
