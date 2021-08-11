import Head from 'next/head';
import Layout from '../components/general/Layout';
import Nav from '../components/Nav';
import Recipes from '../components/Recipes';
import styles from '../styles/Layout.module.scss';

export default function Home() {
	const year = new Date().getFullYear();

	return (
		<>
			<Head>
				<title>A la Vero Cookbook</title>
				<meta name='description' content='Cookbook recipes' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<header className={styles.header}>
					<h1> &Agrave; La Vero</h1>
				</header>
				<Nav />
				<Recipes />
				<footer className={styles.footer}>
					Site retete @&Agrave; La Vero <span>{year}</span>
				</footer>
			</Layout>
		</>
	);
}
