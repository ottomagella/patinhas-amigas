// ================================
// SPA: Rolagem suave entre seções
// ================================
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ================================
// Renderização Dinâmica: Animais para Adoção
// ================================
const animais = [
    { nome: "Omeprazol", idade: "1 ano", imagem: "src/assets/images/omeprazol-macho.jpg", genero: "Macho" },
    { nome: "Molly", idade: "3 anos", imagem: "src/assets/images/molly-femea.jpg", genero: "Fêmea" },
    { nome: "Amarelão", idade: "6 anos", imagem: "src/assets/images/amarelao-macho.png", genero: "Macho" },
    { nome: "Xororó", idade: "5 meses", imagem: "src/assets/images/xoxoro-macho.jpg", genero: "Macho" }
];

const containerAnimais = document.getElementById('animais-adocao');

function renderAnimais() {
    if (!containerAnimais) return;

    containerAnimais.innerHTML = ''; // Limpa antes de renderizar

    animais.forEach(animal => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${animal.imagem}" alt="${animal.nome} - ${animal.genero}">
            <h3>${animal.nome} - ${animal.genero}</h3>
            <p>Idade: ${animal.idade}</p>
            <span class="badge">Disponível</span>
        `;
        containerAnimais.appendChild(card);
    });
}

// Renderiza os animais ao carregar a página
renderAnimais();

// ================================
// Validação de Formulário
// ================================
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valido = true;

        form.querySelectorAll('input, select, textarea').forEach(field => {
            field.style.borderColor = '#ddd';
        });

        const nome = form.querySelector('input[name="nome"]');
        if (!nome.value.trim()) {
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
}

// ================================
// Modo Escuro e Alto Contraste
// ================================
const darkModeBtn = document.getElementById('toggle-dark-mode');
const highContrastBtn = document.getElementById('toggle-high-contrast');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

if (darkModeBtn) darkModeBtn.addEventListener('click', toggleDarkMode);
if (highContrastBtn) highContrastBtn.addEventListener('click', toggleHighContrast);

// ================================
// Menu Mobile Toggle
// ================================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}