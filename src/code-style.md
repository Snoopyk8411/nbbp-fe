Project specific rules:

## BEM
Divide your styles by components and use BEM metodology to write the styles code.

Example:
Block - "aside_bar"
Element - "logo"
Modificator - "higlighted" || ""
Result: "aside_bar-logo--highlited" - see separators here

Prettier is configured for this project. Please, read the .prettierrc.js to learn more about the project code style.
Documentation link also may help :
https://prettier.io/docs/en/next/options.html

# Architecture Blocks:
React.js - is used for a view (preferable to use functional components here)
Redux - is used for a model (store)
Redux Slice is used for reduce boilerplate with reducers and actions. See detailes guide here:
https://redux-toolkit.js.org/api/createSlice

Redux Saga is used for the async actions implemetation
Axios is in use for the fetching data from the server (please, use services/common/axious-request instance to make requests)

# TS, TSX styles
Rule 1: prefer to use absolute imports, except case if importing component is not a child for the component
## import './child' - OK
## import '../../component' - is not OK

Rule 2:
Please import libraries first.
Then absolute imports, then child imports
Example:
## import React from 'react';
## import Logo from 'components/logo';

## import SidebarGroup from './group';

# Directory an files naming

Please, use '-' as separator in the file and directories naming.
Do not use upper case in naming.
Example:
"transaction-list/" - directory
"collapsible-list.tsx" - file

Please, use Pixel Perfect instrument to check layout identity to design mockups