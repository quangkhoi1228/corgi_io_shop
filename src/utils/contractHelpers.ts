import { ethers } from "ethers";


import petAbi from "../config/abi/pet_abi.json";
import itemAbi from "../config/abi/item_abi.json";
import shopAbi from "../config/abi/shop_abi.json";
import { simpleRpcProvider } from "./providers";

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getShopContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(shopAbi, address, signer);
};

export const getItemContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(itemAbi, address, signer);
};

export const getPetContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(petAbi, address, signer);
};

// export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
//   return getContract(bep20Abi, address, signer);
// };

// export const getClaimAirdropContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
//   return getContract(claimAirdropAbi, address, signer);
// };

// export const getPrivateSaleContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
//   return getContract(privateSaleAbi, address, signer);
// };

// export const getPreSaleContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
//   return getContract(preSaleAbi, address, signer);
// };

// export const getFarmingContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
//   return getContract(farmingAbi, address, signer);
// };

// export const getLpToken = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
//   return getContract(lpTokenAbi, address, signer);
// };
