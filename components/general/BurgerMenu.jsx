import { useState } from 'react';
import styles from '../../styles/BurgerMenu.module.scss';

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<div
			className={`${styles.burger} ${styles.burgerSlip} ${
				isOpen && styles.open
			}`}
			onClick={handleClick}
		>
			<div className={styles.burgerLines}></div>
		</div>
	);
};

export default BurgerMenu;
