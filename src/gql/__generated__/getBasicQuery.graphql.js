/**
 * @generated SignedSource<<48f4f777d0e9bdcd4224d7efa8d81638>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type getBasicQuery$variables = {||};
export type getBasicQueryVariables = getBasicQuery$variables;
export type getBasicQuery$data = {|
  +getBasic: ?{|
    +success: boolean,
  |},
|};
export type getBasicQueryResponse = getBasicQuery$data;
export type getBasicQuery = {|
  variables: getBasicQueryVariables,
  response: getBasicQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicResponse",
    "kind": "LinkedField",
    "name": "getBasic",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "getBasicQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getBasicQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9dbefcb89a815647f46fcf9aa73b6a80",
    "id": null,
    "metadata": {},
    "name": "getBasicQuery",
    "operationKind": "query",
    "text": "query getBasicQuery {\n  getBasic {\n    success\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "3be9388223cfb5910005038696ef9795";

module.exports = ((node/*: any*/)/*: Query<
  getBasicQuery$variables,
  getBasicQuery$data,
>*/);
