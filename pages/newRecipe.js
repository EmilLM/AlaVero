import Head from 'next/head';
import RecipeForm from '../components/newRecipe/RecipeForm';
import styles from '../styles/Layout.module.scss';

import HomeButton from '../components/general/HomeButton';
import Layout from '../components/general/Layout';

export default function NewRecipe() {
	return (
		<>
			<Head>
				<title>A la Vero Cookbook</title>
			</Head>
			<Layout>
				<h4 className={styles.newRecipeHeader}>Reteta Noua: </h4>
				<HomeButton />
				<RecipeForm />
			</Layout>
		</>
	);
}
