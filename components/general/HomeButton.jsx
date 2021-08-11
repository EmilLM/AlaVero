import Link from 'next/link';
import styles from '../../styles/Buttons.module.scss';
import { RiArrowGoBackFill } from 'react-icons/ri';

const HomeButton = () => {
	return (
		<Link href='/'>
			<a className={styles.backButton}>
				<RiArrowGoBackFill />
			</a>
		</Link>
	);
};

export default HomeButton;
