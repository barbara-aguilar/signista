import sinastria from './resources/sinastria'

const selectSignoMeu = document.getElementById("selectSignoMeu")
const selectSignoPar = document.getElementById("selectSignoPar")
const submit = document.getElementById("buttonSubmit")


submit.addEventListener("click", function() {
    const match = sinastria.find(item => item.signoMeu === selectSignoMeu.value && item.signoPar === selectSignoPar.value ) 
    console.log(match)
} )

