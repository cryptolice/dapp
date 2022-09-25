import React from 'react';
import Button from '../Button';
import Typo from '../Typo';
import {Extendable} from "../../types";
import classnames from "classnames";
import {useConnectModal} from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";

const ConnectFirst = (props: Extendable) => {
  const {openConnectModal} = useConnectModal();
  const {isConnected} = useAccount()

  if (isConnected) return props.children as JSX.Element;
  return (
    <div className={classnames('flex flex-col items-center', props.className)}>
      <Button
        className={'!w-64'}
        onClick={() => {
          if (!openConnectModal) return;
          openConnectModal()
        }}>Connect Wallet</Button>
      <Typo.Hints className={'mt-2'}>To use our service, you need to connect your wallet first.</Typo.Hints>
    </div>
  );
};

export default ConnectFirst;