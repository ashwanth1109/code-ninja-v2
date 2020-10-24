import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '@state/root.reducer';
import throttle from 'lodash.throttle';

export const loadState = (): RootState | null => {
  const serializedState = localStorage.getItem('state');

  if (serializedState === null) {
    return null;
  }

  return JSON.parse(serializedState);
};

const saveState = (state: RootState) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};

const createStore = (initialState?: RootState): EnhancedStore => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [],
    ...(initialState ? { preloadedState: initialState } : {}),
  });

  store.subscribe(
    throttle(() => {
      saveState({
        theme: store.getState().theme,
      });
    }),
  );

  if (import.meta.env.NODE_ENV === 'development' && import.meta.hot) {
    import.meta.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export default createStore;
