import styles from '../styles/Nav.module.scss';
import { connectSearchBox } from 'react-instantsearch-dom';
import { FcSearch } from 'react-icons/fc';
const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
	return (
		<div className={styles.searchContainer}>
			<form noValidate role='search'>
				<input
					type='search'
					value={currentRefinement}
					onChange={(event) => refine(event.currentTarget.value)}
					placeholder='Cauta reteta dorita...'
					className={styles.searchInput}
				/>
				{/* <button onClick={() => refine('')}>Reset query</button>  */}
				{/* {isSearchStalled ? 'My search is stalled' : ''} */}
				<button type='submit' className={styles.searchButton}>
					<FcSearch />
				</button>
			</form>
		</div>
	);
};

const Search = connectSearchBox(SearchBox);
export default Search;
