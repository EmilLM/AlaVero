import styles from '../styles/Nav.module.scss';
import NavButton from './general/NavButton';

const Nav = () => {
	const buttons = ['Toate', 'Favorite', 'Prajituri', 'Mancare'];
	return (
		<nav className={styles.container}>
			{buttons.map((el, index) => <NavButton name={el} key={index} />)}
		</nav>
	);
};

export default Nav;
