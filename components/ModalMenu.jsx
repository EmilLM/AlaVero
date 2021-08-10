import styles from '../styles/RecipeModal.module.scss';
import { AiFillEdit, AiFillDelete, AiFillCopy } from 'react-icons/ai';

const ModalMenu = ({handleEditRecipe}) => {


	return (
		<div className={styles.menu}>
			<ul>
				<li>
					<a onClick={handleEditRecipe}>
						<AiFillEdit />
						Editeaza
					</a>
				</li>
				<li className={styles.midOption}>
					<a>
						<AiFillDelete />
						Sterge
					</a>
				</li>
				<li>
					<a>
						<AiFillCopy />
						Copiaza
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ModalMenu;
