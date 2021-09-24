import React, { useEffect, useRef } from 'react';
import styles from '../../styles/RecipeForm.module.scss';

function Editor({ handleChange, editorLoaded, name, value }) {
	const editorRef = useRef();
	const { CKEditor, ClassicEditor } = editorRef.current || {};

	useEffect(() => {
		editorRef.current = {
			CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
			ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
		};
	}, []);

	const config = {
		toolbar: [
			'bold',
			'italic',
			'|',
			'undo',
			'redo',
			'|',
			'numberedList',
			'bulletedList',
		],
	};

	return (
		<div>
			{editorLoaded ? (
				<CKEditor
					name={name}
					editor={ClassicEditor}
					config={config}
					data={value}
					onChange={(event, editor) => {
						const data = editor.getData();
						// console.log({ event, editor, data })
						// onChange(data);
						handleChange(data);
					}}
				/>
			) : (
				<textarea className={styles.prepTextarea} />
			)}
		</div>
	);
}

export default Editor;
