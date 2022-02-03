/**
 * @generated SignedSource<<96e922c20ccbab3af6273fc2adb0dd8b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type getRecipesQuery$variables = {||};
export type getRecipesQueryVariables = getRecipesQuery$variables;
export type getRecipesQuery$data = {|
  +getRecipes: $ReadOnlyArray<{|
    +name: string,
    +favorite: ?boolean,
    +addedBy: ?string,
    +type: string,
    +img: ?string,
    +id: ?string,
    +createdAt: ?any,
  |}>,
|};
export type getRecipesQueryResponse = getRecipesQuery$data;
export type getRecipesQuery = {|
  variables: getRecipesQueryVariables,
  response: getRecipesQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Recipe",
    "kind": "LinkedField",
    "name": "getRecipes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "favorite",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "addedBy",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "img",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getRecipesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getRecipesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2eee172c310e764ea10232412a604e77",
    "id": null,
    "metadata": {},
    "name": "getRecipesQuery",
    "operationKind": "query",
    "text": "query getRecipesQuery {\n  getRecipes {\n    name\n    favorite\n    addedBy\n    type\n    img\n    id\n    createdAt\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "23ca1f9a2923d5a5e795e7fdc7f13161";

module.exports = ((node/*: any*/)/*: Query<
  getRecipesQuery$variables,
  getRecipesQuery$data,
>*/);
