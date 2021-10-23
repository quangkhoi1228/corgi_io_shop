import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./styles";
import ConnectWallet from "../connect/connectWallet";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "../../../style/style.css";
const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <header>
      <div className="header-root">
        <div className="header-container">
          <p className="logoMobile">
            <NavLink to="/">
              <img src="/assets/logo.png" alt="logo" />
            </NavLink>
          </p>
          <div className="header-menu">
            <NavLink to="/" activeClassName="is-active" >SHOP</NavLink>
            <NavLink to="/inventory">INVENTORY</NavLink>
            <NavLink to="/battle">BATTLE</NavLink>
          </div>
          <ConnectWallet></ConnectWallet>
        </div>
        <div className="header-menu is-mobile">
          <NavLink to="/">SHOP</NavLink>
          <NavLink to="/inventory">INVENTORY</NavLink>
          <NavLink to="/battle">BATTLE</NavLink>
        </div>
      </div>
      {/* <p className={`${classes.logo}`}><NavLink to="/"><img src="https://marketplace-wine.vercel.app/assets/logo.png" alt="logo" /></NavLink></p> */}
    </header>
  );
};

export default Header;
