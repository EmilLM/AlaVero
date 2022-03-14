/**
 * @generated SignedSource<<d7aa57b4ee3ff499a6dfce2ac3a9f6e0>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type getSessionInfoQuery$variables = {||};
export type getSessionInfoQueryVariables = getSessionInfoQuery$variables;
export type getSessionInfoQuery$data = {|
  +getSessionInfo: {|
    +brandID: number,
    +realCountry: ?string,
    +sessionID: string,
    +spoofCountry: ?string,
    +player: {|
      +address1: ?string,
    |},
  |},
|};
export type getSessionInfoQueryResponse = getSessionInfoQuery$data;
export type getSessionInfoQuery = {|
  variables: getSessionInfoQueryVariables,
  response: getSessionInfoQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetSessionInfo",
    "kind": "LinkedField",
    "name": "getSessionInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "brandID",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "realCountry",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sessionID",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "spoofCountry",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PlayerInfo",
        "kind": "LinkedField",
        "name": "player",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address1",
            "storageKey": null
          }
        ],
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
    "name": "getSessionInfoQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getSessionInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e1ed12ca52569f58095154052c59d774",
    "id": null,
    "metadata": {},
    "name": "getSessionInfoQuery",
    "operationKind": "query",
    "text": "query getSessionInfoQuery {\n  getSessionInfo {\n    brandID\n    realCountry\n    sessionID\n    spoofCountry\n    player {\n      address1\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "2dcd0364db6429773aa52f4fd01fa6df";

module.exports = ((node/*: any*/)/*: Query<
  getSessionInfoQuery$variables,
  getSessionInfoQuery$data,
>*/);
