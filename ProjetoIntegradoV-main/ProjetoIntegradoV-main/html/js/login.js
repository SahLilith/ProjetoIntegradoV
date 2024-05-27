let loginSucesso=false ;

const listaUsers=[
    {exampleInputEmail1:'dodocaralho@gmail.com', exampleInputPassword1: '123four'},
    {exampleInputEmail1:'enzoGui2005@hotmail.com',  exampleInputPassword1:'trinket'},
    {exampleInputEmail1:'kawaiilaminaflamejante@gmail.com',exampleInputPassword1:'kawaii666'},
    {exampleInputEmail1:'fudiu',exampleInputPassword1:'semnexo27'}
];

//Laço de repetição
function login(){
    const username = document.getElementById('exampleInputEmail1').value;
    const password=document.getElementById('exampleInputPassword1').value;


// Verifica se o nome de usuário e senha estão corretos
const user = listaUsers.find(user => user.exampleInputEmail1 === username && user.exampleInputPassword1 === password);

if (user) {
    window.location.href = './html/server.html';
    loginSucesso = true;
    console.log('Login bem-sucedido!');
  } else {
    
    Swal.fire({
        icon: 'error',
        title: 'Nome de usuário ou senha incorretos',
        html: 'Tente novamente.',
        imageUrl: 'img/dinofauro.meme.png', 
        imageAlt: 'Erro'
      });
      
      // Limpar os campos de entrada para tentativa subsequente
      document.getElementById('exampleInputEmail1').value = '';
      document.getElementById('exampleInputPassword1').value = '';
    
    
    

  }
}

