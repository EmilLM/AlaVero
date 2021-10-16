import styles from '../../styles/FormTooltip.module.scss';
import { FaQuestionCircle } from 'react-icons/fa';

const FormTooltip = (props) => {
	return (
		<div className={styles.tooltip}>
			<FaQuestionCircle />
			<div className={styles.top}>
				<h3>{props.title}</h3>
				<p>{props.infoOne}</p>
				<p>{props.infoTwo}</p>
				<p>{props.infoThree}</p>
				<i></i>
			</div>
		</div>
	);
};

export default FormTooltip;
