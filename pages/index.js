import Head from 'next/head';
import { request } from 'graphql-request';
import { useState, useRef, useEffect } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { algoliaClient, index } from '../src/services/algolia-search';

import { loadQuery, RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../src/services/relay-environment';

import { RecipeCardQuery } from '../src/gql/getRecipesQuery';

import Layout from '../components/general/Layout';
import Nav from '../components/Nav';
import Recipes from '../components/Recipes';
import styles from '../styles/Layout.module.scss';
// import { RecipeCardQuery } from '../src/gql/queries.graphql';
import BackTop from '../components/general/BackTop';

// import Test from '../components/Test';
import dynamic from "next/dynamic";

const Test = dynamic(() => import("../components/Test"), {
	ssr: false,
  });

// const preloadedQuery = loadQuery(RelayEnvironment, RecipeCardQuery);

export default function Home({preloadedQuery}) {

	return (
		<>
			<Head>
				<title>A la Vero Recipes</title>
				<meta name='description' content='Cookbook recipes' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* <RelayEnvironmentProvider environment={RelayEnvironment}> */}
				<Test preloadedQuery={preloadedQuery}/>
			{/* </RelayEnvironmentProvider> */}
		</>
	);
}

export async function getServerSideProps({ req }) {
	console.log(req?.headers.host);

	// const { getRecipes } = await request(
	// 	'http://localhost:3000/api/graphql',
	// 	// `https://${req.headers.host}/api/graphql`,
	// 	RecipeCardQuery
	// );

	// getRecipes.map((recipe) => {
	// 	recipe.objectID = recipe.id;
	// });
	// // algolia add recipes to index
	// index.saveObjects(getRecipes);

	return {
		props: {
			// allRecipes: getRecipes,
		},
	};
}
