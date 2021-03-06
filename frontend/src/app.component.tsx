import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
// TODO: Add @types package for this
import StyledApp from './app.styled';
import createStore, { loadState } from '@state/store';
import type { EnhancedStore } from '@reduxjs/toolkit';
import Main from './core-modules/main/main.component';

const App = () => {
  // Once store is created, put it into state
  const [store, setStore] = useState<EnhancedStore | null>(null);

  // Effect loads state config stored in local state of client
  useEffect(() => {
    const initialState = loadState();
    setStore(initialState ? createStore(initialState) : createStore());
  }, []);

  // Dont show the app till store is created
  if (!store) {
    return null;
  }

  // Show the app with provider
  return (
    <Provider store={store}>
      <StyledApp>
        <Main />
      </StyledApp>
    </Provider>
  );
};

export default App;
