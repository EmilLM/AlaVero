import { useState } from 'react';
import styles from '../styles/Nav.module.scss';
import Link from 'next/link';
import SelectCategory from './SelectCategory';
import Search from './Search';
import { MdFavorite, MdSearch } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

const Nav = () => {
	const [showSearch, setShowSearch] = useState(false);

	function handleShowSearch() {
		setShowSearch((prevState) => !prevState);
	}

	return (
		<div className={styles.navContainer}>
			<nav className={styles.tabContainer}>
				<button className={styles.navBtn}>
					<MdFavorite />
					Favorite
				</button>

				<SelectCategory />

				<button className={styles.navBtn} onClick={handleShowSearch}>
					<FaSearch />
					Cauta
				</button>

				<Link href='/newRecipe'>
					<button className={styles.navBtn}>
						<BsFillPlusCircleFill />
						Adauga
					</button>
				</Link>
			</nav>
			{showSearch && <Search />}
		</div>
	);
};

export default Nav;
