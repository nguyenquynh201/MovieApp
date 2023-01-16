/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ResultList from '@/screen/Result/ResultList';
import HomeScreen from '@/screen/home/HomeScreen';
import MovieDetail from '@/screen/detail/home_detail/MovieDetail';
AppRegistry.registerComponent(appName, () => ResultList);
