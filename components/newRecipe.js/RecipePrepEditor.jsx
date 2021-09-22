import { useState, useEffect } from 'react';
import Editor from './CKEditor';
import styles from '../../styles/RecipeForm.module.scss';

const PrepEditor = ({ recipePrep, handleChange }) => {
	const [editorLoaded, setEditorLoaded] = useState(false);

	useEffect(() => {
		setEditorLoaded(true);
	}, []);

	return (
		<div className={styles.prepEditor}>
			<Editor
				name='preparation'
				handleChange={handleChange}
				editorLoaded={editorLoaded}
				value={recipePrep}
			/>
		</div>
	);
};

export default PrepEditor;
