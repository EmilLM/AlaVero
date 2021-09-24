import { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.scss';

const Search = ({ searchRecipe }) => {
	const [searchInput, setSearchInput] = useState('');

	function handleChange(e) {
		const input = e.target.value;
		setSearchInput(input.charAt(0).toUpperCase() + input.slice(1));
	}

	useEffect(() => {
		searchRecipe(searchInput);
	}, [searchInput]);

	return (
		<div className={styles.searchContainer}>
			<input
				type='text'
				value={searchInput}
				onChange={handleChange}
				placeholder='Cauta reteta dupa nume'
				className={styles.searchInput}
			/>
		</div>
	);
};

export default Search;
