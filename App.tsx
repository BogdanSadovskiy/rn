import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigations/MainNavigator.tsx';

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
            <MainNavigator />
        </SafeAreaProvider>
      </Provider>
    </>
  );
}

export default App;
