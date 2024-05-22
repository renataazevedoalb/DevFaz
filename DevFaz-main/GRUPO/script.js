document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("orcamentoForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var mensagem = document.getElementById("mensagem").value;

        if (nome.trim() === "" || email.trim() === "" || telefone.trim() === "" || mensagem.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Aqui você pode enviar os dados para um servidor ou fazer outra ação com eles
        alert("Formulário enviado com sucesso!");
        form.reset();
    });
});
