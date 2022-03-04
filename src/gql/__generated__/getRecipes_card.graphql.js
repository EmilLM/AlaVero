/**
 * @generated SignedSource<<e6e6a1e97762e996cd0f3e541f862837>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type getRecipes_card$fragmentType: FragmentType;
export type getRecipes_card$ref = getRecipes_card$fragmentType;
export type getRecipes_card$data = {|
  +name: string,
  +favorite: ?boolean,
  +img: ?string,
  +addedBy: ?string,
  +$fragmentType: getRecipes_card$fragmentType,
|};
export type getRecipes_card = getRecipes_card$data;
export type getRecipes_card$key = {
  +$data?: getRecipes_card$data,
  +$fragmentSpreads: getRecipes_card$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "getRecipes_card",
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
      "name": "img",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "addedBy",
      "storageKey": null
    }
  ],
  "type": "Recipe",
  "abstractKey": null
};

(node/*: any*/).hash = "47e536c6e2a7657e676c8424e4497d7d";

module.exports = ((node/*: any*/)/*: Fragment<
  getRecipes_card$fragmentType,
  getRecipes_card$data,
>*/);
