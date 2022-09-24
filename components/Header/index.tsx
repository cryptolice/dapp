import React from 'react';
import Typo from '../Typo';
import Link from "next/link";
import {Extendable} from "../../types";

const Nav = (props: Extendable) => {
  return (
    <nav className={props.className}>
      <ul className={'flex items-center'}>
        <li className={'mx-3'}><Link href={'/'}>SEARCH</Link></li>
        <li className={'mx-3'}><Link href={'/'}>REPORT</Link></li>
        <li className={'mx-3'}><Link href={'/'}>GUIDE</Link></li>
        <li className={'mx-3'}><Link href={'/'}>FAQ</Link></li>
        <li className={'mx-3'}><Link href={'/'}>ABOUT</Link></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header className={'py-4 px-2 flex items-center'}>
      <Typo.Title className={'!text-2xl'}>CRYPTOLICE</Typo.Title>
      <Nav className={'ml-8'} />
      <div className={'ml-auto'}>
        Connect Wallet
      </div>
    </header>
  );
};

export default Header;