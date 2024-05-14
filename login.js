function verificarAutenticidade(email, senha) {
  if (email !== '' && senha.length >= 6) {
    return true;
  } else {
    return false;
  }
}

const emailInserido = 'exemplo@email.com';
const senhaInserida = 'senha123';

if (verificarAutenticidade(emailInserido, senhaInserida)) {
  console.log('As informações são autênticas!');
} else {
  console.log('As informações não são autênticas!');
}
