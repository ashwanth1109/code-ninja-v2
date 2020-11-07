import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/root.reducer';
import { colors } from '@assets/design.system';

const light = {
  isLight: true,
  body: {
    bg: colors.neutrals['100'],
    text: colors.neutrals.dark,
  },
  elevated: {
    bg: colors.neutrals['300'],
    text: colors.neutrals.dark,
  },
  header: {
    bg: colors.neutrals['300'],
    text: colors.neutrals.dark,
    logo: {
      primary: colors.primary['200'],
      secondary: colors.neutrals['100'],
    },
    search: {
      bg: colors.neutrals['100'],
      bottomBorder: colors.primary['200'],
      icon: colors.neutrals['400'],
    },
  },
};

const dark = {
  isLight: false,
  body: {
    bg: colors.neutrals.dark,
    text: colors.neutrals.light,
  },
  elevated: {
    bg: colors.neutrals['500'],
    text: colors.neutrals.light,
  },
  header: {
    bg: colors.neutrals['500'],
    text: colors.neutrals.light,
    logo: {
      primary: colors.neutrals.light,
      secondary: colors.primary['200'],
    },
    search: {
      bg: colors.neutrals.dark,
      bottomBorder: colors.primary['100'],
      icon: colors.neutrals['200'],
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
    text: string;
  };
  elevated: {
    bg: string;
    text: string;
  };
  header: {
    bg: string;
    text: string;
    logo: {
      primary: string;
      secondary: string;
    };
    search: {
      bg: string;
      bottomBorder: string;
      icon: string;
    };
  };
}

export const themeSelector = (state: RootState) => state.theme;

export default themeSlice;
