import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { Slider } from "@material-ui/core";
import { useParams } from "react-router";
import axios from "axios";
import BannerSpine from "components/astoms/banner/BannerSpine";
type urlParams = {
  id: string;
};
const Inventory: React.FC = () => {
  const addressOwn = "0x7972d53c50aacb0e39ff98a5351f04631bffbeac";
  const url = `http://dev-coin.yangyinhouse.com`;
  const classes = useStyles();
  const { id } = useParams<urlParams>();
  const [pagi, setPagi] = useState(id);
  const [short, setShort] = useState({
    shortBy: "",
    orderBy: "",
  });
  const [itemCate, setItemCate] = useState("/items/");
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
  const [dataSingleEggItem, setDataSingleEggItem] = useState([
    "Fire_1",
    "Wind_1",
    "Earth_1",
    "Water_1",
    "Fire_2",
    "Wind_2",
    "Wind_3",
    "Earth_2",
    "Wind_4",
    "Earth_3",
    "Wind_5",
    "Earth_4",
  ]);
  const [dataComboEggItem, setDataComboEggItem] = useState([3, 5, 10]);
  const [dataComboItemItem, setDataComboItemItem] = useState([1, 5, 10]);
  const [tabItem, setTabItem] = useState("pets");
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

  const handleChangeTab = (event: any) => {
    var element = event.target.closest(".button");
    setTabItem(element.dataset.tab);
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
          <img src="https://marketplace-wine.vercel.app/assets/icon_rating_md.png" alt="star" />
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
      <div className={`${classes.listItemInfor} item-item`} key={el.id}>
        {/* <Link to={`${itemCate}${el.id}`} className="detail"></Link> */}
        <p className={`${classes.itemBackGround}`}>
          <img src="https://marketplace-wine.vercel.app/assets/bg_item.png" alt="background item" />
        </p>
        <div className={`${classes.itemContent}`}>
          <ul className={`${classes.itemClassAndLevel}`}>
            {typeof el.class !== "undefined" ? (
              <li className={`${classes.itemClass}`}>
                <img
                  src={`https://marketplace-wine.vercel.app/assets/${el.class.toLowerCase()}.png`}
                  alt={el.class.toLowerCase()}
                />
              </li>
            ) : (
              ""
            )}
            {el.level ? (
              <li className={`${classes.itemlevel}`}>
                <img src="https://marketplace-wine.vercel.app/assets/icon_level.png" alt="lever" />
                <span>{el.level}</span>
              </li>
            ) : (
              ""
            )}
          </ul>
          <p className={`${classes.itemID}`}>{el.id}</p>
          <div className={`${classes.itemFocusItem}`}>
            {typeof el.class !== "undefined" ? (
              <BannerSpine
                link={`https://marketplace-wine.vercel.app/animation/${infoClass}/${infoClass}.json`}
                name="banner"
              ></BannerSpine>
            ) : (
              // <p className={`${classes.itemCricle}`}><img src={`https://marketplace-wine.vercel.app/assets/circle_${el.class.toLowerCase()}.png`} alt={`${el.class.toLowerCase()} cricle`} /></p>
              <p>
                <img src={`https://marketplace-wine.vercel.app/assets/circle_under.png`} alt={`cricle`} />
              </p>
            )}

            <p className={`${classes.itemImage}`}>
              <img src={url + el.img} alt="item" />
            </p>
          </div>
          <div className={`${classes.itemDescription} ${typeof el.class === "undefined" ? "noclass" : ""}`}>
            <ul className={`${classes.itemDesStar}`}>{handleRenderStar(el.star)}</ul>
            <div className="item-attribute-description">
              <div className="attribute-left">HP: 10</div>
              <div className="attribute-right">Defend: 20</div>
            </div>
            <div className="item-attribute-description">
              <div className="attribute-left">Attack: 10</div>
              <div className="attribute-right">Level: 10</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleRenderSingleEggItem = (el: any) => {
    let infoClass = "";
    if (typeof el !== "undefined") {
      infoClass = el.split("_")[0].toLowerCase();
    }

    const onClick = function () {
      handleHatchSingleEggOnClick(el);
    };

    let hatch = infoClass === "water";

    return (
      <div className="list-item egg-item" key={el}>
        <div className="egg-content">
          <img
            className={`egg-background  is-${infoClass}`}
            src={`./assets/egg-background-${infoClass}.png`}
            alt="egg-background"
          />
          <div className={`hatch-container ${hatch ? "" : "is-hidden"}`}>
            <p className="button hatch-button" onClick={onClick}>
              <img src="./assets/shop-buy-background-yellow.png" alt="button" />
              <span>HATCH NOW</span>
            </p>
          </div>
          <img className="egg-counter" src="./assets/egg-counter.png" alt="egg-counter" />
          {/* <div className="shop-price">100 COR</div>
          <p className="button shop-buy-button" onClick={onClick}>
            <img src="./assets/shop-buy-background-yellow.png" alt="button" />
            <span>BUY</span>
          </p> */}
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

  const handleHatchSingleEggOnClick = (el: any) => {
    // axios
    //   .get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`, { params })
    //   .then(function (response) {
    //     setDataItem(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    console.log(el);
    alert(`hatch single ${el} egg`);
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

  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.container} `}>
        <section className="tab-section">
          <a className="button" data-tab="pets" onClick={handleChangeTab}>
            <img
              src={`/assets/button-background-${tabItem === "pets" ? "blue" : "purple"}.png`}
              alt="button-background"
            />
            <span>Pets</span>{" "}
          </a>
          <a className="button" data-tab="items" onClick={handleChangeTab}>
            <img
              src={`/assets/button-background-${tabItem === "items" ? "blue" : "purple"}.png`}
              alt="button-background"
            />
            <span>Items</span>
          </a>
        </section>
        <section className={`single-egg-section  ${tabItem === "pets" ? "" : "is-hidden"}`}>
          <p className="section-title">Eggs</p>
          <div className={`${classes.listItem} list egg-list is-large`}>
            {dataSingleEggItem.map((el: any) => handleRenderSingleEggItem(el))}
          </div>
        </section>

        <section className={`items-section ${tabItem === "items" ? "" : "is-hidden"}`}>
          <p className="section-title">Items</p>
          <div className={`${classes.listItem} list item-list is-large`}>
            {dataItem.data.map((el: any) => handleRenderItem(el))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Inventory;
