import '../styles/globals.css';
import type {AppProps} from 'next/app'
import {SWRConfig} from "swr";
import '@rainbow-me/rainbowkit/styles.css';
import {
  Chain, getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import {jsonRpcProvider} from 'wagmi/providers/jsonRpc';
import {ToastContainer} from 'react-toastify';
import '../styles/react-toastify.scss'

const bnbMainnetChain: Chain = {
  id: 56,
  network: "",
  name: 'Smart Chain',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org/',
  },
  blockExplorers: {
    default: {name: 'BscScan', url: 'https://bscscan.com'},
  },
  testnet: false
};

const bnbTestnetChain: Chain = {
  id: 97,
  network: "",
  name: 'Smart Chain - Testnet',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'tBNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  },
  blockExplorers: {
    default: {name: 'BscScan', url: 'https://testnet.bscscan.com/'},
  },
  testnet: true
};

const klaytenMainnetChain: Chain = {
  id: 8217,
  network: "",
  name: 'Klaytn Mainnet',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'KLAY',
    symbol: 'KLAY',
  },
  rpcUrls: {
    default: 'https://public-node-api.klaytnapi.com/v1/cypress/',
  },
  blockExplorers: {
    default: {name: 'KlaytnScope', url: 'https://scope.klaytn.com'},
  },
  testnet: false
};


const telosMainnetChain: Chain = {
  id: 40,
  network: "",
  name: 'Telos Mainnet',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'TLOS',
    symbol: 'TLOS',
  },
  rpcUrls: {
    default: 'https://mainnet.telos.net/evm',
  },
  blockExplorers: {
    default: {name: 'TelosScan', url: 'https://teloscan.io'},
  },
  testnet: false
};

const {provider, chains} = configureChains(
  [bnbMainnetChain, bnbTestnetChain, klaytenMainnetChain, telosMainnetChain],
  [jsonRpcProvider({rpc: chain => ({http: chain.rpcUrls.default})})]
);

const {connectors} = getDefaultWallets({
  appName: 'Cryptolice',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <SWRConfig>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
          <ToastContainer/>
        </RainbowKitProvider>
      </WagmiConfig>
    </SWRConfig>
  )
}

export default MyApp
