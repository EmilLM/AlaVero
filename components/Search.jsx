import styles from '../styles/Nav.module.scss';

const Search = () => {
	return (
		<div className={styles.searchContainer}>
			<input
				type='text'
				placeholder='Cauta reteta'
				className={styles.searchInput}
			/>
		</div>
	);
};

export default Search;
