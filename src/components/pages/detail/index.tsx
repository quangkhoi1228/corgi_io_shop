import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useStyles from './styles';
import BannerSpine from 'components/astoms/banner/BannerSpineDetail';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { Link } from 'react-router-dom';
type urlParams = {
  id: string,
};
const Detail: React.FC = () => {
  const url = `http://dev-coin.yangyinhouse.com`;
  const addressOwn = '0x7972d53c50aacb0e39ff98a5351f04631bffbeac';
  const { account } = useWeb3React();
  const classes = useStyles();
  const { id } = useParams<urlParams>();
  const [dataItem, setDataItem] = useState({
    attack: 0,
    class: '',
    defend: 0,
    hp: 0,
    id: 0,
    img: '',
    level: 0,
    name: '',
    price: 0,
    star: 0,
    updatedAt: ''
  });
  const history = useHistory();
  const itemCate = history.location.pathname.replace(id, '');
  
  const params =  {
    id: id
  }
  const handleRenderStar = () => {
    const arrayStar = [];
    for (let index = 0; index < dataItem.star; index++) {
      arrayStar.push(<span key={index}><img src="./assets/icon_rating_md.png" alt="star" /></span>)
    }
    return arrayStar;
  }
  
  let [infoClass, setInfoClass] = useState('');
  useEffect(() => {
    axios.get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`,{params})
    .then(function (response) {
      setDataItem(response.data.data[0]);
      if (typeof response.data.data[0].class !== 'undefined') {
        if (response.data.data[0].class ===  'Fire'){
          setInfoClass('red');
        }else if (response.data.data[0].class ===  'Wind'){
          setInfoClass('Green');
        }else if (response.data.data[0].class ===  'Water'){
          setInfoClass('blue_aura');
        } else if (response.data.data[0].class ===  'Earth'){
          setInfoClass('yellow');
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])
  
  
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.container}`}>
        <Link to="/">
          <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 10H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 19L1 10L10 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
        <div className={`${classes.detail}`}>
          <div className={`${classes.detLeft}`}>
            <p className={`${classes.detID}`}>ID: #{dataItem.id}</p>
            <div className={`${classes.detImage}`}>
              {/* <p><img src="./assets/wind_big.svg" alt="wind" /></p> */}
              <BannerSpine
              link={`https://github.com/quangkhoi1228/corgi_io_shop/blob/master/public/animation/${infoClass}/${infoClass}.json`}
              name="banner"
              ></BannerSpine>
              <p className={`${classes.detItem}`}><img src={url + dataItem.img} alt="item" /></p>
            </div>
          </div>
          <div className={`${classes.detRight}`}>
            <p className={`${classes.detText}`}>Owner: <a href={`https://bscscan.com/address/${addressOwn}`} target="_blank">{addressOwn.slice(0, 7) + '...' }</a></p>
            <p><img src="./assets/bg_line_large.png" alt="line" /></p>
            <p className={`${classes.detTitle}`}>Stats</p>
            <ul className={`${classes.detInfo}`}>
              <li>HP: {dataItem.hp}</li>
              <li>Attack: {dataItem.attack}</li>
              <li>Defend: {dataItem.defend}</li>
              <li>Level: {dataItem.level}</li>
              <li>Class: {dataItem.class}</li>
              <li className={`${classes.detRating}`}>
                Rarity:
                {(handleRenderStar())}
              </li>
            </ul>
            <p><img src="./assets/bg_line_large.png" alt="line" /></p>
            <p className={`${classes.detTitle}`}>Current price</p>
            <p className={`${classes.detPrice}`}>{dataItem.price} COR</p>
            <p className={`${classes.detButton}`}>
              <img src="./assets/button_green.svg" alt="Buy now" />
              <span>Buy now</span>
            </p>
          </div>
        </div>
        <div className={`${classes.trading}`}>
          <p className={`${classes.tradingTitle}`}>Trading history</p>
          <div className={`${classes.tradingTable}`}>
            <ul className={`${classes.traddingListLable}`}>
              <li>Time</li>
              <li>Account</li>
              <li>Price</li>
              <li>Type</li>
              <li>Action</li>
            </ul>
            <ul className={`${classes.traddingListContent}`}>
              <li>
                <span>{dataItem.updatedAt}</span>
                <span><a href={`https://bscscan.com/address/${addressOwn}`} target="_blank">{addressOwn.slice(0, 7) + '...' + addressOwn.slice(-5)}</a></span>
                <span>{dataItem.price} COR</span>
                <span>Market</span>
                <span>Sell</span>
              </li>
              {/* <li>
                <span>2021-08-21, 10:14:56 PM</span>
                <span><a href={`https://bscscan.com/address/${Address[randomIndexAddress01]}`} target="_blank">{Address[randomIndexAddress01].slice(0, 7) + '...' + Address[randomIndexAddress01].slice(-5)}</a></span>
                <span>1,400 COR</span>
                <span>Market</span>
                <span>Sell</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail