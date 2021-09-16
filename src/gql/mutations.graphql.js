import { gql } from '@apollo/client';

export const PostRecipe = gql`
	mutation AddNewRecipe($input: createRecipe) {
		newRecipe(input: $input) {
			name
		}
	}
`;
