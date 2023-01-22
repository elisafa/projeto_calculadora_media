const form = document.getElementById("form-atividade")
const imgAprovado = `<img src="./images/aprovado.png" alt="imoji aprovado" />`
const imgReprovado = `<img src="./images/reprovado.png" alt="imoji aprovado" />`

const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`
let linhas = ""

const atividades = []
const notas = []

function atualizarTabela(){
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
}

function adicionarLinha(){
  const inputNomeAtividade = document.getElementById('nome-atividade')
  const inputNotaAtividade = document.getElementById('nota-atividade')

  if(atividades.includes(inputNomeAtividade.value)){
    alert(`A atividade ${inputNomeAtividade.value} já foi incluida`)
  }else{
     atividades.push(inputNomeAtividade.value)
     notas.push(parseFloat(inputNotaAtividade.value))
     let linha = `<tr>`
     linha += `<td>${inputNomeAtividade.value}</td>`
     linha += `<td>${inputNotaAtividade.value}</td>`
     linha += `<td>${inputNotaAtividade.value >=7 ? imgAprovado : imgReprovado}</td>`
     linha += `</tr>`
     linhas += linha
    }
    inputNomeAtividade.value = ""
    inputNotaAtividade.value = ""
}

function calculaMediaFinal(){
  let somaNotas = 0
  for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
  }
  return somaNotas / notas.length
}

function atualizaMediaFinal(){
  const mediaFinal = calculaMediaFinal()
  document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2)
  document.getElementById("media-final-resultado").innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado
}

form.addEventListener('submit', function(e){
  e.preventDefault()
 adicionarLinha()
 atualizarTabela()
 atualizaMediaFinal()
})

