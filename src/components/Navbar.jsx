import styles from '../styles/Components/Navbar.module.css';
import { Link } from "react-router-dom"

 function Navbar(){
    return(
        <div className={styles.Navbar}>
            <img className={styles.NavbarImg} src="Coder.svg" alt="Logo"/>

            <nav className={styles.NavbarTitle}>
                <Link to="/início"><span className={styles.NavbarDiv}><img src="icons/002-app.svg" alt="Non"/><p>Início</p></span></Link>
                <Link to="/base"><span className={styles.NavbarDiv}><img src="icons/005-coding.svg" alt="Non"/><p>Base</p></span></Link>
            </nav>
            

        </div>
    )
}

export default Navbar;