import styles from '../styles/Components/Spinner.module.css';

 function Spinner(){
    return(
        <div>
            <img className={styles.SpinImg} src="Coder.svg" alt="Imagem de Carregamento"/>    
        </div>
    )
}

export default Spinner;