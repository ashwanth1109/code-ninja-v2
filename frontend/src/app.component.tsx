import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Container from './app.styled';
import createStore, { loadState } from '@state/store';
import Header from './core-modules/header/index.module';
import type { EnhancedStore } from '@reduxjs/toolkit';

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
      <Container>
        <Header />
      </Container>
    </Provider>
  );
};

export default App;