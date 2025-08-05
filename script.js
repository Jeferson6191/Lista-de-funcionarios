let letrasexistentes = []//array para adicionar letras
    //abaixo verifica se ja existe a primeira letra do nome
    //se nao existe, criar
let nomesexistentes = ['alex']


for (let cont = 0; cont < nomesexistentes.length; cont++) {

    let addnomevalor = nomesexistentes.at(cont)

    //pegar o primeira letra do nome #addnomevalor.substring(0,1)#
    let primeiraletra = addnomevalor.substring(0,1)
    
    
    
    if (letrasexistentes.includes(primeiraletra)) {
        //window.alert("a letra"+primeiraletra+'ja existe') AVISO
        document.querySelector('#'+primeiraletra).innerHTML+= '<li>'+addnomevalor+'</li>'
    } else
     {
        letrasexistentes.sort
        letrasexistentes.push(primeiraletra)
        document.querySelector('#listinha').innerHTML+=(`<ol id='${primeiraletra}' >letra:${primeiraletra} </ol>`)//lista para alfabeto com id do respectivo
        
        document.querySelector('#'+primeiraletra).innerHTML+= '<li>'+addnomevalor+'</li>'
        
        
    }
    
}

let nomesrepetidos = []
//agora para ativos

let letrasexistentesativos = []
let nomesexistentesativos = []
let nomesrepetidosativos = []


//funçao de adicionar (INATIVOS)
function adicionar() {
    //dentro da funçao deve se adicionar o nome na sua respectiva letra alfabetica ex: A: alessando
    let addnome = document.querySelector("#addnome")
    let addnomevalor = String(addnome.value)

    //pegar o primeira letra do nome #addnomevalor.substring(0,1)#
    let primeiraletra = addnomevalor.substring(0,1)
    
    
        
    if(addnomevalor.length<=0 || primeiraletra >=0||primeiraletra<=100 ){
        window.alert("insira algo, ou remova o numero")
    }//condiçao se a syntex estiver errada
    else if(nomesexistentes.includes(addnomevalor)){
        window.alert("esse nome ja existe")//AVISO

        document.querySelector('#'+primeiraletra).innerHTML+= '<li>'+addnomevalor+'(repetido)</li>'
        nomesrepetidos.push(addnomevalor)
    }//condiçao se ja existe o nome
    else if (letrasexistentes.includes(primeiraletra)) {
        localStorage.inativos += `"${addnomevalor}",`
        //window.alert("a letra"+primeiraletra+'ja existe') AVISO
        document.querySelector('#'+primeiraletra).innerHTML+= '<li>'+addnomevalor+'</li>'
        nomesexistentes.push(addnomevalor)
    } else//condiçao se ja existe a letra
     {
        localStorage.inativos += `"${addnomevalor}",`
        letrasexistentes.push(primeiraletra)//colocar a primeira letra no banco de dados
        nomesexistentes.push(addnomevalor)
        letrasexistentes.sort
        document.querySelector('#listinha').innerHTML+=(`<ol id='${primeiraletra}' >letra:${primeiraletra} </ol>`)//lista para alfabeto com id do respectivo
        
        document.querySelector('#'+primeiraletra).innerHTML+= '<li>'+addnomevalor+'</li>'
        
        
    }
    //ALERTA
    //window.alert(`letras adicionadas: (${letrasexistentes})nomes adicionados: (${nomesexistentes}) nomes Repetidos: (${nomesrepetidos})`)
    

}
//funçao para adicionar (ativos)
function ativo() {
    let addnomeatv = document.querySelector('#addnomeativos')
    let addnomevaloratv = String(addnomeatv.value)

    let primeiraletraatv = addnomevaloratv.substring(0,1)
    let idprimeiraletra = String(primeiraletraatv+"ativo")

    


    if (addnomevaloratv.length<=0|| primeiraletraatv >=0||primeiraletraatv<=100) {
        window.alert("insira algo, ou remova o numero")   
    }
    else if(nomesexistentesativos.includes(addnomevaloratv)){
        window.alert("este nome esta repetido")
        document.querySelector('#'+idprimeiraletra).innerHTML+= '<li id='+addnomevaloratv+'>'+addnomevaloratv+' (repetido)</li>'
        nomesrepetidosativos.push(addnomevaloratv)

    }
    else if(letrasexistentesativos.includes(primeiraletraatv)) {

        document.querySelector('#'+idprimeiraletra).innerHTML+= '<li id='+addnomevaloratv+'>'+addnomevaloratv+'</li>'
        nomesexistentesativos.push(addnomevaloratv)
        
    } else {
        letrasexistentesativos.push(primeiraletraatv)
        nomesexistentesativos.push(addnomevaloratv)
        document.querySelector('#listinhaativos').innerHTML+='<ol id='+idprimeiraletra+'>letra '+primeiraletraatv+':</ol>'//criando lista do alfabeto

        document.querySelector('#'+idprimeiraletra).innerHTML+= '<li id='+addnomevaloratv+'>'+addnomevaloratv+'</li>'//criando nome na lista do alfabeto
        
    }
    //ALERTA
    //window.alert(`letras adicionadas: (${letrasexistentesativos})nomes adicionados: (${nomesexistentesativos}) nomes Repetidos: (${nomesrepetidosativos})`)
    
}



//uma lista, adicionavel e editavel