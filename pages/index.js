import Head from 'next/head';
import { request } from 'graphql-request';
import { useState, useEffect } from 'react';

import Layout from '../components/general/Layout';
import Nav from '../components/Nav';
import Recipes from '../components/Recipes';
import styles from '../styles/Layout.module.scss';
import { RecipeCardQuery } from '../src/gql/queries.graphql';

export default function Home({ allRecipes, favRecipes }) {
	const [recipes, setRecipes] = useState(allRecipes);
	function toggleFavorites(status) {
		if (status) setRecipes(favRecipes);
		if (!status) setRecipes(allRecipes);
		console.log('fav recipes ', recipes);
	}

	function selectTypeAllRecipes(type) {
		if (type === 'Prajituri') {
			const cookies = allRecipes.filter(
				(recipe) => recipe.type === 'Prajitura'
			);
			setRecipes(cookies);
		} else if (type === 'Mancare') {
			const food = allRecipes.filter((recipe) => recipe.type === 'Mancare');
			setRecipes(food);
		} else if (type === 'Sosuri') {
			const sauces = allRecipes.filter((recipe) => recipe.type === 'Sos');
			setRecipes(sauces);
		} else if (type === 'Toate' || 'Categorii') {
			setRecipes(allRecipes);
		} else {
			setRecipes('Nu exista retete pentru' + type);
			// !!!!!!!Add message to recipe list
		}
	}

	function searchRecipe(input) {
		//! find better algo
		const results = allRecipes.filter((recipe) => recipe.name.includes(input));
		console.log('results', results);
		if (results && results.length !== 0) setRecipes(results);
	}

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
					<h1> &Agrave; la Vero</h1>
				</header>
				<Nav
					toggleFavorites={toggleFavorites}
					selectTypeAllRecipes={selectTypeAllRecipes}
					searchRecipe={searchRecipe}
				/>
				<Recipes recipes={recipes} />
				<footer className={styles.footer}>
					Site retete @&Agrave; La Vero <span>{year}</span>
				</footer>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const { getRecipes } = await request(
		'http://localhost:3000/api/graphql',
		RecipeCardQuery
	);
	const onlyFavorites = getRecipes.filter((recipe) => recipe.favorite === true);

	return {
		props: {
			allRecipes: getRecipes,
			favRecipes: onlyFavorites,
		},
	};
}
