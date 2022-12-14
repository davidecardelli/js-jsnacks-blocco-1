// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa.

const invitati = ["Aldo", "Giovanni", "Giacomo"];

const userChoice = document.getElementById('userChoice');
const listResult = document.getElementById('listResult');

userChoice.addEventListener('click' , function(){

    const userName = document.getElementById('userName').value;

    isInvited = false;

    for (let i = 0; i < invitati.length && !isInvited; i++) {
        if (userName === invitati[i]) {
            isInvited = true;
        }
    }

    const message = isInvited ? 'Entra, sei invitato' : 'Sono spiacente, non sei invitato!';
    console.log(message);
    listResult.innerText = message;
})
