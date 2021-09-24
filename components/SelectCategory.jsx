import { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.scss';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { useClickOutside } from '../src/utils/hooks';

const SelectCategory = ({ selectTypeAllRecipes }) => {
	const [showOptions, setShowOptions] = useState(false);
	const [selectState, setSelectState] = useState('Categorii');
	const optionsRef = useClickOutside(() => setShowOptions(false));

	useEffect(() => {
		selectTypeAllRecipes(selectState);
	}, [selectState]);

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
						<li onClick={() => setSelectState('Toate')}>Toate</li>

						<li
							onClick={() => setSelectState('Prajituri')}
							className={styles.midLi}
						>
							Prajituri
						</li>
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
