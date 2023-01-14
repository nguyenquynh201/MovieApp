import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './app/routes/root.route';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <MainNavigator />;
};

export default App;
