import React from 'react';
import Typo from '../Typo';
import Link from "next/link";
import {Extendable} from "../../types";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import LogoPic from "../../assets/logo.png";
import Image from "next/image";

const Nav = (props: Extendable) => {
  return (
    <nav className={props.className}>
      <ul className={'flex items-center'}>
        <li className={'mx-3'}><Link href={'/search-address'}>SEARCH</Link></li>
        <li className={'mx-3'}><Link href={'/report-address'}>REPORT</Link></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header className={'py-4 px-2 flex items-center'}>
      <Link href={'/'}>
        <div className={'!w-[140px] cursor-pointer'}>
          <Image src={LogoPic} alt="logo"/>
        </div>
      </Link>
      <Nav className={'ml-8'}/>
      <div className={'ml-auto'}>
        <ConnectButton/>
      </div>
    </header>
  );
};

export default Header;