import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/root.reducer';
import { colors } from '@assets/design.system';

const light = {
  isLight: true,
  body: {
    bg: colors.neutrals.light,
  },
  header: {
    bg: colors.neutrals['100'],
    text: colors.neutrals.dark,
    logo: {
      primary: colors.primary['200'],
      secondary: colors.neutrals['100'],
    },
  },
};

const dark = {
  isLight: false,
  body: {
    bg: colors.neutrals['500'],
  },
  header: {
    bg: colors.neutrals.dark,
    text: colors.neutrals.light,
    logo: {
      primary: colors.neutrals.light,
      secondary: colors.primary['200'],
    },
  },
};

const themes = { light, dark };

const themeSlice = createSlice({
  name: 'theme',
  initialState: themes.light,
  reducers: {
    toggle: (state) => (state.isLight ? themes.dark : themes.light),
  },
});

const { actions, reducer } = themeSlice;
const { toggle } = actions;
export { toggle };

export interface ThemeState {
  isLight: boolean;
  body: {
    bg: string;
  };
  header: {
    bg: string;
    text: string;
    logo: {
      primary: string;
      secondary: string;
    };
  };
}

export const themeSelector = (state: RootState) => state.theme;

export default themeSlice;
