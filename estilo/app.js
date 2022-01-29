

function confirma(){
    let Nome = document.getElementById("Unome").value
    let sobreNome = document.getElementById("sobreNome").value
    let tel = document.getElementById("eTele").value

    if(Nome === "" || sobreNome === "" || tel === ""){
        alert('Falta dados')
    }else{
        sabermais.style.display = 'none'
        alert('Seu cadastro esta pronto!')
        localStorage.nomeUsuario = Nome
        localStorage.sobreNomeUsuario = sobreNome
        localStorage.tel = tel
    }
}

function irInicial(){
    var nome1 = localStorage.nomeUsuario

    if(nome1 == "".value){
        alert('Faça o cadastro!!!')
    } else{
        alert(`Bem-vindo ${nome1} este site ainda esta em teste!`)
        location='paginainicial.html'
    }
}



function fazerCadastro(){
    sabermais.style.display = 'block'
}
function fecharCadastro(){
    sabermais.style.display = 'none'
}
function avisofechar(){
    aviso.style.display= 'none'
}
function chamaAviso(){
    aviso.style.display= 'block'
}

function fecharAjuda(){
    ajuda.style.display= 'none'
}

function chamaAjuda(){
    ajuda.style.display='block'
}

function empregoAbrir(){
    emprego.style.display='block'
}

function empregoFechar(){
    emprego.style.display='none'
}

function inicial(){
    var nomeT = localStorage.nomeUsuario
    nomeTopo.innerHTML = `Olá ${nomeT}`
}

function CVonline(){
    alert('Você vai ser direcionado para outra pagina!')
    location='https://gustavowp8.github.io/curriculum/'
}