import styles from '../styles/Components/Spinner.module.css';

 function Spinner(){
    return(
        <div className={styles.SpinDiv}>
            <img className={styles.SpinImg} src="Coder.svg" alt="Imagem de Carregamento"/>    
        </div>
    )
}

export default Spinner;