const tabela = document.getElementById("tabela")
let dados = []
const button = document.querySelector('#button')

async function getData(){
    let res = await fetch("https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true")
    .then(res =>{
        return res.json()
    }).then(data =>{
        dados = data
        const tabelaContainer = document.querySelector(".table-container")
        tabela.classList.add("click")   
        tabelaContainer.classList.add("table-container1")
        const linhaTable = document.createElement("tr")
        const estadoTitle = document.createElement("th")
        const casosTitle = document.createElement("th")

        estadoTitle.textContent = "Estado"
        casosTitle.textContent = "Casos"

        tabela.appendChild(linhaTable)
        linhaTable.appendChild(estadoTitle)
        linhaTable.appendChild(casosTitle)

        for(const dado of dados.infectedByRegion){
            const linhaTable = document.createElement("tr")
            const estado = document.createElement("td")
            const casos = document.createElement("td")
            
            estado.textContent = dado.state
            casos.textContent = dado.count
            
            tabela.appendChild(linhaTable)
            linhaTable.appendChild(estado)
            linhaTable.appendChild(casos)
            
            
        }
    })
}
button.addEventListener('click', () => {
    button.setAttribute('disabled', '')
    button.addEventListener
    getData()
})
