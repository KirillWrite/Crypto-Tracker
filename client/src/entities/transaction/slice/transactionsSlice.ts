import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  Transaction,
  TransactionState,
  UpdateTransactionPayload,
} from "../model/transaction";

const initialState: TransactionState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },

    updateTransaction: (
      state,
      action: PayloadAction<UpdateTransactionPayload>,
    ) => {
      const index = state.transactions.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.transactions[index] = {
          ...state.transactions[index],
          ...action.payload.updates,
        };
      }
    },

    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addTransaction, updateTransaction, deleteTransaction } =
  transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
