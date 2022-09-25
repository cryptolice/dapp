import useSWR from "swr";
import {addressSecurity, ChainId} from "../utils/api";

export interface RiskDetail {
  "name": string,
  "labels": string[],
  "value": string,
  "sources": string[]
}

export function useSecurityAddress(chainId: ChainId, address: string) {
  const fetcher = async (_: string, chainId: ChainId, address: string) => {
    if (!chainId || !address) return;
    const rawData = await addressSecurity(chainId, address);
    if (rawData.status !== 'OK') throw new Error(JSON.stringify(rawData.error_data))
    return rawData.data;
  }
  const {data, error} = useSWR(['useSecurityAddress', chainId, address], fetcher)

  const riskDetails: RiskDetail[] = data?.risk_details ? data.risk_details : [];

  return {
    data,
    error,
    trustScore: data?.trust_score ?? Number.NaN,
    riskDetails,
    loading: !error && !data,
  }
}

export async function getSecurityAddress(chainId: ChainId, address: string) {
  if (!chainId || !address) return null;
  const rawData = await addressSecurity(chainId, address);
  if (rawData.status !== 'OK') throw new Error(JSON.stringify(rawData.error_data))
  return rawData.data;
}