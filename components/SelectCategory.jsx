import { useState } from 'react';
import styles from '../styles/Nav.module.scss';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { useClickOutside } from '../src/utils/hooks';
import { connectMenu } from 'react-instantsearch-dom';

const SelectMenu = ({ currentRefinement, refine, items }) => {
	const [showOptions, setShowOptions] = useState(false);
	// const [selectState, setSelectState] = useState('Categorii');
	const optionsRef = useClickOutside(() => setShowOptions(false));

	//

	return (
		<button
			className={styles.navBtn}
			onClick={() => setShowOptions((prev) => !prev)}
			ref={optionsRef}
		>
			<FaArrowAltCircleDown className={showOptions && styles.rotateArrow} />
			{!currentRefinement ? 'Categorii' : currentRefinement}
			{showOptions && (
				<div className={styles.selectOptions}>
					<ul>
						<li onClick={() => refine('')}>Toate</li>

						<li onClick={() => refine('Prajitura')}>Prajituri</li>
						<li onClick={() => refine('Mancare')}>Mancare</li>
						<li onClick={() => refine('Sos')}>Sosuri</li>
					</ul>
				</div>
			)}
		</button>
	);
};
const SelectCategory = connectMenu(SelectMenu);
export default SelectCategory;
