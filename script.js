function autoSize(texto) {
    
    if(texto.scrollHeight > texto.offsetHeight){
        texto.rows +=1;
    }
 
  
}

function cripografar(id){
    var texto = document.getElementById(id).value;
    
    var resultado = texto.split('')

    var cripografar = resultado.map(function(letra){
        if(letra === 'e'){
           return  'enter'
        }else if (letra === 'i'){
            return 'imes'
        }
        else if (letra === 'a'){
            return 'ai'
        }
        else if (letra === 'o'){
            return 'ober'
        }
        else if (letra === 'u'){
            return 'ufat'
        }else{
            return letra
        }
    })
    cripografar = cripografar.join('')
/*
    var palavraSecreta = cripografar
    var desventando = palavraSecreta
    for (let index = 0; index < cripografar.length; index++) {
        
        if(desventando.includes('enter')){
            
            console.log('true');
         }else if (desventando.includes('imes')){
            
            console.log('true');
         }
         else if (desventando.includes('ai')){
            desventando = desventando.replace('ai','a')
            console.log('true');
         }
         else if (desventando.includes('ober')){
            desventando = desventando.replace('ober','o')
            console.log('true');
         }
         else if (desventando.includes('ufat')){
           
            console.log('true');
         }
        
    }
    */
    teste = 'caisai'
    regex = /ai/g
    //console.log(teste.replace(regex,'a'));
    //console.log(teste.replace(regex,'a'));

    document.getElementById('resultado').value = cripografar
    document.getElementById(id).value = ""

    if(texto == ""){
        document.getElementById("resultadoVazio").style.display = "block"
        document.getElementById("comResultado").style.display = "none"
    }else{
        document.getElementById("resultadoVazio").style.display = "none"
        document.getElementById("comResultado").style.display = "block"
    }

}


function descriptografar(id){
    var texto = document.getElementById(id).value;
    
   


    var palavraSecreta = texto
    var desventando = palavraSecreta
    var i = 0
    for (let index = 0; index < palavraSecreta.length; index++) {
        while( i < palavraSecreta.length ){
        if(desventando.includes('enter')){
            desventando = desventando.replace('enter','e')
            console.log('true');
         }else if (desventando.includes('imes')){
            desventando = desventando.replace('imes','i')
            console.log('true');
         }
         else if (desventando.includes('ai')){
            desventando = desventando.replace('ai','a')
            console.log('true');
         }
         else if (desventando.includes('ober')){
            desventando = desventando.replace('ober','o')
            console.log('true');
         }
         else if (desventando.includes('ufat')){
            desventando = desventando.replace('ufat','u')
            console.log('true');
         }
         i++
        }
        console.log(desventando);
    }
    
    teste = 'caisai'
    regex = /ai/g
    //console.log(teste.replace(regex,'a'));
    //console.log(teste.replace(regex,'a'));
    document.getElementById('resultado').value = desventando
    document.getElementById(id).value = ""
    if(texto == ""){
        document.getElementById("resultadoVazio").style.display = "block"
        document.getElementById("comResultado").style.display = "none"
    }else{
        document.getElementById("resultadoVazio").style.display = "none"
        document.getElementById("comResultado").style.display = "block"
    }

}

function copiar(id){
    var texto = document.getElementById(id).value;
    console.log(texto);
    navigator.clipboard.writeText(texto)
    
}