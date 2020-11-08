import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@state/root.reducer';

export enum DEVICE {
  DESKTOP = 'DESKTOP',
  TABLET = 'TABLET',
  MOBILE = 'MOBILE',
}

const clientSlice = createSlice({
  name: 'client',
  initialState: { w: 0, h: 0, device: DEVICE.DESKTOP },
  reducers: {
    update: (state, action: PayloadAction<ClientState>) => {
      if (action.payload.w < 600) {
        return {
          ...action.payload,
          device: DEVICE.MOBILE,
        };
      } else if (action.payload.w < 1100) {
        return {
          ...action.payload,
          device: DEVICE.TABLET,
        };
      } else {
        return {
          ...action.payload,
          device: DEVICE.DESKTOP,
        };
      }
    },
  },
});

const { actions, reducer } = clientSlice;
const { update } = actions;

export { update };

export interface ClientState {
  w: number;
  h: number;
  device: DEVICE;
}

export const clientSelector = (state: RootState) => state.client;

export default clientSlice;
