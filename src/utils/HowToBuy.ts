export const HowToBuyData = {
  title: 'How to Buy $COR?',
  steps: [
    {
      index: 1,
      title: 'Create a Wallet',
      description:
        'On Google Chrome, visit metamask.io to download the extension and set up a wallet. Android and iOS users can download the Trust Wallet app on your phone.',
      stepTitle: 'stepTitle1',
      stepDesc: 'stepDesc1',
    },
    {
      index: 2,
      title: 'Send $BNB to your BSC wallet',
      description:
        'Buy $BNB from Binance Exchange and transfer to your BSC wallet address.',
      stepTitle: 'stepTitle2',
      stepDesc: 'stepDesc2',
    },
    {
      index: 3,
      title: 'Swap $BNB to $COR',
      description:
        'Go to the DApps tab at the bottom, find PancakeSwap V2, click “Select a Currency”, enter the contract address in the search bar, and you should be able to find COR.',
      stepTitle: 'stepTitle3',
      stepDesc: 'stepDesc3',
    },
  ],
  contractAddress: '0x3581a7b7be2ed2edf98710910fd05b0e8545f1db',
  warning:
    'Before the Swap, click the gear and set the slippage to 1-5%, set the amount you want to buy and click the “Swap” button.',
  tips: {
    detail:
      'TIPs: You can also set the amount of $COR to be even. For example: 10 billion, 36 billion, 100 billion, etc to buy more easily.',
    warning:
      'If you are operating on the PC, please enter the PancakeSwapV2 official website and click “Connect Wallet” at the top right of the website.',
    website: 'https://exchange.pancakeswap.finance',
    url: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x8385cbd5fa13c3f50ab4b6e2049343cac9d4e548',
  },
};
