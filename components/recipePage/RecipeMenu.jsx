import styles from '../../styles/Buttons.module.scss';
import { AiFillEdit, AiFillDelete, AiFillCopy } from 'react-icons/ai';
import { request } from 'graphql-request';
import { DeleteRecipe } from '../../src/gql/mutations.graphql';
import { useRouter } from 'next/router';

const RecipeMenu = ({ setEditRecipe, editRecipe, recipe }) => {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.href);
		// add some sort of confirmation
	};

	const router = useRouter();
	console.log(recipe.name);
	const eraseRecipe = async () => {
		try {
			const res = await request(
				'http://localhost:3000/api/graphql',
				DeleteRecipe,
				{ recipeName: recipe.name }
			);
			router.push('/');
			console.log(res);
		} catch (err) {
			console.error('deleting error', err.message);
		}
	};
	return (
		<div className={styles.menu}>
			<ul>
				<li>
					<a onClick={() => setEditRecipe(!editRecipe)}>
						<AiFillEdit />
						{editRecipe ? 'Renunta' : 'Editeaza'}
					</a>
				</li>
				<li className={styles.midOption}>
					<a onClick={eraseRecipe}>
						<AiFillDelete />
						Sterge
					</a>
				</li>
				<li>
					<a onClick={copyToClipboard}>
						<AiFillCopy />
						Copiaza
					</a>
				</li>
			</ul>
		</div>
	);
};

export default RecipeMenu;
