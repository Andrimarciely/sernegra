/*
Rotina para manipular a modal de palestrantes
*/

const SITE_MODAL = "siteModal"
const SPEAKER_PHOTO = "speakerPhoto"
const SPEAKER_NAME = "speakerName"
const SPEAKER_BIO = "speakerBio"


var siteModal = new bootstrap.Modal(document.getElementById(SITE_MODAL), {
  keyboard: false
})


loadSpeakerData = (speakerList) => {
    /*
    Para deixar a parte dos palestrantes menos repetitiva, esta rotina
    cuida de fazer a carga das fotos, do nome e de configurar a chamada
    para a janela modal de ambos a partir dos dados dentro de <h4></h4>
    */
    
    speakerList.forEach(speaker =>{
        
        let imageElement =document.getElementById("photo" + speaker)
        let dataElement = document.getElementById("speaker" + speaker)
        
        dataElement.textContent = dataElement.dataset.name
        imageElement.src = dataElement.dataset.photo
        imageElement.onclick = () => { openSpeakerModal("speaker" + speaker) }
    })

}

openSpeakerModal = (speakerId) => {
    /*
    Usa a estrutrutua do HTML5 e do Bootstrap para popular os dados de
    cada palestrante dinamicamente na janela modal.
    */    
    
    let speakerElement = document.getElementById(speakerId)
    
    if (speakerElement) {
        
        let dataSet = speakerElement.dataset
        
        let speakerPhoto = document.getElementById(SPEAKER_PHOTO)
        let speakerName = document.getElementById(SPEAKER_NAME)
        let speakerBio = document.getElementById(SPEAKER_BIO)
        
        speakerPhoto.src = dataSet.photo
        speakerName.textContent = dataSet.name
        speakerBio.textContent = dataSet.bio
        
        siteModal.handleUpdate()
        siteModal.toggle()
    }
}

// atualiza a lista dos palestrantes
loadSpeakerData(["LuanaTolentino"])