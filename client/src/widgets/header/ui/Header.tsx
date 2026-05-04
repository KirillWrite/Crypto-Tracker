"use client";

import { useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import { CLIENT_ROUTES } from "@/shared/lib/constants";
import styles from "./Header.module.css";

export function Header() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header>
      <Link href={CLIENT_ROUTES.MARKET}>Рынок</Link>
      <Link href={CLIENT_ROUTES.PORTFOLIO}>Портфель</Link>
      <Link href={CLIENT_ROUTES.TRANSACTIONS}>Транзакции</Link>
      <Link href={CLIENT_ROUTES.SETTINGS}>Настройки</Link>

      <button onClick={() => toggleColorScheme()}>
        <span className={styles.themeIconLight}>☀️</span>
        <span className={styles.themeIconDark}>🌙</span>
      </button>
    </header>
  );
}
