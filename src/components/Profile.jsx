import styles from '../styles/Components/Profile.module.css';

 function Profile(){
        return(
            <div className={styles.Profile}>
                <img className={styles.Icon} src='Glass.svg' alt='Pesquisa'/>
                <img className={styles.Icon} src='Circle.svg' alt='Perfil'/>
            </div>
        )
}

export default Profile;