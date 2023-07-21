import React from 'react';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

export default App;
