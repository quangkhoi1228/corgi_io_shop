import { useCallback } from "react";

import { Contract } from "ethers";

import { approved } from "../utils/callHelpers";

export const useApprove = (mainContract: Contract, useContract: Contract, maxLimit: string) => {
  const handleApprove = useCallback(async () => {
    try {
      const receipt: any = await approved(mainContract, useContract, maxLimit);
      return receipt.status;
    } catch (e) {
      return false;
    }
  }, [useContract, mainContract, maxLimit]);
  console.log("handleApprove: ", handleApprove);
  return { onApprove: handleApprove };
};
