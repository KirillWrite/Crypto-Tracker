export type Transaction = {
  id: string;
  coinId: string;
  symbol: string;
  name?: string;
  type: "buy" | "sell";
  quantity: number;
  price: number;
  date: number;
  description?: string;
};

export type TransactionState = {
  transactions: Transaction[];
};

export type UpdateTransactionPayload = {
  id: string;
  updates: Partial<Omit<Transaction, "id">>;
};
