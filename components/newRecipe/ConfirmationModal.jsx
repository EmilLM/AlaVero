import styles from '../../styles/ConfirmationModal.module.scss';
import Loader from '../general/Loader';
import { useRouter } from 'next/router';

import { MdDelete } from 'react-icons/md';
import { CgCloseR } from 'react-icons/cg';
import { BiMessageAltError } from 'react-icons/bi';
import { FiHome, FiRefreshCw } from 'react-icons/fi';

const ConfirmationModal = (props) => {
	const { setConfirmDelete, eraseRecipe, isLoading, error } = props;
	const router = useRouter();

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<button
					className={styles.close}
					onClick={() => setConfirmDelete(false)}
				>
					<CgCloseR />
				</button>
				{error ? (
					<div className={styles.info}>
						<BiMessageAltError style={{ color: 'red' }} />
						<h3>
							Reteta nu a putut fi stearsa. Reincarca pagina sau incearca mai
							tarziu.
						</h3>
					</div>
				) : (
					<div className={styles.info}>
						<MdDelete />

						<h2>Sigur vrei sa stergi reteta?</h2>
					</div>
				)}

				<div className={styles.buttons}>
					{!isLoading ? (
						!error ? (
							<>
								<button onClick={eraseRecipe}>Da</button>
								<button onClick={() => setConfirmDelete(false)}>Nu</button>
							</>
						) : (
							<>
								<button onClick={() => router.reload()}>
									<FiRefreshCw />
								</button>
								<button onClick={() => router.push('/')}>
									<FiHome />
								</button>
							</>
						)
					) : (
						<Loader />
					)}
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
