//--------------------------//
//--------- SCRIPT ---------//
//-- Conceptualisation
// 1er Après remplissage du formulaire et en cliquant sur suivant, le block du formulaire disparait et
// un autre réapparait avec :
//  Le choix de l'hotel (2 hôtels)
//  Prix (2 prix)
//  Nombre de personnes
//  Date depart et arrivee
//-----------------------------------------------------------------------------//
// Sources documentation :
//isNaN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN
//
//
//
//-----------------------------------------------------------------------------//
//--- Selecteurs html structure formulaire
// Resultat formulaire
let resultatForm = document.getElementById("result");
// Block formulaire
let formulaire  = document.getElementById("formulaires");
// Bouton formulaire
let btnform = document.getElementById("sendForm");
//-----------------------------------------------------------------------------//
//--- Selecteurs HTML infos utilisateur
// Identity
const lastname = document.getElementById("nom");
const firstname = document.getElementById("prenom");
// Address info
const streetNumber = document.getElementById("numberstreet");
const streerAddress = document.getElementById("street");
const codePostal = document.getElementById("codepostal");
const city = document.getElementById("ville"); 
// Contact
const courriel = document.getElementById("email");
const phone = document.getElementById("phone");
//-----------------------------------------------------------------------------//
// Bouton Action du Formulaire
if (btnform) {
    // Evenement du click du bouton du formulaire
    btnform.addEventListener("click", function(event) {
        // Empêche le rechargement de la page
        event.preventDefault();

        // Vider le contenu du bloc HTML
        resultatForm.innerHTML = "";

        // Vérification des champs
        VerifIdentity();
        VerifAdress();
    });
};
//-----------------------------------------------------------------------------//
// Fonction de validation du formulaire
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
// Fonction de vérification de l'adresse
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