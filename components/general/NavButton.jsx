import styles from '../../styles/Nav.module.scss';

const NavButton = ({ name }) => {
	return <button className={styles.navButton}>{name}</button>;
};

export default NavButton;
