import Head from 'next/head';
import { request } from 'graphql-request';
import { useState, useRef, useEffect } from 'react';

import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';

import Layout from '../components/general/Layout';
import Nav from '../components/Nav';
import Recipes from '../components/Recipes';
import styles from '../styles/Layout.module.scss';
import { RecipeCardQuery } from '../src/gql/queries.graphql';
import BackTop from '../components/general/BackTop';
import BurgerMenu from '../components/general/BurgerMenu';

const searchClient = algoliasearch(
	'GETG0N5FXB',
	'f6a8d6a73d050d50551a6fdf84104f07'
);

// const index = client.initIndex('AlaVero_recipes');

export default function Home({ allRecipes, favRecipes }) {
	// index.saveObjects(allRecipes, {
	// 	// All the following parameters are optional
	// 	autoGenerateObjectIDIfNotExist: true,
	// 	// any other requestOptions
	// });

	const [recipes, setRecipes] = useState(allRecipes);
	function toggleFavorites(status) {
		if (status) setRecipes(favRecipes);
		if (!status) setRecipes(allRecipes);
	}
	// ! use if every recipe is favorite means isFav is true if some are not favorite isFav false
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
		const results = allRecipes.filter(
			(recipe) => recipe.name.includes(input) || recipe.addedBy.includes(input)
		);
		if (results && results.length !== 0) setRecipes(results);
	}

	const year = new Date().getFullYear();
	const headerRef = useRef(null);
	const scrollToRef = () =>
		headerRef.current?.scrollIntoView({ behavior: 'smooth' });

	return (
		<>
			<Head>
				<title>A la Vero Recipes</title>
				<meta name='description' content='Cookbook recipes' />
				<link rel='icon' href='/favicon.ico' />
				{/* search input styles */}
			</Head>
			<Layout>
				<header className={styles.header} ref={headerRef}>
					<h1> &Agrave; la Vero</h1>
				</header>
				<BackTop scrollToRef={scrollToRef} />
				<InstantSearch
					searchClient={searchClient}
					indexName='AlaVero_recipes'
					stalledSearchDelay={500}
				>
					<Nav
						toggleFavorites={toggleFavorites}
						selectTypeAllRecipes={selectTypeAllRecipes}
						searchRecipe={searchRecipe}
					/>
					<Recipes recipes={recipes} />
				</InstantSearch>
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
