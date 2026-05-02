'use client';

import { CLIENT_ROUTES } from '@/shared/constants/clientRoutes';
import Link from 'next/link';
import styles from './Header.module.css';
import { Group, useMantineColorScheme } from '@mantine/core';

export function Header() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <Group className={styles.link} mx={20}>
        <Link href={CLIENT_ROUTES.MARKET}>Market</Link>

        <Link href={CLIENT_ROUTES.PORTFOLIO}>Portfolio</Link>

        <Link href={CLIENT_ROUTES.SETTINGS}>Settings</Link>

        <Link href={CLIENT_ROUTES.TRANSACTIONS}>Transactions</Link>

        <button onClick={toggleColorScheme}>Сменить тему</button>
      </Group>
    </>
  );
}
