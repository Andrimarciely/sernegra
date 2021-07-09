/*
Cuida da localização do Simple-DataTables
*/

const LANGUAGE = "pt"

const translatedMessages = {
    pt: {
        placeholder: "Buscar...",
        perPage: "{select} itens por página",
        noRows: "Nenhum registro encontrado",
        info: "Mostrando de {start} até {end} de {rows} item(s)"
    }
}

forceTableTranslation = (table, language) => {
  /*
  Como o Simple-DataTables não tem opção de internacionalização, esta
  rotina cuida de alterar os valores das mensagens diretamente na
  instância (não é possível fazer na classe pois são constantes).
  */

    let messages = translatedMessages[language]

    if (messages){

        table.options.labels = messages

        if (table.options.searchable) {
            let searchElements = document.getElementsByClassName(
                "dataTable-input"
            )
            searchElements[0].placeholder = table.options.labels.placeholder
        }

        let dropElements = document.getElementsByClassName(
            "dataTable-dropdown"
        )

        if (dropElements[0]) {
            let selectElement = dropElements[0].children[0].children[0]
            let entiesPerPageElement = selectElement.nextSibling
            entiesPerPageElement.textContent = table
                .options
                .labels
                .perPage.split(/\{.+\}/)[1]
        }

        table.update()
    }
}