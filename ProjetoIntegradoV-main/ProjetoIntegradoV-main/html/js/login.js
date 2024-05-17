let loginSucesso=false ;
let tentativas=0;

//Laço de repetição
function login(){
    const username = document.getElementById('exampleInputEmail1').value;
    const password=document.getElementById('exampleInputPassword1').value;


// Verifica se o nome de usuário e senha estão corretos
if (username === 'usuario' && password === 'senha') {
    console.log('Login bem-sucedido!');
    window.location.href = 'server.html';
    loginSucesso = true;
  } else {
    Swal.fire({
        icon: 'error',
        title: 'Nome de usuário ou senha incorretos',
        html: 'Tente novamente.',
        imageUrl: 'img/dinofauro.meme.png', 
        imageAlt: 'Erro'
      });
      
      // Limpar os campos de entrada para tentativa subsequente
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    
    
    
    
    /*// Cria uma nova div para conter a mensagem e a imagem
    const div = document.createElement('div');
    
    // Cria um elemento de imagem
    const img = document.createElement('img');
    img.src = 'img/dinofauro.meme.png'; 
    img.alt = 'Nome de usuário ou senha incorretos';
    
    // Cria um elemento de parágrafo para a mensagem
    const p = document.createElement('p');
    p.textContent = 'Nome de usuário ou senha incorretos. Tente novamente.';
    
    // Adiciona a imagem e a mensagem à div
    div.appendChild(img);
    div.appendChild(p);
    
    // Exibe o alerta com a div como conteúdo
    alert(div.innerHTML);
    
    // Limpar os campos de entrada para tentativa subsequente
    document.getElementById('exampleInputEmail1').value = '';
    document.getElementById('exampleInputPassword1').value = '';
    */
  }
}

if (!loginSucesso) {
  console.log('Número máximo de tentativas excedido. Por favor, tente novamente mais tarde.');
}