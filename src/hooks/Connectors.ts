import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const RPC_URLS: { [chainId: number]: string } = {
  // 1: process.env.RPC_URL_1 as string,
  // 4: process.env.RPC_URL_4 as string,
  // 56: process.env.RPC_URL_56 as string,
  97: process.env.RPC_URL_97 as string,
};

export const injected = new InjectedConnector({
  supportedChainIds: [
    // 1, 3, 4, 5, 42,
    // 56, 97,
    97,
  ],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    // 1: RPC_URLS[1] || '',
    // 4: RPC_URLS[4] || '',
    // 56: RPC_URLS[56] || '',
    97: RPC_URLS[97] || "",
  },
  qrcode: true,
});
