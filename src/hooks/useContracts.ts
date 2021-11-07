import { useMemo } from "react";

import { getShopContract, getItemContract, getPetContract, getBep20Contract } from "../utils/contractHelpers";

import useWeb3Provider from "./useWeb3Provider";

export const useShopContract = (address: string) => {
  const { library } = useWeb3Provider();
  // console.log("useERC20 => provider:", library.getSigner());
  return useMemo(() => getShopContract(address, library.getSigner ? library.getSigner() : null), [address, library]);
};
export const useItemContract = (address: string) => {
  const { library } = useWeb3Provider();
  // console.log("useERC20 => provider:", library.getSigner ? library.getSigner(): null);
  return useMemo(() => getItemContract(address, library.getSigner ? library.getSigner() : null), [address, library]);
};
export const usePetContract = (address: string) => {
  const { library } = useWeb3Provider();
  // console.log("useERC20 => provider:", library.getSigner ? library.getSigner(): null);
  return useMemo(() => getPetContract(address, library.getSigner ? library.getSigner() : null), [address, library]);
};
export const useERC20 = (address: string) => {
  const { library } = useWeb3Provider();
  // console.log("useERC20 => provider:", library.getSigner());
  return useMemo(() => getBep20Contract(address, library.getSigner ? library.getSigner() : null), [address, library]);
};

// export const usePrivateSale = (address: string) => {
//   const { library } = useWeb3Provider();
//   return useMemo(() => getPrivateSaleContract(address, library.getSigner()), [address, library]);
// };

// export const useClaimAirdrop = (address: string) => {
//   const { library } = useWeb3Provider();
//   return useMemo(() => getClaimAirdropContract(address, library.getSigner()), [address, library]);
// };

// export const usePreSale = (address: string) => {
//   const { library } = useWeb3Provider();
//   return useMemo(() => getPreSaleContract(address, library.getSigner()), [address, library]);
// };

// export const useFarming = (address: string) => {
//   const { library } = useWeb3Provider();
//   return useMemo(() => getFarmingContract(address, library.getSigner()), [address, library]);
// };

// export const useLpToken = (address: string) => {
//   const { library } = useWeb3Provider();
//   // console.log("useERC20 => provider:", library.getSigner());
//   return useMemo(() => getLpToken(address, library.getSigner()), [address, library]);
// };
