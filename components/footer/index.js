import React from "react";
import './footer.css'; // Certifique-se de que o nome do arquivo CSS esteja correto

export default function Footer() {  // Corrigido para Footer com 'F' maiúsculo
    return (
        <footer className='footer'>  {/* Corrigido para usar a tag <footer> */}
            <div className="social-link">
                <a href="http://www.facebook.com/suaClinica">Facebook</a>
                <a href="http://www.instagram.com/suaClinica">Instagram</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Clínica Sorriso Feliz. Todos os direitos reservados</p>
            <p>Desenvolvido por: Lara Souza</p>
        </footer>
    );
}