import styles from '../styles/Components/Navbar.module.css';

export default function Navbar(){
    return(
        <div className={styles.Navbar}>
          <img className={styles.NavbarImg} src="Coder.png"/>

          <div className={styles.NavbarTitle}>
                  <div className={styles.NavbarDiv, styles.NavbarDivActive}><img src="icons/002-app.svg"/><p>Início</p></div>
                  <div className={styles.NavbarDiv}><img src="icons/004-coding.svg"/><p>Base</p></div>
                  <div className={styles.NavbarDiv}><img src="icons/020-html.svg"/><p>Html</p></div>
                  <div className={styles.NavbarDiv}><img src="icons/015-css.svg"/><p>CSS</p></div>
                  <div className={styles.NavbarDiv}><img src="icons/react.svg"/><p>React</p></div>
              </div>

          </div>
    )
}