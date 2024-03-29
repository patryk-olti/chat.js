'use client';

import LoginPage from "./loginPage";

import AppProvider from '../lib/context';

export default function Home() {
  return (
      <AppProvider>
          <LoginPage />
      </AppProvider>
  );
}