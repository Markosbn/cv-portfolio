// cria alerta para o usuario e recarrega a pagina ao clicar no enviar do formulario
function onEnviar() {
    window.alert("Function not implemented");
    window.location.reload();
}

//calcula minha idade para exibir na tela
function calcularIdade() {
    var dataNascimento = new Date('1997-03-21');
    var dataAtual = new Date();

    var idadeEmMilissegundos = dataAtual - dataNascimento;
    var idadeEmAnos = Math.floor(idadeEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25));

    document.getElementById('resultado').textContent = idadeEmAnos + " Anos.";
  }