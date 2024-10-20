/* IMC = peso / (altura * altura)

elabore um algoritmo que dado o peso e a altura de umm adulto, mostre sua condição de acordo com a tabela abaixo.

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal/
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade mórbida;

*/


const calcular = document.getElementById('calcular')


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')
    
    
    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = "Abaixo do peso"
        } else if (valorIMC > 18.5 && valorIMC < 25 ){
            classificacao = "no Peso normal"
        } else if (valorIMC > 25 && valorIMC < 30){
            classificacao = "com Excesso de peso"
        } else if (valorIMC > 30 && valorIMC < 35){
            classificacao = "em Obesidade classe I"
        } else if (valorIMC > 35 && valorIMC < 40){
            classificacao = "em Obesidade classe II"
        } else if (valorIMC >= 40){
            classificacao = "em Obesidade classe III"
        }

    
    
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao};`


    } else {
        resultado.textContent = "Preencha todos os dados";
    }
}    

calcular.addEventListener('click', imc);

