# 🐾 Patinhas Amigas – Plataforma para ONG de Animais

Projeto desenvolvido por **Otávio Magella**  
Sistema web voltado para adoção de animais, voluntariado e divulgação de projetos sociais da ONG fictícia Patinhas Amigas.

## 📋 Descrição do Projeto

A plataforma **Patinhas Amigas** tem como objetivo conectar ONGs e pessoas interessadas em adotar animais, participar de projetos voluntários ou contribuir com doações.

O site foi desenvolvido com foco em **acessibilidade**, **design responsivo** e uso correto de tags semânticas do HTML5, oferecendo uma experiência intuitiva e agradável.

A aplicação é uma **SPA (Single Page Application)** básica, permitindo navegação entre seções de forma suave, utilizando JavaScript para manipulação dinâmica do DOM.

## 🚀 Funcionalidades

- **🐶 Listagem de Animais para Adoção**  
  Animais apresentados em cards com nome, raça, sexo, idade, status de vacinação/castração e imagem padronizada.

- **💬 Formulário de Cadastro de Voluntários**  
  Com validação HTML5 e JavaScript, incluindo campos obrigatórios, padrões de e-mail, telefone e CPF.

- **❤️ Seção de Projetos e Voluntariado**  
  Exibição dinâmica de campanhas e ações da ONG, permitindo atualização fácil de conteúdo via JavaScript.

- **📱 Layout Responsivo**  
  Adaptação para desktop, tablet e mobile, com media queries e flexbox.

- **🎨 Tema Personalizado**  
  Paleta de cores "caramelo" para transmitir acolhimento e empatia.

- **🔄 SPA e Rolagem Suave**  
  Navegação dinâmica entre seções sem recarregar a página, melhorando a experiência do usuário.

## 🧩 Tecnologias Utilizadas

- **HTML5** — Estrutura semântica, acessível e organizada.
- **CSS3** — Layout responsivo, variáveis CSS e flexbox.
- **JavaScript (ES6+)** — Manipulação do DOM, SPA básico, renderização dinâmica e validação de formulários.
- **Media Queries** — Adaptação de layout para diferentes dispositivos.

## 🖌️ Paleta de Cores (Variáveis CSS)

| Nome da variável     | Cor       | Descrição               |
|----------------------|-----------|-------------------------|
| `--caramelo`         | `#D2691E` | Cor principal           |
| `--caramelo-claro`   | `#E9967A` | Hover e destaques       |
| `--caramelo-suave`   | `#F5DEB3` | Fundo leve e bordas     |
| `--caramelo-escuro`  | `#8B4513` | Rodapé e botões         |
| `--cinza`            | `#333333` | Texto padrão            |
| `--cinza-fundo`      | `#f9f9f9` | Fundo de seções         |

## 🧠 Boas Práticas Implementadas

- Estrutura semântica com `<section>`, `<article>`, `<fieldset>`, `<legend>` e `<nav>`
- Variáveis CSS semânticas e organizadas
- Flexbox para alinhamento e espaçamento consistente
- Responsividade garantida até 480px (smartphones)
- Formulários com validação HTML5 nativa e JavaScript
- SPA básico: navegação entre seções com rolagem suave e renderização dinâmica de conteúdo
- Imagens otimizadas e padronizadas para manter harmonia visual

## 🗂️ Estrutura do Projeto
patinhas-amigas/

│

├─ index.html # Página inicial: animais para adoção

├─ projetos.html # Projetos, voluntariado e doações

├─ cadastro.html # Formulário de cadastro de voluntários

│

├─ src/

│ ├─ css/

│ │ └─ style.css # Estilos principais

│ ├─ javascript/

│ │ └─ main.js # SPA, validação e renderização dinâmica

│ └─ assets/

│ └─ images/ # Imagens dos animais

│
└─ README.md

## 🧾 Licença

Este projeto é de uso **educacional** e pode ser reutilizado livremente para fins de **aprendizado** ou **projetos acadêmicos**.

---

## ✨ Autor

**Otávio Magella**  
Técnico em Eletrônica e Suporte | Estudante de ADS  
📧 [contato.otaviomagella@outlook.com]  
🌐 [LinkedIn](https://www.linkedin.com/in/ottomagella)