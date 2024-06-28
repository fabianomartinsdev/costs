import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../images/costs_logo.png";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="" width="35px" />
        </Link>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.link}>
              Projeto
            </Link>
          </li>
          <li>
            <Link to="/company" className={styles.link}>
              Empresa
            </Link>
          </li>

          <li>
            <Link to="/contact" className={styles.link}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
