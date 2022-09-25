import {useContractWrite, usePrepareContractWrite} from "wagmi";
import {REPORT_CONTRACT_ABI} from "../abi/report";
import {ChainId} from "../utils/api";

export function useReportContractWrite() {
  const {config} = usePrepareContractWrite({
    // enabled: false,
    addressOrName: '0xDa87F8F6c142a10aD51F7c909cBca33aAd46d8ED',
    contractInterface: REPORT_CONTRACT_ABI,
    functionName: 'requestForDemo',
    args: [
      ChainId.BNB_MAINNET,
      '0x9bd547446ea13c0c13df2c1885e1f5b019a77441'
    ]
  });
  return useContractWrite(config)
}
