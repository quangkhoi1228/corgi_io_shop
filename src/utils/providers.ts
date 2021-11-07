import { ethers } from 'ethers';

import getRpcUrl from './getRpcUrl';

const RPC_URL = getRpcUrl();

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL);

// export const archiveRpcProvider = new ethers.providers.JsonRpcProvider(ARCHIVED_NODE)
