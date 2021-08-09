import styles from '../styles/Nav.module.scss';
import NavButton from './general/NavButton';
import Link from 'next/link';

const Nav = () => {
	return (
		<nav className={styles.container}>
			<NavButton name={'Toate'} />
			<NavButton name={'Favorite'} />
			<NavButton name={'Prajituri'} />
			<Link href='/newRecipe'>
				<a className={styles.navButton}>Adauga</a>
			</Link>
		</nav>
	);
};

export default Nav;
