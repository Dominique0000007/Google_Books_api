import React from 'react';
import './Footer.css';

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='social-links'>
                <a href='https://www.facebook.com/suaClinica'  target='_blank' rel='noopener noreferrer'>Facebook</a>
                <a href='https://www.instagram.com/suaClinica' target='_blank' rel='noopener noreferrer'>Instagram</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Clínica Sorriso Feliz. Todos os direitos reservados. </p>
            <p>Desenvolvido por: Seu nome/Empresa</p>
        </footer>
    );
}