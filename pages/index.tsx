import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Typo from '../components/Typo';
import Button from "../components/Button";
import Layout from "../components/Layout";
import {useRouter} from 'next/router'
import Card from '../components/Card';
import Image from 'next/image'
import GetAddrIntroPic from '../assets/how-to-copy-contract-addr.png'
import LogoPic from '../assets/logo.png'
import {useAccount} from 'wagmi';

const Home: NextPage = () => {
  const router = useRouter();
  const {address, isConnected} = useAccount()

  return (
    <Layout>
      <Head>
        <title>Cryptolice</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>

      <main className={'pb-32 flex flex-col items-center'}>
        <section className={'w-full h-[90vh] py-24 px-36 flex flex-col justify-center items-center'}>
          {/*<Typo.Title className={'!text-6xl'}>*/}
          {/*  CRYPTOLICE*/}
          {/*</Typo.Title>*/}
          <Image src={LogoPic} alt="logo"/>

          <Typo.Normal className={'!text-3xl text-center mt-4'}>
            We make Web3 a safer world
          </Typo.Normal>

          <div className={'flex justify-center items-center w-[400px] mt-16'}>
            <Button
              state={'primary'}
              onClick={() => {
                router.push('/search-address')
              }}
            >Search Address</Button>
            <Button
              className={'ml-4'}
              onClick={() => {
                router.push('/report-address')
              }}
            >Report Address</Button>
          </div>

          <Typo.Normal className={'!text-lg !text-slate-500 hover:border-b-2 cursor-pointer mt-8'}>
            DOWNLOAD OUR EXTENSION
          </Typo.Normal>
        </section>

        <section className={'w-[80%]'}>
          <Typo.Title className={'!text-4xl'}>
            How to find the address of smart contract?
          </Typo.Title>
          <Typo.Normal className={'mt-2'}>
            If you are not sure about a transaction, copy the contract address, and bring it to us
            for analyzing.
          </Typo.Normal>
          <Card className={'mt-8'}>
            <Image src={GetAddrIntroPic}></Image>
          </Card>
        </section>
      </main>
    </Layout>
  )
}

export default Home
