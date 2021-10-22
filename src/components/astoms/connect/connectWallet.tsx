import React from 'react';

import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { injected, walletconnect } from './Connectors';
import { useEagerConnect, useInactiveListener } from './hooks';

const ConnectWallet = () => {
  const context = useWeb3React<Web3Provider>();
  const triedEager = useEagerConnect();
  const { account } = useWeb3React();
  useInactiveListener(!triedEager);

  const connectWallet = async (type: string) => {
    if (type === 'metamask') {
      await context.activate(injected);
    } else context.activate(walletconnect);
  };
  return (
    <>
    {
      typeof account === 'undefined' ? (
      <p className="buttonConnect" onClick={() => connectWallet('metamask')}><img src="https://marketplace-wine.vercel.app/assets/button_purple.svg" alt="Connect" /><span className="buttonText">Connect</span></p>
      ) : <p className="addressWallet">{account?.slice(0, 6) + '...' + account?.slice(-4)}</p>
      }
    </>
  );
};

export default ConnectWallet;
