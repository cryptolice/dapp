import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Layout from "../../components/Layout";
import Head from "next/head";
import Header from "../../components/Header";
import Card from "../../components/Card";
import {getSecurityAddress, RiskDetail, useSecurityAddress} from "../../hooks/useSecurityAddress";
import {ChainId} from "../../utils/api";
import Result from "./Result";
import InputForm from "./InputForm";
import {useForm} from "react-hook-form";
import {useRouter} from 'next/router';
import web3 from 'web3'
import {useNetwork} from "wagmi";
import Typo from "../../components/Typo";
import ConnectFirst from "../../components/ConnectFirst";
import {toast} from "react-toastify";

const SearchAddressPage = () => {
  const [address, setAddress] = useState('');
  const [securityInfo, setSecurityInfo] = useState<any>(null)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const network = useNetwork();

  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      address: ''
    }
  });

  const externalAddressParam = useMemo(() => {
    if (!router.asPath.includes('?')) return undefined;

    const [, searchQueryStr] = router.asPath.split('?');
    const query = new URLSearchParams(searchQueryStr);
    const address = query.get('address') ?? '';
    return web3.utils.isAddress(address) ? address : undefined;
  }, [router]);


  const fetchSecurityAddress = useCallback(async (address: string) => {
    if (!network?.chain) return;

    setLoading(true);
    try {
      const result = await getSecurityAddress(network.chain.id, address);
      if (!result) return;
      const riskDetails: RiskDetail[] = result?.risk_details ? result.risk_details : [];
      const trustScore = result?.trust_score ?? Number.NaN;
      setSecurityInfo({
        trustScore,
        riskDetails,
      });
    } finally {
      setLoading(false);
    }
  }, [network])

  useEffect(() => {
    if (!externalAddressParam || !form) return;

    setAddress(externalAddressParam);
    form.setValue('address', externalAddressParam);
    fetchSecurityAddress(externalAddressParam);
  }, [form, externalAddressParam]);

  return (
    <Layout>
      <Head>
        <title>Search Address | Cryptolice</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>
      <main
        className={'flex flex-col justify-center items-center my-16'}
      >
        <Card className={'w-[600px] !py-12 !px-12'}>
          {securityInfo ? (
            <Result
              chainName={network.chain?.name ?? ''}
              address={address}
              score={securityInfo.trustScore}
              riskDetails={securityInfo.riskDetails}
              onTryAnother={() => {
                setAddress('');
                setSecurityInfo(null);
                form.reset();

                if (externalAddressParam) {
                  router.replace('/search-address')
                }
              }}
            />
          ) : (
            <div>
              <Typo.Title className={
                '!text-4xl'
              }>
                Search Address
              </Typo.Title>
              <Typo.Normal className={'mt-1'}>
                Type-in the address of smart contract to check its security
              </Typo.Normal>

              <ConnectFirst className={'mt-8'}>
                <div className={'mt-4'}>
                  <Typo.Normal className={'!text-slate-500'}>
                    Current Chain: {network.chain?.name}
                  </Typo.Normal>
                </div>
                <InputForm
                  className={'mt-4'}
                  form={form}
                  loading={loading}
                  onSubmit={async (data) => {
                    const chainId = String(network.chain?.id) as any
                    if (
                      chainId !== ChainId.BNB_MAINNET &&
                      chainId !== ChainId.BNB_TESTNET
                    ) {
                      toast.error('Sorry, this network is not supported yet')
                      return;
                    }
                    setAddress(data.address)
                    await fetchSecurityAddress(data.address)
                  }}
                />
              </ConnectFirst>
            </div>
          )}
        </Card>
      </main>
    </Layout>
  );
};

export default SearchAddressPage;