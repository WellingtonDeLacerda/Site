function clickMenu() {
   let janela = window.document.getElementsByClassName('nav-link')[0]
   let login = window.document.getElementsByClassName('nav-login')[0]
   let menu = window.document.getElementsByTagName('i')[1]
   if(janela.style.display === 'none' ||  janela.style.display === '' ){
       janela.style.display = 'flex'
       menu.innerHTML = 'close'
       login.style.display = 'flex'
       
   }else{
       janela.style.display = 'none'
       menu.innerHTML = 'menu'
       login.style.display = 'none'
   }
   
}

function mudarTamanho() {
    let janela = window.document.getElementsByClassName('nav-link')[0]
    let login = window.document.getElementsByClassName('nav-login')[0]
    let corpo = window.document.getElementsByTagName('body')[0]
    if(window.innerWidth >= 768){
        janela.style.display = 'inline-flex'
        login.style.display = 'inline-flex'
    }else{
        janela.style.display = 'none'
        login.style.display = 'none'
    }
}