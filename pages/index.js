import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Content from '../components/Content';

export default function Home() {
	return (
		<>
			<Head>
				<title>A la Vero Cookbook</title>
				<meta name='description' content='Cookbook recipes' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Header />
				<Content />
			</Layout>
		</>
	);
}
