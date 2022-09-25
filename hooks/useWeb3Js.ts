import {useProvider} from 'wagmi'
import {useEffect, useRef} from "react";
import web3 from "web3";

export function useWeb3Js() {
  const provider = useProvider();
  const _web3 = useRef(null)

  // useEffect(() => {
  //   (async function () {
  //     const network = await provider.getNetwork()
  //     const web3Provider = new web3.providers.HttpProvider(network.chainId)
  //     const cryptolicBadgeContract = new web3.Contract(
  //       '',
  //       '0xc171D77FC466307Ee5dAF9F89cA5B3Ab5F0EE4b7');
  //
  //     cryptolicBadgeContract.methods.mint('0xbDa3BD5c07B29DD8934079063b0ADa945E24Fc58').send({
  //       from: '0xbDa3BD5c07B29DD8934079063b0ADa945E24Fc58'
  //     }).then((res: any) => {
  //       console.log(res);
  //     })
  //   })()
  //
  // })
}