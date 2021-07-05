import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import MainPage from './source/mainPage';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainPage />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;