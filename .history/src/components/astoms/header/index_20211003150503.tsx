import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import ConnectWallet from '../connect/connectWallet';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <header>
      <div className={`${classes.root}`}>
        <div className={`${classes.container}`}>
          <p className={`${classes.logoMobile}`}><Link to="/"><img src="https://marketplace-wine.vercel.app/assets/logo.png" alt="logo" /></Link></p> 
          {/* <p className={`${classes.text}`}>Balance: 1000 Coin</p> */}
          <ConnectWallet></ConnectWallet>
        </div>
      </div>
      <p className={`${classes.logo}`}><Link to="/"><img src="https://marketplace-wine.vercel.app/assets/logo.png" alt="logo" /></Link></p>
    </header>
  )
}

export default Header