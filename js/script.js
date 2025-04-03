//--------------------------//
//--------- SCRIPT ---------//
//Conceptualisation
// 1er Après remplissage du formulaire et en cliquant sur suivant, le block du formulaire disparait et
// un autre réapparait avec :
//  Le choix de l'hotel (2 hôtels)
//  Prix (2 prix)
//  Nombre de personnes
//  Date depart et arrivee
//--------------------------//
//--- Selecteurs
//BLock ormulaire
let formulaire  = document.getElementById("formulaires");
// Resultat formulaire
let resultatForm = document.getElementById("result");
//Bouton formulaire
let btnform = document.getElementById("sendForm");
// Input formulaire
const lastname = document.getElementById("nom");
const firstname = document.getElementById("prenom");
const adressPostal = document.getElementById("formulaire");
const codePostal = document.getElementById("codepostal");
const city = document.getElementById("ville"); 
const courriel = document.getElementById("email");
const phone = document.getElementById("phone");
//-----------------------------------------------------------------------------//
//TABLEAU ERREUR
let TableauError = [];
//
if (btnform){

    //Ecoute l'evenement du bouton du formulaire
    btnform.addEventListener("click", function(event){
        
        //Empeche le rechargement de la page
        //event.preventDefault();

        //Vider le contenue du tableau
        //resultatForm.innerHTML = "";

        //Function Nom
        Name()

        //Enleve le 1er block du formulaire
        //formulaire.style.display = "none";

    });
};
//-----------------------------------------------------------------------------//
// FUNCTION VERIF PRENOM ET NOM
function Name(){

    let contentHTML = "";

    if (lastname.value.length >= 2 && lastname.value.length <= 50 && firstname.value.length >= 2 && firstname.value.length <= 50){

        contentHTML = `<p>TEST</p>`;

    }else {
        TableauError.push(lastname.value);
        TableauError.push(firstname.value);
    }
    //Affichage du resultat
    resultatForm.innerHTML += contentHTML;

}
//-----------------------------------------------------------------------------//