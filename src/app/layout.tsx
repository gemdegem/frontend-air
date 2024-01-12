'use client';

import type { Metadata } from 'next';
import '@fontsource/source-code-pro';
import './globals.css';
import Banner from './components/banner';
import Footer from './components/footer';
import NavigationBar from './components/navigation-bar';
import ThemeProvider from './toggle-theme-provider';

import { createConfig, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";
import Head from './head';

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <WagmiConfig config={config}>
          <SessionProvider refetchInterval={0}>
            <ThemeProvider>
              {/* <Banner /> */}
              <NavigationBar />
              {children}
              <Footer />
            </ThemeProvider>
          </SessionProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
