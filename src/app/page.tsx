'use client';

import LoginPage from "./loginPage";

import AppProvider from '../lib/context';

export default function Home() {
  return (
    <main>
      <AppProvider>
          <LoginPage />
      </AppProvider>
    </main>
  );
}