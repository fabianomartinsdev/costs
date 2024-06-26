import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul className={styles.list}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className={styles.copyright}>
          <span>Costs</span> &copy; 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
