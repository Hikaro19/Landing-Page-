// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Efeito de scroll nas seções
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

document.querySelector('form').addEventListener('submit', function (event) {
    // Pega o valor dos campos de input
    const nome = document.getElementById('nome').value.trim();  // Obtém o valor do campo "nome", remove espaços extras.
    const email = document.getElementById('email').value.trim();  // Obtém o valor do campo "email".
    const telefone = document.getElementById('telefone').value.trim();  // Obtém o valor do campo "telefone".

    // Verifica se algum campo está vazio
    if (!nome || !email || !telefone) {
        event.preventDefault();  // Impede que o formulário seja enviado
        alert("Por favor, preencha todos os campos obrigatórios.");  // Exibe uma mensagem de erro
        location.href = "./index.html"; //redireciona direto para o início da página 
    } else {
        alert("Mensagem enviada com sucesso!");  // Exibe uma mensagem de sucesso se todos os campos forem preenchidos
    }
});