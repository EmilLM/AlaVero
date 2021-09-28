import styles from '../../styles/Buttons.module.scss';
import { AiFillEdit, AiFillDelete, AiFillCopy } from 'react-icons/ai';


const RecipeMenu = ({ setEditRecipe, editRecipe, handleDelete }) => {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.href);
		// add some sort of confirmation
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
					<a onClick={handleDelete}>
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
