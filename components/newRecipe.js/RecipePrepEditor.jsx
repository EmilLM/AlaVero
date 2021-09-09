import { useState, useEffect } from 'react';
import Editor from './CKEditor';
import styles from '../../styles/RecipeForm.module.scss';

const PrepEditor = ({ recipePrep }) => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [data, setData] = useState('');

	useEffect(() => {
		setEditorLoaded(true);
	}, []);
	return (
		<div className={styles.prepEditor}>
			<Editor
				name='description'
				onChange={(data) => {
					setData(data);
				}}
				editorLoaded={editorLoaded}
				value={recipePrep}
			/>
		</div>
	);
};

export default PrepEditor;
