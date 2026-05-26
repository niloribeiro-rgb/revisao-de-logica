function calcular(sinal) {
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)

    if (sinal == '+') {
        resultado = document.querySelector('#resultado').value = `${numero1 + numero2}`
    }
    if (sinal == '-') {
        resultado = document.querySelector('#resultado').value = `${numero1 - numero2}`
        //  alert("ola")
    }
    if (sinal == '*') {
        resultado = document.querySelector('#resultado').value = `${numero1 * numero2}`
    }
    if (sinal == '/') {
        resultado = document.querySelector('#resultado').value = `${numero1 / numero2}`
    }
}


function mediaNotas() {
    let aluno = document.querySelector('#aluno').value
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let nota3 = Number(document.querySelector('#nota3').value)

    let resultado3 = document.querySelector('#resultado3')
    let media = (nota1 + nota2 + nota3) / 3
    resultado3.innerHTML = `aluno: ${aluno} media:${media.toFixed(2)}`
}

function q4() {
    let quantidadeMinima = Number(prompt("quantidade minima"))
    let quantidadeMaxima = Number(prompt("quantidade maxima"))

    let media = (quantidadeMinima + quantidadeMaxima) / 2
    alert(`${media.toFixed(1)}`)
}
function q5() {
    alert("sua idade")
    let anos = Number(prompt("quantidade de anos"))
    let meses = Number(prompt("quantidade de meses a mais"))
    let dias = Number(prompt("quantidade de dias a mais"))

    let anosEmDias = anos * 365
    let mesesEmDias = meses * 30
    dias =
        alert(`${anosEmDias + mesesEmDias + dias}`)
}
function q6() {
    let num1 = Number(prompt("diga um numero. para soma dos quadrados."))
    let num2 = Number(prompt("diga outro numero. para soma dos quadrados."))

    alert(`${(num1 * num1) + (num2 * num2)}`)
}
function q7() {
    let num = Number(prompt("diga um lado do queadrado."))
    alert(`${(num * num)*2}`)
}
function q8() {
    let num = Number(prompt("diga um numero inteiro"))
    let divisao = num / 2
    let restoModulo = (num % 3)
    alert(`divisao por 2 ${divisao}`)
    alert(`resto e modulo ${restoModulo}`)
}
function q8() {
    let num = Number(prompt("diga um numero inteiro"))
    let divisao = num / 2
    let resto = (num % 3)
    alert(`divisao por 2 ${divisao}`)
    alert(`resto ${resto}`)
}
function q9() {
    let num = Number(prompt("diga um numero inteiro"))
    let divisao = num / 2
    let resto = (num % 2)
    alert(`divisao por 2: ${divisao}`)
    if(resto == 0){
    alert(`resto: ${resto}`)
    }
}
function q10() {
    let num = Number(prompt("diga um numero inteiro"))
   
    if(num % 2 == 0){
    alert(`${num} é par`)
    }
    else {
    alert(`${num} é impar`)
    }
}