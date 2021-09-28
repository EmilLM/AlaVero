import styles from '../../styles/ConfirmationModal.module.scss';

const ConfirmationModal = ({ handleDelete, eraseRecipe }) => {
	return (
		<div className={styles.layer}>
			<div className={styles.modal}>
				<h2>Sigur vrei sa stergi reteta?</h2>
				<div className={styles.buttons}>
					<button onClick={eraseRecipe}>Da</button>
					<button onClick={handleDelete}>Nu</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
