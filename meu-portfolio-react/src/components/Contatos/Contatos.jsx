import React, { useState } from 'react';
import "./Contatos.css";

export default function Contatos() {

// Seleção de elementos
const [textoBotao, setTextoBotao] = useState("Enviar");
const [carregando, setCarregando] = useState(false);

const criarAviso = (texto, eErro = false) => {
  const div = document.createElement("div");
  div.classList.add("aviso-toast");
  if (eErro) div.classList.add("aviso-erro");
  div.textContent = texto;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
  };

    
    // Função que lida com o envio do formulário
    const manipularEnvio = async (e) => {
        e.preventDefault();
        const formulario = e.target;

        setTextoBotao("Enviando...");
        setCarregando(true);

        try {
            const res = await fetch(formulario.action, {
                method: formulario.method,
                body: new FormData(formulario),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                criarAviso("Mensagem enviada com sucesso!");
                formulario.reset();
            } else {
                criarAviso("Erro ao enviar.", true);
            }
        } catch {
            criarAviso("Erro de conexão.", true);
        } finally {
            setTextoBotao("Enviar");
            setCarregando(false);
        }
    };


  return (
    <>
      <section id="contato" className="contatos">
        <h2 className="contatos-titulo">Entre em Contato</h2>

        <form id="formulario" action="https://formspree.io/f/xrerzola" method="POST" className="formulario-contatos" onSubmit={manipularEnvio}>
            <div className="grupo-form">

                <input type="text" name="nome" placeholder="Nome" className="campo-form"/>
            </div>

            <div className="grupo-form">
                <input type="email" name="email" placeholder="Seu melhor e-mail" className="campo-form" required/>
            </div>

            <div className="grupo-form">
                <textarea name="mensagem" className="campo-form" placeholder="Digite sua mensagem" required></textarea>
            </div>

            <button type="submit" className="botao-form" disabled={carregando}>
                {textoBotao}
            </button>
        
        </form>
    </section>

    </>
  );
}