const btnGravar = document.querySelector("#btnGravar")
const btnCancelar = document.querySelector("#btnCancelar")

const f_nome = document.querySelector("#f_nome")
const f_contato = document.querySelector("#f_contato")
const f_email = document.querySelector("#f_email")
const f_data = document.querySelector("#f_data")

btnGravar.addEventListener("click", (evt) => {
    const dados = {
        "f_nome":f_nome.value,
        "f_contato":f_contato.value,
        "f_email":f_email.value,
        "f_data":f_data.value,
    }

    const cabecalho = {
        method:'POST',
        body:JSON.stringify(dados)
    }

    const endpoint = "http://127.0.0.1:1880/addcontatos"
    fetch(endpoint, cabecalho)
    .then(res => { 
        if(res.status==200){
            reset()
        }else{
            alert("Erro ao gravar novo contato.")
        }
    })
})

btnCancelar.addEventListener("click", (evt) => {
    reset()
})


const reset = () => {
    f_nome.value = ""
    f_nome.focus()
    f_contato.value = ""
    f_email.value = ""
    f_data.value = ""
}