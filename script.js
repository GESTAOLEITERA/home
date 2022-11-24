let gasto = window.document.querySelector("#gasto")
let cotacaoLeite = window.document.querySelector("#preco")
let litrosLeite = window.document.querySelector("#producao")
let botaoCalcular = window.document.querySelector("#calc")
let telaResultado = window.document.querySelector("#resultado")



botaoCalcular.addEventListener("click", function(){
    // litrosLeite.value ? litrosLeite.value.replace(",", ".") : litrosLeite.value
    let leiteValue = cotacaoLeite.value.replace(",", ".")
    
   
    let resultado = (leiteValue * litrosLeite.value) - gasto.value
    telaResultado.value = resultado
})