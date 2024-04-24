import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss'


const Footer = () => {

const instagramImgSrc = "/assets/images/3955024.png";
const youtubeImgSrc = "/assets/images/4494485.png";

  return (
    <div className={styles.footer}>
      <div className={styles.media}>
      <Link to="">
        <img className={styles.icon} src={instagramImgSrc} alt="logo instagram" />
      </Link>
      <Link to="">
        <img className={styles.icon} src={youtubeImgSrc} alt="logo youtube" />
      </Link>
      </div>
    </div>
  );
}



export default Footer;
