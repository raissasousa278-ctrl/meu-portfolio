// src/components/Cabecalho.jsx
import React from 'react';
import './Cabecalho.css';
import fotoperfil from './perfil.jpg'

export default function Cabecalho() 
{
    return (
        
        <header id="inicio" className="cabecalho">
            <img src={fotoperfil} alt=" foto de perfil (Raissa)" className="foto-perfil" />
            <h1>Raissa Rodrigues Sousa</h1>
            <p className="cabecalho-sub-titulo">Estudante de Tecnologia em Sistemas para Internet</p>
        </header>
    );
}
