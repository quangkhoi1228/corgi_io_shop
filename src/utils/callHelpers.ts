import { Contract } from "ethers";

export const approved = async (mainContract: Contract, useContract: Contract, maxLimit: string) => {
  let tx: any;
  try {
    tx = await mainContract.approve(useContract.address, maxLimit);
  } catch (error) {
    console.log("call helper: ", error);
  }
  console.log("call helper tx: ", tx);
  return tx.wait();
};
