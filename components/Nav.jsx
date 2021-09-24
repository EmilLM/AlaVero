import { useState } from 'react';
import styles from '../styles/Nav.module.scss';
import Link from 'next/link';
import SelectCategory from './SelectCategory';
import Search from './Search';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import NavFavButton from './NavFavButton';

const Nav = ({ toggleFavorites, selectTypeAllRecipes, searchRecipe }) => {
	const [showSearch, setShowSearch] = useState(false);

	function handleShowSearch() {
		setShowSearch((prevState) => !prevState);
	}

	return (
		<div className={styles.navContainer}>
			<nav className={styles.tabContainer}>
				<NavFavButton toggleFavorites={toggleFavorites}/>
				<button className={styles.navBtn} onClick={handleShowSearch}>
					<FaSearch />
					Cauta
				</button>
				<SelectCategory selectTypeAllRecipes={selectTypeAllRecipes} />
				<Link href='/newRecipe' passHref>
					<button className={styles.navBtn}>
						<BsFillPlusCircleFill />
						Adauga
					</button>
				</Link>
			</nav>
			{showSearch && <Search searchRecipe={searchRecipe}/>}
		</div>
	);
};

export default Nav;
