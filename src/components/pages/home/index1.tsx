import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { Slider } from '@material-ui/core';
import { useParams } from 'react-router';
import axios from 'axios';
import BannerSpine from 'components/astoms/banner/BannerSpine';
type urlParams = {
  id: string,
};
const Home: React.FC = () => {
  const addressOwn = '0x7972d53c50aacb0e39ff98a5351f04631bffbeac';
  const url = `http://dev-coin.yangyinhouse.com`;
  const classes = useStyles();
  const { id } = useParams<urlParams>();
  const [pagi, setPagi] = useState(id);
  const [short, setShort] = useState({
    shortBy: '',
    orderBy: '',
  })
  const [itemCate, setItemCate] = useState('/pets/');
  const [filterRange, setFilterRange] = useState<number[]>([3000, 6000]);
 
  const [filterParams, setFilterParams] = useState({
    id: '',
    class: '',
    star: '',
    min_price: '',
    max_price: '',
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
  const params =  {
    size: 12,
    page: pagi,
    sort_by: short.shortBy,
    order_by: short.orderBy,
    id: filterParams.id !== '' ? parseInt(filterParams.id) : '',
    class: filterParams.class,
    star: filterParams.star !== '' ? parseInt(filterParams.star) : '',
    min_price: filterParams.min_price !== '' ? parseInt(filterParams.min_price) : '',
    max_price: filterParams.max_price !== '' ? parseInt(filterParams.max_price) : '',
  }
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
      arrayStar.push(<li key={index}><img src="https://marketplace-wine.vercel.app/assets/icon_rating_md.png" alt="star" /></li>)
    }
    return arrayStar;
  }
  const handleRenderPagination = (el: number) => {
    const arrayPagi = [];
    for (let index = 0; index < el; index++) {
      arrayPagi.push(<li key={index }onClick={handleSetPagi} className={`${typeof pagi !== 'undefined' ? (parseInt(pagi) === index ? 'current' : '') : (index === 0 ? 'current' : '')} pagiItem`}>{index + 1}</li>)
    }
    return arrayPagi;
  }
  console.log(pagi);
  
  const handleSetPagi = (event: React.MouseEvent) => {
    if(event.currentTarget.childNodes[0].textContent !== null) {
      setPagi((parseInt(event.currentTarget.childNodes[0].textContent) - 1).toString());
    }
  }
  const handleRenderItem = (el: any) => {
    let infoClass = '';
    if (typeof el.class !== 'undefined') {
      if (el.class ===  'Fire'){
        infoClass = 'red';
      }else if (el.class ===  'Wind'){
        infoClass = 'Green';
      }else if (el.class ===  'Water'){
        infoClass = 'blue_aura';
      } else if (el.class ===  'Earth'){
        infoClass = 'yellow';
      }
    }
    
    return (
      <div className={`${classes.listItemInfor}`} key={el.id}>
        <Link to={`${itemCate}${el.id}`} className="detail"></Link>
        <p className={`${classes.itemBackGround}`}><img src="https://marketplace-wine.vercel.app/assets/bg_item.png" alt="background item" /></p>
        <div className={`${classes.itemContent}`}>
          <ul className={`${classes.itemClassAndLevel}`}>
            {typeof el.class !== 'undefined' ? <li className={`${classes.itemClass}`}><img src={`https://marketplace-wine.vercel.app/assets/${el.class.toLowerCase()}.png`} alt={el.class.toLowerCase()} /></li> : ''}
            {el.level ? <li className={`${classes.itemlevel}`}><img src="https://marketplace-wine.vercel.app/assets/icon_level.png" alt="lever" /><span>{el.level}</span></li> : ''}
          </ul>
          <p className={`${classes.itemID}`}>{el.id}</p>
          <div className={`${classes.itemFocusItem}`}>
            {
              typeof el.class !== 'undefined' ? 
              <BannerSpine
                link={`https://marketplace-wine.vercel.app/animation/${infoClass}/${infoClass}.json`}
                name="banner"
              ></BannerSpine>
              // <p className={`${classes.itemCricle}`}><img src={`https://marketplace-wine.vercel.app/assets/circle_${el.class.toLowerCase()}.png`} alt={`${el.class.toLowerCase()} cricle`} /></p> 
              : 
              <p><img src={`https://marketplace-wine.vercel.app/assets/circle_under.png`} alt={`cricle`} /></p> 
            }
            
            <p className={`${classes.itemImage}`}><img src={url + el.img} alt="item" /></p>
          </div>
          <div className={`${classes.itemDescription} ${typeof el.class === 'undefined' ? 'noclass' : ''}`}>
            <ul className={`${classes.itemDesStar}`}>
              {(handleRenderStar(el.star))}
            </ul>
            <p className={`${classes.itemDesPrice}`}>{el.price}<span>COR</span></p>
            <p className={`${classes.itemDesName}`}>Owner:<a href="https://bscscan.com/address/0x7972d53c50aacb0e39ff98a5351f04631bffbeac" target="_blank">{addressOwn.slice(0, 7) + '...'}</a></p>
          </div>
        </div>
      </div>
    )
  }

  const handleFilterButtonOnClick = (event: React.MouseEvent) => {
    axios.get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`,{params})
    .then(function (response) {
      setDataItem(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  useEffect(() => {
    axios.get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`,{params})
    .then(function (response) {
      // console.log(response.data);
      setDataItem(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    axios.get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`,{params})
    .then(function (response) {
      setDataItem(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [pagi])

  useEffect(() => {
    axios.get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`,{params})
    .then(function (response) {
      // console.log(response.data);
      setDataItem(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [itemCate])

  useEffect(() => {
    axios.get(`https://dev-coin.yangyinhouse.com/api/v1/market${itemCate}`,{params})
    .then(function (response) {
      setDataItem(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [short])
  // useEffect(() => {
  //   console.log(filterParams);
  // }, [filterParams])
  
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.container}`}>
        <div className={`${classes.tableInfo}`}>
          <div className={`${classes.tableInforItem}`}>
            <p className={`${classes.tableItemTitle}`}>Last 24H</p>
            <ul className={`${classes.tableItemContent}`}>
              <li>Total sale:<span>250</span></li>
              <li>Total volume:<span>37500</span></li>
              <li>Average price:<span>200</span></li>
            </ul>
          </div>
          <div className={`${classes.tableInforItem}`}>
            <p className={`${classes.tableItemTitle}`}>7 DAYS</p>
            <ul className={`${classes.tableItemContent}`}>
              <li>Total sale:<span>2015</span></li>
              <li>Total volume:<span>392,925</span></li>
              <li>Average price:<span>195</span></li>
            </ul>
          </div>
          <div className={`${classes.tableInforItem}`}>
            <p className={`${classes.tableItemTitle}`}>30 DAYS</p>
            <ul className={`${classes.tableItemContent}`}>
              <li>Total sale:<span>8000</span></li>
              <li>Total volume:<span>1720000</span></li>
              <li>Average price:<span>215</span></li>
            </ul>
          </div>
        </div>
        <div className={`${classes.listButton}`}>
          <ul className={`${classes.listCategory}`}>
            <li onClick={() => {
              setItemCate('/pets/')
              setPagi('0')
              setFilterParams({
                id: '',
                class: '',
                star: '',
                min_price: '',
                max_price: '',
              })
            }}><img src={`https://marketplace-wine.vercel.app/assets/button_${itemCate === '/pets/' ? 'blue' : 'purple'}_strong.svg`} alt="Character" /><span>Character</span></li>
            <li onClick={() => {
              setItemCate('/items/')
              setPagi('0')
              setFilterParams({
                id: '',
                class: '',
                star: '',
                min_price: '',
                max_price: '',
              })
            }}><img src={`https://marketplace-wine.vercel.app/assets/button_${itemCate === '/items/' ? 'blue' : 'purple'}_strong.svg`} alt="Item" /><span>Item</span></li>
            <li onClick={() => {
              setItemCate('/lands/')
              setPagi('0')
              setFilterParams({
                id: '',
                class: '',
                star: '',
                min_price: '',
                max_price: '',
              })
            }}><img src={`https://marketplace-wine.vercel.app/assets/button_${itemCate === '/lands/' ? 'blue' : 'purple'}_strong.svg`} alt="Land" /><span>Land</span></li>
            <li onClick={() => {
              setItemCate('/builders/')
              setPagi('0')
              setFilterParams({
                id: '',
                class: '',
                star: '',
                min_price: '',
                max_price: '',
              })
            }}><img src={`https://marketplace-wine.vercel.app/assets/button_${itemCate === '/builders/' ? 'blue' : 'purple'}_strong.svg`} alt="Building" /><span>Building</span></li>
          </ul>
          <ul className={`${classes.listSort}`}>
            <li>{`${dataItem.meta.count} ${itemCate === '/pets/' ? 'Chars' : itemCate === '/items/' ? 'Items' : itemCate === '/lands/' ? 'Lands' : itemCate === '/builders/' ? 'Builders' : ''}`}</li>
            <li onClick={() => setShort({shortBy: 'price', orderBy: short.orderBy === '' ? 'ASC' : short.orderBy === 'DESC' ? 'ASC' : 'DESC'})}>
              Sort Price
              {
                short.orderBy === 'ASC' ? 
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07501 11.2181L19.925 11.2181C21.53 11.2181 22.3325 9.49822 21.2 8.49549L12.275 0.593143C11.57 -0.0310754 10.43 -0.0310756 9.73251 0.593142L0.800007 8.49548C-0.332493 9.49822 0.470007 11.2181 2.07501 11.2181Z" fill="#64368F"/>
                </svg>
                : 
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.925 0.125H2.07499C0.469994 0.125 -0.332506 1.84492 0.799994 2.84766L9.72499 10.75C10.43 11.3742 11.57 11.3742 12.2675 10.75L21.2 2.84766C22.3325 1.84492 21.53 0.125 19.925 0.125Z" fill="#64368F"/>
                </svg>
              }
              
            </li>
          </ul>
        </div>
        <div className={`${classes.content}`}>
          <div className={`${classes.contentLeft}`}>
              <div className={`${classes.listItem}`}>
                {dataItem.data.map((el: any) => handleRenderItem(el))}
              </div>
            { dataItem.meta.totalPage - 1  >= (typeof pagi === 'undefined' ? 0 : parseInt(pagi)) ? (
              <ul className={`${classes.pagination}`}>
                <li className="pagiItem" onClick={(event) => setPagi('0')}>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13.5416L1 7.29163L7 1.04163" stroke="#0D85B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 13.5416L7 7.29163L13 1.04163" stroke="#0D85B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </li>
                <li className="pagiItem"
                  onClick={(event) => {
                    if(parseInt(pagi) > 0) {
                      setPagi((parseInt(pagi) - 1).toString())
                    } else {
                      setPagi('0')
                    }
                  }}
                >
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8.33325H1" stroke="#0D85B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 15.625L1 8.33331L8 1.04163" stroke="#0D85B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </li>
                {dataItem.meta.totalPage > 3 ? <li className="lineBreak"></li> : ''}
                {(handleRenderPagination(dataItem.meta.totalPage))}
                {dataItem.meta.totalPage > 3 ? <li className="lineBreak"></li> : ''}
                <li className="pagiItem"
                  onClick={(event) => {
                    if(parseInt(pagi) < dataItem.meta.totalPage - 1) {
                      setPagi((parseInt(pagi) + 1).toString())
                    } else if (typeof pagi === 'undefined') {
                      setPagi('1')
                    } else {
                      setPagi((dataItem.meta.totalPage - 1).toString())
                    }
                  }}
                >
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8.29163L15 8.29163" stroke="#0D85B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 1L15 8.29163L8 15.5833" stroke="#0D85B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </li>
                <li className="pagiItem" onClick={(event) => setPagi((dataItem.meta.totalPage - 1).toString())}>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1.08325L13 7.33325L7 13.5833" stroke="#0D85B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 1.08325L7 7.33325L1 13.5833" stroke="#0D85B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </li>
              </ul>
            ) : 'Comming soon'}
          </div>
          <div className={`${classes.contentRight}`}>
            <input
              type="text"
              className={`${classes.filterInput}`}
              placeholder="ID:"
              onChange={(event) => {
                setFilterParams({
                  ...filterParams,
                  id: event.target.value
                });
              }}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <p className={`${classes.filterTitle}`}>Rarity</p>
            <ul className={`${classes.filterRating}`}>
              <li
                className={filterParams.star === '1' ? 'active' : ''}
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    star: '1'
                  });
                }}
              ><img src="https://marketplace-wine.vercel.app/assets/icon_rating_lg.png" alt="Rating" /><span>1</span></li>
              <li
                className={filterParams.star === '2' ? 'active' : ''}
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    star: '2'
                  });
                }}
              ><img src="https://marketplace-wine.vercel.app/assets/icon_rating_lg.png" alt="Rating" /><span>2</span></li>
              <li
                className={filterParams.star === '3' ? 'active' : ''}
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    star: '3'
                  });
                }}
              ><img src="https://marketplace-wine.vercel.app/assets/icon_rating_lg.png" alt="Rating" /><span>3</span></li>
              <li
                className={filterParams.star === '4' ? 'active' : ''}
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    star: '4'
                  });
                }}
              ><img src="https://marketplace-wine.vercel.app/assets/icon_rating_lg.png" alt="Rating" /><span>4</span></li>
              <li
                className={filterParams.star === '5' ? 'active' : ''}
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    star: '5'
                  });
                }}
              ><img src="https://marketplace-wine.vercel.app/assets/icon_rating_lg.png" alt="Rating" /><span>5</span></li>
            </ul>
            <p className={`${classes.filterLine}`}><img src="https://marketplace-wine.vercel.app/assets/bg_line_short.svg" alt="Line" /></p>
            <p className={`${classes.filterTitle}`}>Element</p>
            <ul className={`${classes.filterClass}`}>
              <li
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    class: 'Earth'
                  });
                }}
                className={filterParams.class === 'Earth' ? 'active' : ''}
              ><span><img src="https://marketplace-wine.vercel.app/assets/earth.png" alt="Earth" /></span>Earth</li>
              <li
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    class: 'Water'
                  });
                }}
                className={filterParams.class === 'Water' ? 'active' : ''}
              ><span><img src="https://marketplace-wine.vercel.app/assets/water.png" alt="Water" /></span>Water</li>
              <li
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    class: 'Fire'
                  });
                }}
                className={filterParams.class === 'Fire' ? 'active' : ''}
              ><span><img src="https://marketplace-wine.vercel.app/assets/fire.png" alt="Fire" /></span>Fire</li>
              <li
                onClick={() => {
                  setFilterParams({
                    ...filterParams,
                    class: 'Wind'
                  });
                }}
                className={filterParams.class === 'Wind' ? 'active' : ''}
              ><span><img src="https://marketplace-wine.vercel.app/assets/wind.png" alt="Wind" /></span>Wind</li>
            </ul>
            <p className={`${classes.filterTitle}`}>Price range</p>
            
            <div className={`${classes.filterRange}`}>
              <Slider
                value={filterRange}
                onChange={handleChangeFilterRange}
                valueLabelDisplay="off"
                aria-labelledby="range-slider"
                min={10}
                max={10000}
              />
              <ul>
                <li>{filterRange[0]}</li>
                <li>{filterRange[1]}</li>
              </ul>
            </div>
            <p className={`${classes.filterButton}`} onClick={handleFilterButtonOnClick}>
              <img src="https://marketplace-wine.vercel.app/assets/button_blue_big.svg" alt="Filter Button" />
              <span>Filter</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home