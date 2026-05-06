'use client';

import { useGetGlobalStatsQuery } from '@/entities/coin/api/coingeckoApi';

export function GlobalStats(): React.JSX.Element {
  const { data, isLoading, error } = useGetGlobalStatsQuery();

  if (isLoading) {
    return <div>Loading global stats...</div>;
  }
  if (error) {
    return <div>Failed to load global stats data</div>;
  }

  return (
    <section>
      <div>Общая капитализация: ${data?.data.total_market_cap?.usd?.toLocaleString()}</div>
      <div>Объём за 24ч: ${data?.data.total_volume?.usd?.toLocaleString()}</div>
      <div>Доминирование BTC: {data?.data.market_cap_percentage?.btc?.toFixed(1)}%</div>
      <div>Изменение капитализации за 24ч: {data?.data.market_cap_change_percentage_24h_usd?.toFixed(2)}%</div>
    </section>
  );
}