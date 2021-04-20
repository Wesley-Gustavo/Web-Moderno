import styles from '../styles/Components/Navbar.module.css';
import { Link } from "react-router-dom"

 function Navbar(){
    return(
        <div className={styles.Navbar}>
          <img className={styles.NavbarImg} src="Coder.png"/>

            <nav className={styles.NavbarTitle}>
                <Link to="início"><span className={styles.NavbarDiv}><img src="icons/002-app.svg"/><p>Início</p></span></Link>
                <Link to="base"><span className={styles.NavbarDiv}><img src="icons/005-coding.svg"/><p>Base</p></span></Link>

                {/**
                <a href="html" className={styles.NavbarDiv}><img src="icons/020-html.svg"/><p>Html</p></a>
                <a href="css" className={styles.NavbarDiv}><img src="icons/015-css.svg"/><p>CSS</p></a>
                <a href="react" className={styles.NavbarDiv}><img src="icons/react.svg"/><p>React</p></a>
                **/}
            </nav>

        </div>
    )
}

export default Navbar;