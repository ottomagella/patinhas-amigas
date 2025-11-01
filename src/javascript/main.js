// ================================
// SPA: Single Page Application (rolagem suave)
// ================================
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // rolagem suave
        }
    });
});

// ================================
// Template JS: Animais para Adoção
// ================================
const animais = [
    { nome: "Luna", idade: "2 anos", imagem: "imagens/luna.jpg" },
    { nome: "Max", idade: "3 anos", imagem: "imagens/max.jpg" },
    { nome: "Bella", idade: "1 ano", imagem: "imagens/bella.jpg" },
];

const container = document.getElementById('animais-adocao');

function renderAnimais() {
    container.innerHTML = ''; // Limpa antes de renderizar
    animais.forEach(animal => {
        const card = document.createElement('article');
        card.classList.add('card'); // usa a classe global do CSS

        card.innerHTML = `
            <img src="${animal.imagem}" alt="${animal.nome}">
            <h3>${animal.nome}</h3>
            <p>Idade: ${animal.idade}</p>
        `;
        container.appendChild(card);
    });
}

// Renderiza os animais ao carregar a página
renderAnimais();

// ================================
// Validação de Formulário
// ================================
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valido = true;
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.style.borderColor = '#ddd';
    });

    const nome = form.querySelector('input[name="nome"]');
    if (nome.value.trim() === "") {
        valido = false;
        nome.style.borderColor = '#E53935';
        alert("O campo nome é obrigatório!");
        nome.focus();
        return;
    }

    const email = form.querySelector('input[name="email"]');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
        valido = false;
        email.style.borderColor = '#E53935';
        alert("Digite um e-mail válido!");
        email.focus();
        return;
    }

    const telefone = form.querySelector('input[name="telefone"]');
    const regexTel = /^\d{10,11}$/;
    if (telefone && !regexTel.test(telefone.value.replace(/\D/g, ''))) {
        valido = false;
        telefone.style.borderColor = '#E53935';
        alert("Digite um telefone válido (somente números, 10 ou 11 dígitos)");
        telefone.focus();
        return;
    }

    if (valido) {
        alert("Formulário enviado com sucesso!");
        form.reset();
    }
});