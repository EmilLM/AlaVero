import { gql } from 'graphql-request';

export const PostRecipe = gql`
	mutation AddNewRecipe($input: createRecipe) {
		newRecipe(input: $input) {
			name
		}
	}
`;
export const UpdateRecipe = gql`
	mutation UpdateRecipeMutation(
		$updateRecipeName: String!
		$updateRecipeInput: createRecipe
	) {
		updateRecipe(name: $updateRecipeName, input: $updateRecipeInput) {
			name
		}
	}
`;

export const DeleteRecipe = gql`
	mutation deleteRecipeMutation($recipeName: String!) {
		deleteRecipe(name: $recipeName)
	}
`;
