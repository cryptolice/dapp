import {useContractRead} from "wagmi";
import {REPORT_CONTRACT_ABI} from "../abi/report";

export function useReportContractRead() {
  return useContractRead({
    addressOrName: '0xDa87F8F6c142a10aD51F7c909cBca33aAd46d8ED',
    contractInterface: REPORT_CONTRACT_ABI,
    functionName: 'get',
  })
}
