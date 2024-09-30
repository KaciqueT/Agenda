const dados = document.querySelector("#dados")
const fundopopup = document.querySelector("#fundopopup")
const btnfiltro = document.querySelector("#btnfiltro")
const filtroNome = document.querySelector("#filtroNome")

// fetch("gestao.php")
// .then(res => res.json())
// .then(res =>{
//     console.log(res)
// })

const preencherdgv = (endpoint) =>{
    dados.innerHTML = ""
    //const endpointtodos = `http://127.0.0.1:1880/pesquisartodoscontatos`

    fetch(endpoint)
    .then(res => res.json())
    .then(res => {


        res.forEach((el) => {
            const linha = document.createElement("div")
            linha.setAttribute("class","linhadados")

            const c1 = document.createElement("div")
            c1.setAttribute("class","coluna c1")
            c1.innerHTML = el.n_id_contato
            linha.appendChild(c1)
            dados.appendChild(linha)

            const c2 = document.createElement("div")
            c2.setAttribute("class","coluna c2")
            c2.innerHTML = el.s_nome_contato
            linha.appendChild(c2)
            dados.appendChild(linha)

            const c3 = document.createElement("div")
            c3.setAttribute("class","coluna c3")
            c3.innerHTML = el.s_celular_contato
            linha.appendChild(c3)
            dados.appendChild(linha)

            const c4 = document.createElement("div")
            c4.setAttribute("class","coluna c4")
            c4.innerHTML = el.s_email_contato
            linha.appendChild(c4)
            dados.appendChild(linha)

            const c5 = document.createElement("div")
            c5.setAttribute("class","coluna c5")
            c5.innerHTML = el.dt_dtnasc_contato
            linha.appendChild(c5)
            dados.appendChild(linha)

            dados.appendChild(linha)
        })
    })
}

preencherdgv()


btnfiltro.addEventListener("click", (evt) => {
    if(filtroNome.value == ""){
        preencherdgv(`http://127.0.0.1:1880/pesquisartodoscontatos`)
    }else{
        preencherdgv(`http://127.0.0.1:1880/filtrarcontatos/${filtroNome.value}`)
    }
})