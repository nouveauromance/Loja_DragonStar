function salvarCadastro(event) {
  event.preventDefault();

  var nome = document.querySelector("#inputNome").value;
  var sobrenome = document.querySelector("#inputSobrenome").value;
  var email = document.querySelector("#inputEmail").value;
  var senha = document.querySelector("#inputPassword").value;
  var endereco = document.querySelector("#inputAddress").value;
  var cep = document.querySelector("#inputCEP").value;
  var estado = document.querySelector("#inputEstado").value;

  var cadastro = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
      endereco: endereco,
      cep: cep,
      estado: estado
  };

  var cadastroJSON = JSON.stringify(cadastro);

  localStorage.setItem("cadastro", cadastroJSON);

  alert("Cadastro salvo com sucesso!");
}

document.querySelector("form").addEventListener("submit", salvarCadastro);
