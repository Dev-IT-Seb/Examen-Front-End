//--------------------------//
//--------- SCRIPT ---------//
//Conceptualisation
// 1er Après remplissage du formulaire et en cliquant sur suivant, le block du formulaire disparait et
// un autre réapparait avec :
//  Le choix de l'hotel (2 hôtels)
//  Prix (2 prix)
//  Nombre de personnes
//  Date depart et arrivee
//
//--------------------------//
//--- Selecteurs
//formulaire
let formulaire  = document.getElementById("formulaires");
//bouton formulaire
let btnform = document.getElementById("sendForm");
// Input formulaire
const lastname = document.getElementById("nom");
const firstname = document.getElementById("prenom");
const adressPostal = document.getElementById("formulaire");
const codePostal = document.getElementById("codepostal");
const city = document.getElementById("ville"); 
const courriel = document.getElementById("email");
const phone = document.getElementById("phone");
//--------------------------//
//
if (btnform){

    //Ecoute l'evenement du bouton du formulaire
    btnform.addEventListener("click", function(event){
        
        //Empeche le rechargement de la page
        event.preventDefault();

        //Enleve le 1er block du formulaire
        formulaire.style.display = "none";


        console.log(firstname.value);







    });
};