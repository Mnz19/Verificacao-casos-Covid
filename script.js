const tabela = document.getElementById("tabela");
let dados = []
totalCasos = 0


fetch("https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true")   
    .then(res => {
        return res.json()
    })
    .then(data => {
        dados = data
        for (const item of dados.infectedByRegion) {
            const linhaTable = document.createElement("tr");
            const estado = document.createElement("td");
            const casos = document.createElement("td");
            estado.textContent = item.state;
            casos.textContent = item.count;

            totalCasos += parseInt(item.count)
            tabela.appendChild(linhaTable);
            linhaTable.appendChild(estado);
            linhaTable.appendChild(casos);
            document.getElementById("total").innerHTML = "<strong>Total de casos: " + totalCasos;
    }
    })

