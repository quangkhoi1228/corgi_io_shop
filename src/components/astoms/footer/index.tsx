import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import BannerSpine from '../banner/BannerSpineFooter';
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={`${classes.root}`}>
      <div className="footer-background">
        <img src="./assets/bg_footer.svg" alt="bgfooter" />
        <BannerSpine
          link="https://github.com/quangkhoi1228/corgi_io_shop/blob/master/public/animation/banner/banner.json"
          name="banner"
        ></BannerSpine>
      </div>
      <div className={`${classes.container}`}>
        <div className={`${classes.content}`}>
          <p className={`${classes.footerLogo}`}><img src="./assets/footer_logo.png" alt="logo footer" /></p>
          <div className={`${classes.footerContent}`}>
            <p className={`${classes.fotterTitle}`}>BECOME A MEMBER OF THIS GROWING COMMUNITY</p>
            <ul className={`${classes.footerButton}`}>
              <li>
                <Link to="/">
                  <img src="./assets/button_yellow.svg" alt="join Telegram" />
                  <span>join Telegram</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="./assets/button_blue.svg" alt="follow our twitter" />
                  <span>follow our twitter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer