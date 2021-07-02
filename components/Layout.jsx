import styles from '../styles/Layout.module.scss';
import Image from 'next/image';
import bgImage from '../public/bg2.jpg';

const Layout = (props) => {
	const year = new Date().getFullYear();
	return (
		<div className={styles.container}>
			{/* <Image src={bgImage} alt='bg' className={styles.bgImage} layout='fill' /> */}
			{props.children}
			<footer className={styles.footer}>
				Site retete @&Agrave; La Vero <span>{year}</span>
			</footer>
		</div>
	);
};

export default Layout;
