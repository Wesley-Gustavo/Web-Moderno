import styles from '../styles/Components/Navbar.module.css';

 function Navbar(){
    return(
        <div className={styles.Navbar}>
          <img className={styles.NavbarImg} src="Coder.png"/>

          <div className={styles.NavbarTitle}>
                  <a href="#" className={styles.NavbarDiv}><img src="icons/002-app.svg"/><p>Início</p></a>
                  <a href="#" className={styles.NavbarDiv}><img src="icons/005-coding.svg"/><p>Base</p></a>
                  <a href="#" className={styles.NavbarDiv}><img src="icons/020-html.svg"/><p>Html</p></a>
                  <a href="#" className={styles.NavbarDiv}><img src="icons/015-css.svg"/><p>CSS</p></a>
                  <a href="#" className={styles.NavbarDiv}><img src="icons/react.svg"/><p>React</p></a>
            </div>
          </div>
    )
}

export default Navbar;