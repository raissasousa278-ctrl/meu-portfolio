import React from 'react'
import './Menu.css'

export default function Menu() {
    return (
        <nav className="navegacao">
            <ul className="menu">
                <li>
                    <a href="#inicio" className="menu-link">Início</a>
                </li>
                <li>
                    <a href="#sobre" className="menu-link">Sobre</a>
                </li>
                <li>
                    <a href="#projetos" className="menu-link">Projetos</a>
                </li>
                <li>
                    <a href="#contato" className="menu-link">Contato</a>
                </li>
            </ul>
        </nav>
    );
}