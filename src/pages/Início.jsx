import styles from '../styles/Pages/Início.module.css'

function  Início(){
    return (
        <>
            <title>Web-Moderno | Início</title>
            <div className={styles.Text}> 
                <div className={styles.TittleText}>
                    <h1 className={styles.BackgroundText}>Bem Vindo!!!</h1>
                    <h2 className={styles.BackgroundText}>Tudo que você precisa aprender para construir aplicações modernas para Web você aprenderá aqui.</h2>
                </div>
                    
                <br/><br/>

                <p>
                    Este inteiro projeto foi baseado no curso WebModerno de Cod3r, Udemy.com
                    <br/><br/>

                    Desenvolvimento Web é hoje um dos assuntos mais relevantes do momento porque o mercado respira Web. <br/> Esta aplicação web foi desenvolvida com o objetivo de criar um modelo, utilizando ReactJS.
                    <br/>
                    Criar este projeto foi um desafio que com muita luta atingiu seu principal objetivo, além de uma fonte rica de estudo e conhecimento de programação web que desenvolvi. Colocando a prova funcionalidades, não conteúdo.
                </p>
                
            </div>
        </>
    )
}

export default Início