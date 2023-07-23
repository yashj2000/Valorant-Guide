import React from 'react'
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();

  return (
<footer>
  <div className={styles.footerInfo}>
    Developed by Yash Janyani using Valorant-API
  </div>
  <div className={styles.footerIcon}>
    <a href="https://www.linkedin.com/in/yash-janyani/">
      <FontAwesomeIcon className={styles.iconStyle} icon={faLinkedin} size="lg" />        
    </a> 
    <a href="https://github.com/yashj2000">
      <FontAwesomeIcon className={styles.iconStyle} icon={faGithub} size="lg" />          
    </a> 
  </div>
</footer>

  )
}

export default Footer;