import { useState, useEffect } from 'react';
import Editor from './CKEditor';

const PrepEditor = () => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [data, setData] = useState('');

	useEffect(() => {
		setEditorLoaded(true);
	}, []);
	return (
		<Editor
			name='description'
			onChange={(data) => {
				setData(data);
			}}
			editorLoaded={editorLoaded}
			value='WTF'
		/>
	);
};

export default PrepEditor;
