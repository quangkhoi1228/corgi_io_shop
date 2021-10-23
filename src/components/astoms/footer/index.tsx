import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import BannerSpine from '../banner/BannerSpineFooter';
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={`${classes.root}`}>
      <p className="footer-background">
        <img src="https://marketplace-wine.vercel.app/assets/bg_footer.svg" alt="bgfooter" />
        {/* <BannerSpine
          link="https://marketplace-wine.vercel.app/animation/banner/banner.json"
          name="banner"
        ></BannerSpine> */}
      </p>
      <div className={`${classes.container}`}>
        <div className={`${classes.content}`}>
          <p className={`${classes.footerLogo}`}><img src="https://marketplace-wine.vercel.app/assets/footer_logo.png" alt="logo footer" /></p>
          <div className={`${classes.footerContent}`}>
            <p className={`${classes.fotterTitle}`}>BECOME A MEMBER OF THIS GROWING COMMUNITY</p>
            <ul className={`${classes.footerButton}`}>
              <li>
                <Link to="/">
                  <img src="https://marketplace-wine.vercel.app/assets/button_yellow.svg" alt="join Telegram" />
                  <span>join Telegram</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="https://marketplace-wine.vercel.app/assets/button_blue.svg" alt="follow our twitter" />
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