import {Navigation, setRoot} from './src/config/AppNavigator';
Navigation.events().registerAppLaunchedListener(setRoot);
