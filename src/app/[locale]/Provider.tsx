'use client'

import theme from '@w/theme/themeConfig';
import { useLocale } from "next-intl";
import { ChakraProvider } from '@chakra-ui/react'
import { EmotionCacheProvider } from '@w/components/EmmotionCacheProvider';
import { WagmiProvider } from 'wagmi';
import { config } from '@w/constants/wagmi';
import { RainbowKitProvider, Locale } from '@rainbow-me/rainbowkit';
import { 
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import Header from '@w/components/Header';


const Provider = ({ children }:{ children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    const locale = useLocale();
    
    return (
      <EmotionCacheProvider>
        <ChakraProvider theme={theme}>
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider locale={locale as Locale}>
                <Header></Header>
                {children}
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </ChakraProvider>
      </EmotionCacheProvider>
    )
}

export default Provider;