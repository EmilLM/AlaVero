import algoliasearch from 'algoliasearch';

export const algoliaClient = algoliasearch(
	process.env.NEXT_PUBLIC_ALG_APP_ID,
	process.env.NEXT_PUBLIC_ALG_ADMIN_KEY
);

export const index = algoliaClient.initIndex('AlaVero_recipes');

