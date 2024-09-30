const dados = document.querySelector("#dados")
const fundopopup = document.querySelector("#fundopopup")
const f_id = document.querySelector("#f_id")
const f_nome = document.querySelector("#f_nome")
const f_contato = document.querySelector("#f_contato")
const f_email = document.querySelector("#f_email")
const f_data = document.querySelector("#f_data")

const btngestaoGravar = document.querySelector("#btngestaoGravar")
const btngestaoCancelar = document.querySelector("#btngestaoCancelar")

btngestaoGravar.addEventListener("click", () => {
    fundopopup.classList.add("ocultar")

    const endpoint = `http://127.0.0.1:1880/atualizarcontatos/${f_id.value}/${f_nome.value}/${f_contato.value}/${f_email.value}/${f_data.value}`
    fetch(endpoint)
    .then(res=>{
        if(res.status == 200){
            preencherdgv()
        }else{
            alert("Erro ao atualizar os dados")
        }
    })

})

btngestaoCancelar.addEventListener("click", () => {
    fundopopup.classList.add("ocultar")
})

const preencherdgv = () =>{
    const endpoint = `http://127.0.0.1:1880/pesquisartodoscontatos`

    fetch(endpoint)
    .then(res => res.json())
    .then(res => {

        dados.innerHTML = ""

        res.forEach((el) => {
            const linha = document.createElement("div")
            linha.setAttribute("class","linhadados")

            const c1 = document.createElement("div")
            c1.setAttribute("class","coluna cg1")
            c1.innerHTML = el.n_id_contato
            linha.appendChild(c1)
            dados.appendChild(linha)

            const c2 = document.createElement("div")
            c2.setAttribute("class","coluna cg2")
            c2.innerHTML = el.s_nome_contato
            linha.appendChild(c2)
            dados.appendChild(linha)

            const c3 = document.createElement("div")
            c3.setAttribute("class","coluna cg3")
            c3.innerHTML = el.s_celular_contato
            linha.appendChild(c3)
            dados.appendChild(linha)

            const c4 = document.createElement("div")
            c4.setAttribute("class","coluna cg4")
            c4.innerHTML = el.s_email_contato
            linha.appendChild(c4)
            dados.appendChild(linha)

            const c5 = document.createElement("div")
            c5.setAttribute("class","coluna cg5")
            c5.innerHTML = el.dt_dtnasc_contato
            linha.appendChild(c5)
            dados.appendChild(linha)

            const c6 = document.createElement("div")
            c6.setAttribute("class","coluna cg6 c_op")
            const imgdelete = document.createElement("img")
            imgdelete.setAttribute("src", "Imagens/deletar.svg")
            imgdelete.setAttribute("class", "iconeop")

            imgdelete.addEventListener("click", (evt) => {
                //console.log(evt.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML) -> forma de pegar o ID
                //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML) -> forma de pegar o ID
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                removerContato(id)
            })

            const imgeditar = document.createElement("img")
            imgeditar.setAttribute("src", "Imagens/editar.svg")
            imgeditar.setAttribute("class", "iconeop")

            imgeditar.addEventListener("click", (evt) => {
                fundopopup.classList.remove("ocultar")
                const dadospopup = [...evt.target.parentNode.parentNode.childNodes]
                f_id.value = dadospopup[0].innerHTML
                f_nome.value = dadospopup[1].innerHTML
                f_contato.value = dadospopup[2].innerHTML
                f_email.value = dadospopup[3].innerHTML
                f_data.value = dadospopup[4].innerHTML

                // f_id.value = dadospopup[0].innerHTML
                // f_nome.setAttribute("placeholder", dadospopup[1].innerHTML)
                // f_contato.setAttribute("placeholder", dadospopup[2].innerHTML)
                // f_email.setAttribute("placeholder", dadospopup[3].innerHTML)
                // f_data.setAttribute("placeholder", dadospopup[4].innerHTML)
                
            })

            c6.appendChild(imgdelete)
            c6.appendChild(imgeditar)
            linha.appendChild(c6)
            dados.appendChild(linha)
        })
    })
}

preencherdgv()

const removerContato = (id) => {
    const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`
    fetch(endpoint)
    .then(res => {
        if(res.status == 200){
            //remover
            preencherdgv()
        }
    })
}
