export const AppConfig = {
  site_name: 'CORTOKEN',
  title: 'Corgi Token ',
  description: 'Welcome to Corgi Token',
  locale: 'en',
  telegram: 'https://t.me/CorgiGameOfficial',
  twitter: 'https://twitter.com/CorgiNFTGame',
  whitepaper:
    'https://drive.google.com/file/d/1o8Flb8wwyubITr4UKrgH39DH0Mwn1Y5C/view',
  faqs: 'https://corgi-nft-game.gitbook.io/corginft/',
  domain: 'https://dev-coin.yangyinhouse.com',
  domainCorgi: 'https://api.corginft.io',
  marketplace: 'https://market.corginft.io',
  pancake:
    'https://pancakeswap.finance/swap?outputCurrency=0x3581a7B7BE2eD2EDf98710910fD05b0e8545f1DB',
  maxLimit:
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  bnbLogo:
    'https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.svg',
  usdtLogo:
    'https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.svg',
  corgiUSDT: '0x9a43f37caf9da600d27dfc8261e61a882f1edcf2',
  corgiBNB: '0x699BF7Df6aD0B008BF135F7b7E4F90AFaA5C7adb',
  bnbudt: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
  farmingContract: '0x3e2e82f811C0d269Bea1284d5444d2bE5Be266eC',
  mainContract: '0x3581a7B7BE2eD2EDf98710910fD05b0e8545f1DB',
};

export const POOL = {
  '0': {
    poolName: 'COR',
    icon: '',
    multiplier: '20X',
  },
  '1': {
    poolName: 'COR-USDT',
    multiplier: '40X',
    addLiquidityLink:
      'https://pancakeswap.finance/add/0x3581a7B7BE2eD2EDf98710910fD05b0e8545f1DB/0x55d398326f99059fF775485246999027B3197955',
    pairInfo:
      'https://bscscan.com/address/0x9a43f37caf9da600d27dfc8261e61a882f1edcf2',
    viewContract:
      'https://bscscan.com/address/0x3e2e82f811c0d269bea1284d5444d2be5be266ec',
  },
  '2': {
    poolName: 'COR-BNB',
    multiplier: '40X',
    addLiquidityLink:
      'https://pancakeswap.finance/add/0x3581a7B7BE2eD2EDf98710910fD05b0e8545f1DB/BNB',
    pairInfo:
      'https://bscscan.com/address/0x699bf7df6ad0b008bf135f7b7e4f90afaa5c7adb',
    viewContract:
      'https://bscscan.com/address/0x3e2e82f811c0d269bea1284d5444d2be5be266ec',
  },
  '3': {
    poolName: 'COR-BUSD',
  },
};
