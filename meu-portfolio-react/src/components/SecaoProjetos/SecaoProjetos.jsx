
import './SecaoProjetos.css'

export default function SecaoProjetos() {
    // Aqui fica o Array de Objetos
    const meusProjetos = [
        {
            id: 1,
            titulo: "Projeto 1: Quiz Bíblico!",
            descricao: "Um quiz interativo sobre histórias e personagens bíblicos, com apenas 5 perguntas de múltipla escolha.",
            imagem: "https://res.cloudinary.com/dzvhsqr0p/image/upload/v1775278183/WhatsApp_Image_2026-04-04_at_01.35.56_a35ypt.jpg"
        },
        {
            id: 2,
            titulo: "Projeto 2: Jokenpô Digital!",
            descricao: "Um jogo clássico de pedra, papel e tesoura, onde o usuário pode jogar contra o computador e ver quem vence a cada rodada.",
            imagem: "https://res.cloudinary.com/dzvhsqr0p/image/upload/v1775435631/copilot_image_1775281342439_ikaj2s.png"
        },
        {
            id: 3,
            titulo: "Projeto 3: A ponte de vidro",
            descricao: "Uma estrutura de vidro que conecta dois pontos, oferecendo uma experiência única, porém desafiadora, onde somente os fortes darão o primeiro passo.",
            imagem: "https://res.cloudinary.com/dzvhsqr0p/image/upload/v1776185420/placas_de_vidro_feitas_ponte_bcc3rk.jpg"
        }
    ];




  return (
    <>
        <section id="projetos" className="projetos">
            <h2 className="projetos-titulo">Meus Projetos</h2>
            <div className="projetos-caixa">

                {/* Aqui é onde uso o map para redenrizar os projetos dinamicamente*/}
                {meusProjetos.map((projetos) => (
                    <div key={projetos.id} className="projetos-card">
                        <img src={projetos.imagem} alt={projetos.titulo} className="projetos-imagem" />
                        <div className="caixa-texto-projeto">
                            <h3 className="info-projetos">{projetos.titulo}</h3>
                            <p className="paragrafo-projetos">{projetos.descricao}</p>
                        </div>
                    </div>
                ))}

                </div>
             </section>
    </>
    )
}
                