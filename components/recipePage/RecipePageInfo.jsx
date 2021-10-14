import { useState, useContext } from 'react';
import { request } from 'graphql-request';
import { DeleteRecipe } from '../../src/gql/mutations.graphql';
import { useRouter } from 'next/router';
import { RecipeContext } from '../general/recipe.context';
import { index } from '../../src/services/algolia-search';

import MenuButton from '../general/MenuButton';
import RecipeMenu from './RecipeMenu';
import RecipeContent from './RecipeContent';
import HomeButton from '../general/HomeButton';
import Layout from '../general/Layout';
import ConfirmationModal from '../newRecipe/ConfirmationModal';

const RecipePageInfo = () => {
	const [editRecipe, setEditRecipe] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);

	const { recipe } = useContext(RecipeContext);

	const handleDelete = () => setConfirmDelete((prev) => !prev);
	const router = useRouter();

	const eraseRecipe = async () => {
		try {
			await request('http://localhost:3000/api/graphql', DeleteRecipe, {
				recipeName: recipe.name,
			});
			await index.deleteObject(recipe.id).wait();
			// !!! add loading indicator for deletion
			localStorage.removeItem(recipe.name);
			setConfirmDelete(false);
			router.push('/');
		} catch (err) {
			console.error('deleting error', err.message);
		}
	};
	return (
		<Layout>
			<MenuButton>
				<RecipeMenu
					setEditRecipe={setEditRecipe}
					editRecipe={editRecipe}
					handleDelete={handleDelete}
				/>
			</MenuButton>
			{confirmDelete && (
				<ConfirmationModal
					handleDelete={handleDelete}
					eraseRecipe={eraseRecipe}
				/>
			)}
			<HomeButton />

			<RecipeContent editRecipe={editRecipe} setEditRecipe={setEditRecipe} />
		</Layout>
	);
};

export default RecipePageInfo;
