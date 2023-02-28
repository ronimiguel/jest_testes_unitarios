async function cadastrarUsuario(dados) {
    const response = await fetch('https://minhaapi.com/usuarios', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const usuario = await response.json();
    return usuario;
  }
  

async function buscarUsuario(id) {
    const response = await fetch(`https://minhaapi.com/usuarios/${id}`);
    const usuario = await response.json();
    return usuario;
  }

  async function atualizarUsuario(id, dados) {
    const response = await fetch(`https://minhaapi.com/usuarios/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const usuario = await response.json();
    return usuario;
  }
  
  async function deletarUsuario(id) {
    const response = await fetch(`https://minhaapi.com/usuarios/${id}`, {
      method: 'DELETE'
    });
    const resultado = await response.json();
    return resultado;
  }

  module.exports = {cadastrarUsuario, buscarUsuario, atualizarUsuario, deletarUsuario};
