"use client";
import { useGetTopCoinsQuery } from "@/entities/coin/api/coingeckoApi";
import Link from "next/link";

export default function MarketPage() {
  const { data, isLoading, error }= useGetTopCoinsQuery()

if (isLoading) {
  return <div>Loading top coins...</div>;
}
if (error) {
  return <div>Failed to load market data</div>;
}

  return (
    <div>
      <h1>Top Coins</h1>

      <ul>
        {data?.map((coin) => (
          <li key={coin.id}>
            <Link href={`/coin/${coin.id}`}>
              {coin.name} ({coin.symbol.toUpperCase()}) - ${coin.current_price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
