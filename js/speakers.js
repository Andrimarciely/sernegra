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