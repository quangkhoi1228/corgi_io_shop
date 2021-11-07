import random from 'lodash/random';

// testnet
const REACT_APP_NODE_1 = 'https://data-seed-prebsc-2-s1.binance.org:8545/';
const REACT_APP_NODE_2 = 'https://data-seed-prebsc-2-s2.binance.org:8545/';
const REACT_APP_NODE_3 = 'https://data-seed-prebsc-2-s3.binance.org:8545/';

// mainnet
// const REACT_APP_NODE_1 = 'https://bsc-dataseed.binance.org/';
// const REACT_APP_NODE_2 = 'https://bsc-dataseed1.defibit.io/';
// const REACT_APP_NODE_3 = 'https://bsc-dataseed1.ninicoin.io/';

// Array of available nodes to connect to
export const nodes = [REACT_APP_NODE_1, REACT_APP_NODE_2, REACT_APP_NODE_3];

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1);
  return nodes[randomIndex];
};

export default getNodeUrl;
