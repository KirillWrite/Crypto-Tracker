export type CoinMarket = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
};

export type SearchCoin = {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number | null;
  thumb: string;
  large: string;
};

export type SearchResponse = {
  coins: SearchCoin[];
};

export type CoinDetails = {
  id: string;
  symbol: string;
  name: string;
  hashing_algorithm: string | null;
  description: {
    en?: string;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_cap_rank: number | null;
  market_data: {
    current_price: Record<string, number>;
    market_cap: Record<string, number>;
    total_volume: Record<string, number>;
    price_change_percentage_24h: number | null;
  };
};

export type GlobalData = {
  total_market_cap: string,
  market_cap_change_percentage_24h_usd: string,
  total_volume: string,
  market_cap_percentage: string,
};
