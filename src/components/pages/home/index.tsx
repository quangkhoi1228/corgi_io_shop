import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { Slider } from "@material-ui/core";
import { useParams } from "react-router";
import axios from "axios";
import BannerSpineEgg from "components/astoms/banner/BannerSpineEgg";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { useERC20, useShopContract } from "../../../hooks/useContracts";
import { Web3Provider } from "@ethersproject/providers";
import { useApprove } from "../../../hooks/useApprove";
import { AppConfig } from "utils/AppConfig";
type urlParams = {
  id: string;
};

type IProps = {
  children: ReactNode;
};

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const Home: React.FC = () => {
  const addressOwn = "0x7972d53c50aacb0e39ff98a5351f04631bffbeac";
  const url = `http://dev-coin.yangyinhouse.com`;
  const addressShop = "0xce72595E882C7FeeeDBB6e4ac521807fB7E61B3c";
  const addressItem = "0xe0D509c9459F17EC95e90CBcc65f81D43F3A5b8a";
  const addressPet = "0xBE9aF93062e414E5c11c62586F2Fc84Fb7783047";
  const addressCor = "0xb914d049ae092b193ad9d728c8d80bf73b5292b0";

  const { account } = useWeb3React();

  const shopContract = useShopContract(addressShop);

  const classes = useStyles();
  const { id } = useParams<urlParams>();
  const [pagi, setPagi] = useState(id);
  const [short, setShort] = useState({
    shortBy: "",
    orderBy: "",
  });
  const [itemCate, setItemCate] = useState("/pets/");
  const [filterRange, setFilterRange] = useState<number[]>([3000, 6000]);

  const [filterParams, setFilterParams] = useState({
    id: "",
    class: "",
    star: "",
    min_price: "",
    max_price: "",
  });
  const [dataItem, setDataItem] = useState({
    data: [],
    meta: {
      count: 0,
      page: 0,
      size: 0,
      totalPage: 0,
    },
  });
  const [dataSingleEggItem, setDataSingleEggItem] = useState(["Fire", "Wind", "Earth", "Water"]);
  const [dataComboEggItem, setDataComboEggItem] = useState([3, 5, 10]);
  const [dataComboItemItem, setDataComboItemItem] = useState([1, 5, 10]);

  const params = {
    size: 12,
    page: pagi,
    sort_by: short.shortBy,
    order_by: short.orderBy,
    id: filterParams.id !== "" ? parseInt(filterParams.id) : "",
    class: filterParams.class,
    star: filterParams.star !== "" ? parseInt(filterParams.star) : "",
    min_price: filterParams.min_price !== "" ? parseInt(filterParams.min_price) : "",
    max_price: filterParams.max_price !== "" ? parseInt(filterParams.max_price) : "",
  };
  const handleChangeFilterRange = (event: any, newValue: number | number[]) => {
    setFilterRange(newValue as number[]);
    setFilterParams({
      ...filterParams,
      min_price: filterRange[0].toString(),
      max_price: filterRange[1].toString(),
    });
  };
  const handleRenderStar = (el: number) => {
    const arrayStar = [];
    for (let index = 0; index < el; index++) {
      arrayStar.push(
        <li key={index}>
          <img src="./assets/icon_rating_md.png" alt="star" />
        </li>
      );
    }
    return arrayStar;
  };
  const handleRenderPagination = (el: number) => {
    const arrayPagi = [];
    for (let index = 0; index < el; index++) {
      arrayPagi.push(
        <li
          key={index}
          onClick={handleSetPagi}
          className={`${
            typeof pagi !== "undefined" ? (parseInt(pagi) === index ? "current" : "") : index === 0 ? "current" : ""
          } pagiItem`}
        >
          {index + 1}
        </li>
      );
    }
    return arrayPagi;
  };
  console.log(pagi);

  const handleSetPagi = (event: React.MouseEvent) => {
    if (event.currentTarget.childNodes[0].textContent !== null) {
      setPagi((parseInt(event.currentTarget.childNodes[0].textContent) - 1).toString());
    }
  };
  const handleRenderItem = (el: any) => {
    let infoClass = "";
    if (typeof el.class !== "undefined") {
      if (el.class === "Fire") {
        infoClass = "red";
      } else if (el.class === "Wind") {
        infoClass = "Green";
      } else if (el.class === "Water") {
        infoClass = "blue_aura";
      } else if (el.class === "Earth") {
        infoClass = "yellow";
      }
    }

    return (
      <div className={`${classes.listItemInfor}`} key={el}>
        <Link to={`${itemCate}${el.id}`} className="detail"></Link>
        <p className={`${classes.itemBackGround}`}>
          <img src="./assets/bg_item.png" alt="background item" />
        </p>
        <div className={`${classes.itemContent}`}>
          <ul className={`${classes.itemClassAndLevel}`}>
            {typeof el.class !== "undefined" ? (
              <li className={`${classes.itemClass}`}>
                <img src={`./assets/${el.class.toLowerCase()}.png`} alt={el.class.toLowerCase()} />
              </li>
            ) : (
              ""
            )}
            {el.level ? (
              <li className={`${classes.itemlevel}`}>
                <img src="./assets/icon_level.png" alt="lever" />
                <span>{el.level}</span>
              </li>
            ) : (
              ""
            )}
          </ul>
          <p className={`${classes.itemID}`}>{el.id}</p>
          <div className={`${classes.itemFocusItem}`}>
            {typeof el.class !== "undefined" ? (
              <BannerSpineEgg
                link={`https://github.com/quangkhoi1228/corgi_io_shop/blob/master/public/animation/${infoClass}/${infoClass}.json`}
                name="banner"
              ></BannerSpineEgg>
            ) : (
              // <p className={`${classes.itemCricle}`}><img src={`./assets/circle_${el.class.toLowerCase()}.png`} alt={`${el.class.toLowerCase()} cricle`} /></p>
              <p>
                <img src={`./assets/circle_under.png`} alt={`cricle`} />
              </p>
            )}

            <p className={`${classes.itemImage}`}>
              <img src={url + el.img} alt="item" />
            </p>
          </div>
          <div className={`${classes.itemDescription} ${typeof el.class === "undefined" ? "noclass" : ""}`}>
            <ul className={`${classes.itemDesStar}`}>{handleRenderStar(el.star)}</ul>
            <p className={`${classes.itemDesPrice}`}>
              {el.price}
              <span>COR</span>
            </p>
            <p className={`${classes.itemDesName}`}>
              Owner:
              <a href="https://bscscan.com/address/0x7972d53c50aacb0e39ff98a5351f04631bffbeac" target="_blank">
                {addressOwn.slice(0, 7) + "..."}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const handleRenderSingleEggItem = (el: any) => {
    let infoClass = "";
    if (typeof el !== "undefined") {
      infoClass = el.toLowerCase();
    }

    let mappingClass: { [key: string]: { [key: string]: string } } = {
      fire: {
        folder: "Fire",
        name: "Fire",
      },
      wind: {
        folder: "Air",
        name: "Air",
      },
      earth: {
        folder: "rock",
        name: "Rock",
      },
      water: {
        folder: "water",
        name: "water",
      },
    };
    var animationFolder = mappingClass[infoClass]["folder"];

    var animationName = mappingClass[infoClass]["name"];

    const onClick = function () {
      handleBuySingleEggOnClick(el);
    };

    return (
      <div className="list-item egg-item" key={el}>
        <div className="egg-content">
          <img
            className={`egg-background is-invisible is-${infoClass}`}
            src={`./assets/egg-background-${infoClass}.png`}
            alt="egg-background"
          />
          <img className="egg-counter" src="./assets/egg-counter.png" alt="egg-counter" />
          <BannerSpineEgg
            link={`./animation/egg_animation/${animationFolder}/${animationName}.json`}
            name="banner"
          ></BannerSpineEgg>
          <div className="shop-price">100 COR</div>
          <p className="button shop-buy-button" onClick={onClick}>
            <img src="./assets/shop-buy-background-yellow.png" alt="button" />
            <span>BUY</span>
          </p>
        </div>
      </div>
    );
  };

  const handleRenderComboEggItem = (el: any) => {
    let combo = el;

    let onClick = function () {
      handleBuyComboEggOnClick(el);
    };
    return (
      <div className="list-item egg-item is-combo" key={el}>
        <div className="egg-content">
          <img className="egg-background " src={`./assets/combo-egg-${combo}.png`} alt="egg-background" />
          <p className="egg-combo-description">{combo} Eggs (random)</p>
          <div className="shop-price">100 COR</div>
          <p className="button shop-buy-button" onClick={onClick}>
            <img src="./assets/shop-buy-background-yellow.png" alt="button" />
            <span>BUY</span>
          </p>
        </div>
      </div>
    );
  };

  const handleRenderComboItemItem = (el: any) => {
    let combo = el;
    let onClick = function () {
      handleBuyComboItemOnClick(el);
    };
    return (
      <div className="list-item item-item is-combo" key={el}>
        <Link to={`${itemCate}${el.id}`} className="detail"></Link>
        <div className="item-content">
          <img className="item-background " src={`./assets/combo-item-${combo}.png`} alt="item-background" />
          <p className="item-combo-description">{combo} Eggs (random)</p>
          <div className="shop-price">100 COR</div>
          <p className="button shop-buy-button" onClick={onClick}>
            <img src="./assets/shop-buy-background-yellow.png" alt="button" />
            <span>BUY</span>
          </p>
        </div>
      </div>
    );
  };

  const handleBuySingleEggOnClick = (el: any) => {
    // axios
    //   .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
    //   .then(function (response) {
    //     setDataItem(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    console.log(el);
    alert(`buy single ${el} egg`);
  };

  const handleBuyComboEggOnClick = (el: any) => {
    // axios
    //   .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
    //   .then(function (response) {
    //     setDataItem(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    console.log(el);
    alert(`buy combo ${el} egg`);
  };

  const handleBuyComboItemOnClick = (el: any) => {
    // axios
    //   .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
    //   .then(function (response) {
    //     setDataItem(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    console.log(el);
    alert(`buy combo ${el} item`);
  };

  const handleFilterButtonOnClick = (event: React.MouseEvent) => {
    axios
      .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
      .then(function (response) {
        setDataItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
      .then(function (response) {
        // console.log(response.data);
        setDataItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
      .then(function (response) {
        setDataItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [pagi]);

  useEffect(() => {
    axios
      .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
      .then(function (response) {
        // console.log(response.data);
        setDataItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [itemCate]);

  useEffect(() => {
    axios
      .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
      .then(function (response) {
        setDataItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [short]);
  // useEffect(() => {
  //   console.log(filterParams);
  // }, [filterParams])
  const corContract = useERC20(addressCor);
  const { onApprove } = useApprove(corContract, shopContract, AppConfig.maxLimit);

  const handleApprove = useCallback(async () => {
    try {
      const result = await onApprove();
      console.log("result:", result);
      if (result === 1) {
        // setIsAllowance(true);
        // toast.success("Approve Success");
      } else {
        // toast.error("Approve false");
      }
      // setRequestedApproval(false);
    } catch (e) {
      // console.log(e)
      // toast.error(`Approve false: ${e} `);
    }
  }, [onApprove]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <button className="button" onClick={handleApprove}>
        Button
      </button>
      <div className={`${classes.root}`}>
        <div className={`${classes.container}`}>
          <section className="single-egg-section">
            <p className="section-title">Eggs</p>
            <div className={`${classes.listItem} list egg-list`}>
              {dataSingleEggItem.map((el: any) => handleRenderSingleEggItem(el))}
            </div>
          </section>
          <section className="combo-egg-section">
            <div className={`${classes.listItem} list egg-list`}>
              {dataComboEggItem.map((el: any) => handleRenderComboEggItem(el))}
            </div>
          </section>
          <section className="items-section">
            <p className="section-title">
              Items<span>random</span>
            </p>
            <section className="combo-item-section">
              <div className={`${classes.listItem} list item-list`}>
                {dataComboItemItem.map((el: any) => handleRenderComboItemItem(el))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </Web3ReactProvider>
  );
};

export default Home;
