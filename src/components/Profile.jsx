import styles from '../styles/Components/Profile.module.css';
import React,{ useState } from 'react'
import {Form, SearchBar} from './styles'

import DevImg from '../styles/Images/Dev.jpg'

 function Profile(){
    const [showModal,setShowModal] = useState(false)
    const [searchBar,setSearchBar] = useState(false)

    return(
        <div>
            <Form className={showModal}>
                <div>
                    <img className={styles.DevImg} src={DevImg} alt='Desenvolvedor'/>
                    <button onClick={() => setShowModal(prev => !prev)}><span className='Tooltip' style={{marginTop:40}} >Fechar</span><img src='Close.svg' alt='Fechar'/></button>
                </div>
            </Form>

            <div className={styles.Profile}>
            <SearchBar className={searchBar}>
                <input type='search' placeholder='pesquisar'/>
            </SearchBar>
                <button className={styles.Link} onClick={() => setSearchBar(prev => !prev)}><span className='Tooltip' style={{marginTop:37}} >Pesquisar</span><img className={styles.Icon} src='Glass.svg' alt='Pesquisa'/></button>
                <button className={styles.Link} onClick={() => setShowModal(prev => !prev)} ><span className='Tooltip' style={{marginTop:37}} >Perfil</span><img className={styles.Icon} src='Circle.svg' alt='Perfil'/></button>
            </div>
        </div>
    )
}

export default Profile;