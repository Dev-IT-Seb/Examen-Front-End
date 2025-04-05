//--------------------------//
//--------- SCRIPT ---------//
//-- Conceptualisation
// 1er Après remplissage du formulaire et en cliquant sur suivant, le block du formulaire disparait et
// un autre réapparait avec l'affichage des options :
//  Nombre de personnes
//  Le choix de la chambre (2 hôtels)
//  Date depart et arrivee
//  + les différentes options (Repas + Chauffeur + Visite guidée)
//  Après le remplissage des données, une vérification des champs s'effectuent et le formulaire est envoyé en cliquant sur le bouton.
// Si certaines conditions ne sont pas remplies, un message d'erreur apparait en spécifiant les champs à modifier.
//---------------------------//
//---  A AJOUTER LOCALSTORAGE POUR GARDER EN CACHE DES DONNEES SAISIES DE L'UTILISATEUR
//-----------------------------------------------------------------------------//
//-- Sources documentation :
// (isNaN) : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN
//-----------------------------------------------------------------------------//
//--- Selecteurs HMTL Structure formulaire
// Block du formulaire visible au début
let formBlock  = document.getElementById("formBlock");
// Bouton formulaire suivant et envoyer
let btnform = document.getElementById("nextForm");
// Affichage du block Options
let blockOptions = document.querySelector(".form-JS");
// Resultat du formulaire (Verification)
let resultatForm = document.getElementById("result");
//-----------------------------------------------------------------------------//
//--- Selecteurs HTML (Information utilisateur)
// Identite de l'utilisateur
const lastname = document.getElementById("nom");
const firstname = document.getElementById("prenom");
// Coordonnees de l'utilisateur
const streetNumber = document.getElementById("numberstreet");
const streerAddress = document.getElementById("street");
const codePostal = document.getElementById("codepostal");
const city = document.getElementById("ville"); 
// Contact de l'utilisateur
const courriel = document.getElementById("email");
const phone = document.getElementById("phone");
//-----------------------------------------------------------------------------//
//--- Selecteurs HTML Bouton Formulaire
let ctaSendForm = document.getElementById("txtSend");
//-----------------------------------------------------------------------------//
//
// Bouton Action du Formulaire
if (btnform) {
    // Evenement du click du bouton du formulaire
    btnform.addEventListener("click", function(event) {

        // Empêche le rechargement de la page
        event.preventDefault();

        // Vide le contenu du bloc HTML
        resultatForm.innerHTML = "";
        //--------------------------------//
        //-- LANCEMENT DES FUNCTIONS
        VerifIdentity();
        VerifAdress();



        //--------------------------------//
        //
        if(formBlock.classList.contains("visible")){

            //BLOCK HTML SECTION SUIVANTE
            let formContentOption  = `
                <h2>vos options</h2>
                <form action="" class="options-hotel">
                    <div class="row-form">
                        <label for="">Combien de personnes seront présentes ?</label>
                        <select name="nbuser" id="nb-user">
                            <option value="">Nombre de personnes:</option>
                            <option value="userone">1</option>
                            <option value="usertwo">2</option>
                        </select>
                    </div>
                    <div class="row-form">
                        <label for="">Choisissez votre chambre:</label>
                        <div class="room-choix">
                            <label for="roomigloo">Igloo</label>
                            <input type="checkbox" name="igloo" id="roomIgloo">
                            <label for="roomlapone">Lapone</label>
                            <input type="checkbox" name="la" id="roomLapone">
                        </div>
                    </div>
                    <div class="row-form">
                        <div class="datechoix">
                            <div class="departure-choix">
                                <label for="datedeparture">Date de départ:</label>
                                <input type="date" name="date">
                            </div>
                            <div class="arrive-choix">
                                <label for="datearrive">Date de d'arrivée:</label>
                                <input type="date" name="date">
                            </div>
                        </div>
                    </div>
                    <div class="row-form"> 
                        <label for="chauffeur">Chauffeur</label>
                        <input type="checkbox" name="optionsejour" value="chauffeur">
                    </div>
                    <div class="row-form">
                        <h3>Choix des repas</h3>
                        <div class= "optionrepas">
                            <label for="petitdej">Petit déjeuner</label>
                            <input type="checkbox" name="optionsejour" value="petitdej">
                        </div>
                        <div class= "optionrepas">
                            <label for="repasmidi">Repas du midi</label>
                            <input type="checkbox" name="optionsejour" value="midirepas">
                        </div>
                        <div class= "optionrepas">
                            <label for="repasoir">Repas du soir</label>
                            <input type="checkbox" name="optionsejour" value="soirrepas">
                        </div>
                        <div class= "optionrepas">
                            <label for="repasponctuel">Repas ponctuel</label>
                            <input type="checkbox" name="optionsejour" value="ponctuelrepas">
                        </div>
                    </div>
                    <div class="row-form">
                        <label for="repasponctuel">Visite guidée du domaine et du parc</label>
                        <input type="checkbox" name="visitedomaineparc" value="domaineparc"> 
                    </div>
                </form>
            `;
            //
            //Changement du texte du bouton "Envoyer le resultat"
            ctaSendForm.textContent = "Envoyer";
            //
            // Fait disparaitre le 1er block du formulaire
            formBlock.style.display = "none"; 
            //
            //Ajout du block HTML/JS (OPTIONS)
            blockOptions.innerHTML = formContentOption;
        }
    });
};
//-----------------------------------------------------------------------------//
//--- Function Verification Nom et Prenom 
function VerifIdentity() {
    // Vider le contenu du bloc HTML
    let contentHTML = "";

    // Vérification du prénom
    if (firstname.value.length >= 2 && firstname.value.length <= 50) {
        contentHTML += `<p>Votre prénom est valide : ${firstname.value}</p>`;
    } else {
        contentHTML += `<p>Erreur : Le prénom doit contenir entre 2 et 50 caractères.</p>`;
    }

    // Vérification du nom
    if (lastname.value.length >= 2 && lastname.value.length <= 50) {
        contentHTML += `<p>Votre nom est valide : ${lastname.value}</p>`;
    } else {
        contentHTML += `<p>Erreur : Le nom doit contenir entre 2 et 50 caractères.</p>`;
    }

    // Affichage des résultats dans le bloc HTML
    resultatForm.innerHTML += contentHTML;
}
//-----------------------------------------------------------------------------//
//--- Function Verification Adresse
function VerifAdress() {
    // Vider le contenu du bloc HTML
    let contentHTML = "";

    // Vérification du numéro de rue
    if (!isNaN(streetNumber.value) && streetNumber.value !== "") {
        contentHTML += `<p>Numéro de rue : ${streetNumber.value}</p>`;
    } else {
        contentHTML += `<p>Erreur : Le numéro de rue doit être un chiffre.</p>`;
    }

    // Affichage des résultats dans le bloc HTML
    resultatForm.innerHTML += contentHTML;
}
//-----------------------------------------------------------------------------//