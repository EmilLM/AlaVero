import { ApolloServer, gql } from 'apollo-server-micro';
import { connectDb } from '../../src/services/mongo';

import fs from 'fs';
import path from 'path';


const typeDefs = fs.readFileSync(
	path.join(__dirname, '../../../../src/schemas', 'schema.graphql'),
	'utf8'
);

const resolvers = {
	Query: {
		users(parent, args, context) {
			return [{ name: 'Nextjs', id: 'foo' }];
		},
	},
};
connectDb();
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://studio.apollographql.com'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	if (req.method === 'OPTIONS') {
		res.end();
		return false;
	}

	await startServer;
	await apolloServer.createHandler({
		path: '/api/graphql',
	})(req, res);
}

export const config = {
	api: {
		bodyParser: false,
	},
};
