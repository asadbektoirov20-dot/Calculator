let inp = document.getElementById('ekran')

function qush(ll) {
    inp.value += ll

}
function uchir() {
    inp.value = ""
}

function qaytar() {
    inp.value = inp.value.slice(0, -1)
}

function teng() {
    inp.value = eval(inp.value)
}



