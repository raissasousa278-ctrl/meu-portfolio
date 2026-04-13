// Aqui ficam os dados que o JS vai usar para criar o HTML
const meusProjetos = [
    {
        titulo: "Projeto 1: Quiz Bíblico!",
        descricao: "Um quiz interativo sobre histórias e personagens bíblicos, com apenas 5 perguntas de múltipla escolha.",
        imagem: "https://res.cloudinary.com/dzvhsqr0p/image/upload/v1775278183/WhatsApp_Image_2026-04-04_at_01.35.56_a35ypt.jpg"
    },
    {
        titulo: "Projeto 2: Jokenpô Digital!",
        descricao: "Um jogo de Jokenpô (Pedra, Papel, Tesoura) digital, onde os jogadores podem competir contra o computador.",
        imagem: "https://res.cloudinary.com/dzvhsqr0p/image/upload/v1775435631/copilot_image_1775281342439_ikaj2s.png"
    }
];

// 2. FUNÇÃO PARA RENDERIZAR OS PROJETOS
function renderizarProjetos() {
    const container = document.querySelector("#container-projetos");
    
    // Verifica se o container existe para não dar erro
    if (!container) return;

    // Limpa o container
    container.innerHTML = "";


// ... dentro da função renderizarProjetos ...
    meusProjetos.forEach(projeto => {
        const card = `
            <div class="projetos-card">
                <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projetos-imagem">
            
                <div class="caixa-texto-projeto">
                    <h3 class="info-projetos">${projeto.titulo}</h3>
                    <p class="paragrafo-projetos">${projeto.descricao}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 3. CHAMA A FUNÇÃO PARA RENDERIZAR OS PROJETOS QUANDO A PÁGINA CARREGAR
renderizarProjetos();
//window.addEventListener("DOMContentLoaded", renderizarProjetos);

// Seleção de elementos
const formulario = document.querySelector("#formulario");
const botao = document.querySelector(".botao-form");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Salva o texto do botão e muda para "Enviando..."
    const textoBotao = botao.textContent;
    botao.textContent = "Enviando...";
    botao.disabled = true; // Evita que o usuário clique várias vezes
    
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
        // Volta o botão ao normal independente do resultado
        botao.textContent = textoBotao;
        botao.disabled = false;
    }
});

// Função que cria o aviso na tela usando as classes do CSS
function criarAviso(texto, eErro = false) {
    const div = document.createElement("div");
    div.classList.add("aviso-toast");
    
    // Se for erro, adiciona a classe de cor vermelha
    if (eErro) div.classList.add("aviso-erro");
    
    div.textContent = texto;
    document.body.appendChild(div);
    
    // Remove o aviso da tela após 3 segundos
    setTimeout(() => div.remove(), 3000);
}