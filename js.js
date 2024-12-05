document.querySelector('form').addEventListener('submit', function (event) {
    // Pega o valor dos campos de input
    const nome = document.getElementById('nome').value.trim();  // Obtém o valor do campo "nome", remove espaços extras.
    const email = document.getElementById('email').value.trim();  // Obtém o valor do campo "email".
    const telefone = document.getElementById('telefone').value.trim();  // Obtém o valor do campo "telefone".

    // Verifica se algum campo está vazio
    if (!nome || !email || !telefone) {
        event.preventDefault();  // Impede que o formulário seja enviado
        alert("Por favor, preencha todos os campos obrigatórios.");  // Exibe uma mensagem de erro
    } else {
        alert("Mensagem enviada com sucesso!");  // Exibe uma mensagem de sucesso se todos os campos forem preenchidos
    }
});
