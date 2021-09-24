import { useState } from 'react';

import MenuButton from '../general/MenuButton';
import RecipeMenu from './RecipeMenu';
import RecipeContent from './RecipeContent';
import HomeButton from '../general/HomeButton';
import Layout from '../general/Layout';

const RecipePageInfo = () => {
	const [editRecipe, setEditRecipe] = useState(false);

	return (
		<Layout>
			<MenuButton>
				<RecipeMenu setEditRecipe={setEditRecipe} editRecipe={editRecipe} />
			</MenuButton>

			<HomeButton />

			<RecipeContent editRecipe={editRecipe} setEditRecipe={setEditRecipe} />
		</Layout>
	);
};

export default RecipePageInfo;
