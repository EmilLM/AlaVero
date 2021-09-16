import Head from 'next/head';
import Layout from '../components/general/Layout';
import Nav from '../components/Nav';
import Recipes from '../components/Recipes';
import styles from '../styles/Layout.module.scss';
import { request } from 'graphql-request';
import { RecipeCardQuery } from '../src/gql/queries.graphql';

export default function Home({data}) {
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
				<Recipes recipes = {data} />
				<footer className={styles.footer}>
					Site retete @&Agrave; La Vero <span>{year}</span>
				</footer>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const {getRecipes} = await request(
		'http://localhost:3000/api/graphql',
		RecipeCardQuery
	);
	return {
		props: {
			data: getRecipes
		},
	};
}
