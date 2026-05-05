import { coingeckoApi } from "@/entities/coin/api/coingeckoApi";
import { settingsReducer } from "@/entities/settings/slice/settingsSlice";
import { transactionReducer } from "@/entities/transaction/slice/transactionsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "./storage";
import persistReducer from "redux-persist/lib/persistReducer";

// объединяем редьюсеры в один корневой редьюсер
const rootReducer = combineReducers({
  [coingeckoApi.reducerPath]: coingeckoApi.reducer,
  transactions: transactionReducer,
  settings: settingsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['transactions', 'settings'],
};

export const persisistedReducer = persistReducer(persistConfig, rootReducer);

