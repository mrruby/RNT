/**
 * @format
 */
// eslint-disable-next-line prettier/prettier
import '@ethersproject/shims';
import {AppRegistry} from 'react-native';
import 'react-native-get-random-values';

import {name as appName} from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
