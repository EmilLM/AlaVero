import { graphql } from "relay-runtime";

export const BasicResponseQuery = graphql`
	query getBasicQuery {
		getBasic {
			success
		}
	}
`;

