import Head from 'next/head';
import styles from '../styles/NewRecipe.module.scss';
import Link from 'next/link';
import AddRecipe from '../components/newRecipe.js/AddRecipe';
import { RiArrowGoBackFill } from 'react-icons/ri';

export default function NewRecipe() {
	return (
		<>
			<Head>
				<title>A la Vero Cookbook</title>
			</Head>
			<div className={styles.container}>
				<h4>Reteta noua:</h4>

				<Link href='/'>
					<a className={styles.back}>
						<RiArrowGoBackFill />
					</a>
				</Link>

				<AddRecipe />
			</div>
		</>
	);
}
