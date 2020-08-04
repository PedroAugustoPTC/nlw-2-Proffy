import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg" alt="Perfil"/>
                <div>
                    <strong>Professor1</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entre em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}


export default TeacherItem;