import { combineReducers } from '@reduxjs/toolkit';
import themeSlice, { ThemeState } from '@state/theme.state';

export interface RootState {
  theme: ThemeState;
}

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
});

export default rootReducer;
