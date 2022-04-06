// INFORMAÇÕES NECESSÁRIAS PARA O PROJETO

// IMC = Peso / altura ² 

// resultado:
// <17 muito abaixo do Peso
// <18,5 abaixo do peso
// <25 peso normal
// <30 acima do peso
// <35 obesidade 1
// <40 obesidade 2 (severa)
// 40 + obesidade 3 (mórbida)


const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const resultado = document.getElementById("resultado")




//FUNÇÃO- Essa função esta linkada com o atributo 'onClick' que corresponde ao botão 'Calcular'
//Aqui ela recebe as constante inputWeight(peso) e inputHeight (altura) com '.value' ou seja, irá receber o número que o usuário digitar
//Em seguida crio uma let calcImc que recebe o calculo das variaveis 'weight (peso) / (height (altura) ao quadrado **2)'


function calcular(){
    let weight = inputWeight.value;
    let height = inputHeight.value;

    let calcImc = weight / (height **2);
    
//INNERHTML- O primeiro inner vai mostrar na tela o resultado do calculo
//           O segundo inner vai mostrar o Resultado da função criada para denominar a situação em peso do usuário
    resultado.innerHTML = `<p class="imc">Seu IMC é:  ${calcImc .toFixed(2) }</p>`;
    resultado.innerHTML += `<p class="imc2">${verificaNivel(calcImc)}</p>`
    
}

// Aqui criei uma array com os nomes para cada nivels (a contagem de uma array sempre começa com 0 (zero))
let situacao =["Muito abaixo do peso",
            "Abaixo do peso", 
            "Peso normal", 
            "Acima do peso", 
            "Obesidade 1", 
            "Obesidade 2(Severa)", 
            "Obesidade 3 (Mórbida)"]




// Partindo do príncipio da array, criei uma variavel com o nome "nivel" recebendo o valor de 0 (zero)
let nivel = 0



//Essa função recebe como argumento a variavel calcImc e dentroda chave recebe if/else 
//Ela esta retornando a variavel 'situacao' com o valor de array [nivel],ou seja se nivel for = a 0 ele vai pegar a primeira array "Muito abaixo do peso" e assim por diante

function verificaNivel(calcImc){
        
    if (calcImc < 17){
        nivel = 0
        return situacao[nivel] 
        
    
    }else if (calcImc < 18.5){
        nivel =1
        return situacao[nivel]

    }else if (calcImc < 25){
        nivel =2 
        return situacao[nivel]

    }else if (calcImc < 30){
         nivel = 3
         return situacao[nivel]

    }else if (calcImc < 35){
         nivel =4
         return situacao[nivel]

    }else if (calcImc < 40){
         nivel = 5
         return situacao[nivel]
    }else{
         nivel =6
         return situacao[nivel]
    }

}

//Função pra limpar os campos preenchidos e o Resultado
function limpar(){
  resultado.innerHTML="";
  inputHeight.value = "";
  inputWeight.value= "";
}


