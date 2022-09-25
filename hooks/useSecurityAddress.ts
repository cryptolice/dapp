import useSWR from "swr";
import {addressSecurity, ChainId} from "../utils/api";

export function useSecurityAddress(chainId: ChainId, address: string) {
  const fetcher = async (_: string, chainId: ChainId, address: string) => {
    if (!chainId || !address) return;
    const rawData = await addressSecurity(chainId, address);
    if (rawData.status !== 'OK') throw new Error(JSON.stringify(rawData.error_data))
    return rawData.data;
  }
  const {data, error} = useSWR(['useSecurityAddress', chainId, address], fetcher)

  console.log('data', data)

  return {
    data,
    error,
    trustScore: data?.trust_score ?? Number.NaN,
    loading: !error && !data,
  }
}