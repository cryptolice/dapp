export enum ChainId {
  BNB_MAINNET = '56',
  BNB_TESTNET = '97'
}

// const chain_id: string = "56";
// const address: string = "0x312bc7eaaf93f1c60dc5afc115fccde161055fb0"
export async function addressSecurity(chainId: number | string, address: string) {
  const body = {"chain_id": String(chainId), "address": address};

  const response = await fetch('https://www.pipsr.cloud/api/v1/address-security', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  });
  const data = await response.json();
  console.log(data);
  return data;
}