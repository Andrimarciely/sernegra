/*
Rotinas para o carregamento da tabela de empreendedores
*/

loadTableContent = (tableName, jsonURL) => {
    /*
    Preenche u/ma tabela no DOM de ID 'tableName' com os dados de um
    arquivo JSON carregado de 'jsonURL'.
    */
    fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            if (!data.length) {
                return
            }
            let table = new simpleDatatables.DataTable(tableName, {
                data: {
                    headings: Object.keys(data[0]),
                    data: data.map(item => Object.values(item))
                }
            })
            
        forceTableTranslation(table, LANGUAGE)
    })
}