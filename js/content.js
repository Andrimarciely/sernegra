/*
Rotinas para o carregamento de conteúdo
*/

forceTranslation = (table) => {
  /*
  Como o Simple-DataTables não tem opção de internacionalização, esta
  rotina cuida de alterar os valores das mensagens diretamente na
  instância (não é possível fazer na classe pois são constantes).
  */

  // novas mensagens
  table.options.labels = {
    placeholder: "Buscar...",
    perPage: "{select} itens por página",
    noRows: "Nenhum registro encontrado",
    info: "Mostrando de {start} até {end} de {rows} item(s)"
  }

  // altera o 'placeholder' da caixa de pesquisa se ela existe
  if (table.options.searchable) {
    elements = document.getElementsByClassName("dataTable-input")
    elements[0].placeholder = table.options.labels.placeholder
  }

  // TODO: alterar o "entries per page" para refletir 'perPage'

  // força a atualização da tabela.
  table.update()
}

loadContent = (tableName, jsonURL) => {
  /*
  Preenche uma tabela no DOM de ID 'tableName' com os dados de um
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
  forceTranslation(table)
  })
}