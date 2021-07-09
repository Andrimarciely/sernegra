/*
Rotinas para o carregamento das atividades
*/

const SCHEDULE_KEY = 'scheduleDay'

splitScheduleData = data => {
    /*
    Separa a programação diária, um objeto para cada dia.
    */
    let splitedData = {}

    data.forEach(item =>  {
        let day = SCHEDULE_KEY + item.DIA 
        if (! splitedData[day]) splitedData[day] = []
        delete(item.DIA)
        splitedData[day].push({...item})
    })

    return splitedData
}

loadScheduleContent = jsonURL => {
    /*
    Preenche as tabelas da programaçno com os dados de un arquivo JSON carregado de
    'jsonURL'.
    */
    fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            if (!data.length) {
                return
            }
            
            Object.entries(splitScheduleData(data)).forEach(data => {
                let tableId = '#' + data[0]
                let value = data[1]                
                let table = new simpleDatatables.DataTable(tableId, {
                    data: {
                        headings: Object.keys(value[0]),
                        data: value.map(item => Object.values(item))
                    }
                })
                forceTableTranslation(table, LANGUAGE)
            })
        })
}