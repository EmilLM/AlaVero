import { useState, useRef } from 'react';
import styles from '../styles/Nav.module.scss';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { useClickOutside } from '../src/utils/hooks';

const SelectCategory = () => {
	const [showOptions, setShowOptions] = useState(false);
	const optionsRef = useClickOutside(() => setShowOptions(false));
	const [selectState, setSelectState] = useState('Categorii');

	return (
		<button
			className={styles.navBtn}
			onClick={() => setShowOptions((prev) => !prev)}
			ref={optionsRef}
		>
			<FaArrowAltCircleDown className={showOptions && styles.rotateArrow} />
			{selectState}
			{showOptions && (
				<div className={styles.selectOptions}>
					<ul>
						<li onClick={() => setSelectState('Prajituri')}>Prajituri</li>
						<li
							onClick={() => setSelectState('Mancare')}
							className={styles.midLi}
						>
							Mancare
						</li>
						<li onClick={() => setSelectState('Sosuri')}>Sosuri</li>
					</ul>
				</div>
			)}
		</button>
	);
};

export default SelectCategory;
