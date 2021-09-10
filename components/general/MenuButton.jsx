import { useState } from 'react';

import styles from '../../styles/Buttons.module.scss';
import { FiMenu } from 'react-icons/fi';
import { useClickOutside } from '../../src/utils/hooks';

const MenuButton = (props) => {
	const [showMenu, setShowMenu] = useState(false);

	function handleClick() {
		setShowMenu((prev) => !prev);
	}

	const menuRef = useClickOutside(() => setShowMenu(false));

	return (
		<button className={styles.menuButton} onClick={handleClick} ref={menuRef}>
			<FiMenu />
			{showMenu && props.children}
		</button>
	);
};

export default MenuButton;
