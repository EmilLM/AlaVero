import { useState } from 'react';

import MenuButton from '../general/MenuButton';
import RecipeMenu from './RecipeMenu';
import RecipeContent from './RecipeContent';
import HomeButton from '../general/HomeButton';
import Layout from '../general/Layout';

const RecipePageInfo = ({ recipe }) => {
	const [editRecipe, setEditRecipe] = useState(false);

	function handleEditRecipe() {
		setEditRecipe((prevState) => !prevState);
	}
	return (
		<Layout>
			<MenuButton>
				<RecipeMenu
					handleEditRecipe={handleEditRecipe}
					editRecipe={editRecipe}
				/>
			</MenuButton>

			<HomeButton />

			<RecipeContent editRecipe={editRecipe} recipe={recipe} />
		</Layout>
	);
};

export default RecipePageInfo;
