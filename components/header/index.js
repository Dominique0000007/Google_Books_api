import React from "react";
import { Link } from 'react-router-dom'; // Corrigido o nome para Link com 'L' maiúsculo
import "./header.css";

export default function Header() {  // Corrigido para Header com 'H' maiúsculo
    return (
        <header className="header">
            <h1>Clínica Odontológica Sorriso Feliz</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}