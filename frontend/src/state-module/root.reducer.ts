import { combineReducers } from '@reduxjs/toolkit';
import themeSlice, { ThemeState } from '@state/theme.state';
import clientSlice, { ClientState } from '@state/client.state';

export interface RootState {
  theme: ThemeState;
  client: ClientState;
}

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  client: clientSlice.reducer,
});

export default rootReducer;
