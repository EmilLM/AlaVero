/**
 * @generated SignedSource<<2db7f5bd3dfea7c122c05519af0dfdee>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type getRecipesQuery$variables = {||};
export type getRecipesQuery$data = {|
  +getRecipes: $ReadOnlyArray<{|
    +type: string,
    +id: ?string,
    +createdAt: ?any,
    +img: ?string,
    +addedBy: ?string,
    +name: string,
    +favorite: ?boolean,
  |}>,
|};
export type getRecipesQuery = {|
  variables: getRecipesQuery$variables,
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
        "name": "type",
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
        "name": "addedBy",
        "storageKey": null
      },
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
    "cacheID": "9aca4a244ad8250141d5c21596a7a246",
    "id": null,
    "metadata": {},
    "name": "getRecipesQuery",
    "operationKind": "query",
    "text": "query getRecipesQuery {\n  getRecipes {\n    type\n    id\n    createdAt\n    img\n    addedBy\n    name\n    favorite\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "7b742968a467057c5680011da3192c4e";

module.exports = ((node/*: any*/)/*: Query<
  getRecipesQuery$variables,
  getRecipesQuery$data,
>*/);
