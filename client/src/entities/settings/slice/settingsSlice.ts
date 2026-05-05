import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Currency = "usd" | "eur" | "rub";
export type ThemeMode = "light" | "dark" | "auto";

export type SettingsState = {
  currency: Currency;
  theme: ThemeMode;
};

const initialState: SettingsState = {
  currency: "usd",
  theme: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
  },
});

export const { setCurrency, setTheme } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
