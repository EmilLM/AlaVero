import Head from 'next/head';
import { request } from 'graphql-request';
import { useState, useRef, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { InstantSearch } from 'react-instantsearch-dom';
import { algoliaClient, index } from '../src/services/algolia-search';

import Layout from '../components/general/Layout';
import Nav from '../components/Nav';
import Recipes from '../components/Recipes';
import styles from '../styles/Layout.module.scss';
import { RecipeCardQuery } from '../src/gql/queries.graphql';
import BackTop from '../components/general/BackTop';

export default function Home({ allRecipes }) {
	const year = new Date().getFullYear();
	const headerRef = useRef(null);
	const scrollToRef = () =>
		headerRef.current?.scrollIntoView({ behavior: 'smooth' });

	useEffect(() => {
		// required for ui updates of index
		algoliaClient.clearCache();
	}, []);

	// const { loading, error, data } = useQuery(RecipeCardQuery, { ssr: true });

	return (
		<>
			<Head>
				<title>A la Vero Recipes</title>
				<meta name='description' content='Cookbook recipes' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<header className={styles.header} ref={headerRef}>
					<h1> &Agrave; la Vero</h1>
				</header>
				<BackTop scrollToRef={scrollToRef} />
				<InstantSearch
					searchClient={algoliaClient}
					indexName='AlaVero_recipes'
					refresh
				>
					<Nav />
					<Recipes />
				</InstantSearch>
				<footer className={styles.footer}>
					Site retete @&Agrave; La Vero <span>{year}</span>
				</footer>
			</Layout>
		</>
	);
}

export async function getServerSideProps({ req }) {
	const { getRecipes } = await request(
		// 'http://localhost:3000/api/graphql',
		`https://${req.headers.host}/api/graphql`,
		RecipeCardQuery
	);

	getRecipes.map((recipe) => {
		recipe.objectID = recipe.id;
	});
	// algolia add recipes to index
	index.saveObjects(getRecipes);
	return {
		props: {
			allRecipes: getRecipes,
		},
	};
}
