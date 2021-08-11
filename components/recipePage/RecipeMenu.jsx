import styles from '../../styles/Buttons.module.scss';
import { AiFillEdit, AiFillDelete, AiFillCopy } from 'react-icons/ai';

const RecipeMenu = ({ handleEditRecipe, editRecipe }) => {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.href);
		alert('Link-ul catre aceasta reteta a fost copiat');
	};
	return (
		<div className={styles.menu}>
			<ul>
				<li>
					<a onClick={handleEditRecipe}>
						<AiFillEdit />
						{editRecipe ? 'Renunta' : 'Editeaza'}
					</a>
				</li>
				<li className={styles.midOption}>
					<a>
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
