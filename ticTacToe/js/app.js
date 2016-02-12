/**
 * Created by Stéphanie on 29/01/2016.
 */
//Déclaration d'élement du DOM

//Création de la div conteneur du jeu
var $container = document.getElementById('container');
var $jeu = document.getElementById('jeu');

//Création de la grille
var $button = document.getElementById('reset');

var $x1y1 = document.createElement('div');
    $x1y1.setAttribute('id', '$x1y1');

var $x1y2 = document.createElement('div');
    $x1y2.setAttribute('id', '$x1y2');
    $x1y2.setAttribute('id', '$x1y2');

var $x1y3 = document.createElement('div');
    $x1y3.setAttribute('id', '$x1y3');


var $x2y1 = document.createElement('div');
    $x2y1.setAttribute('id', '$x2y1');

var $x2y2 = document.createElement('div');
    $x2y2.setAttribute('id', '$x2y2');

var $x2y3 = document.createElement('div');
    $x2y3.setAttribute('id', '$x2y3');

var $x3y1 = document.createElement('div');
    $x3y1.setAttribute('id', '$x3y1');

var $x3y2 = document.createElement('div');
    $x3y2.setAttribute('id', '$x3y2');

var $x3y3 = document.createElement('div');
    $x3y3.setAttribute('id', '$x3y3');

//Création de l'alerte1
var divAlert1 = document.createElement('div');
    divAlert1.style.visibility="hidden";
    divAlert1.setAttribute('id', 'alert1');
    divAlert1.classList.add('alert1');


var headerAlert1 = document.createElement('header');
var h21 = document.createElement('h2');
var h2Title1 = document.createTextNode('Saisissez votre pseudo : Joueur 1');

var inputAlert1 = document.createElement('input');
inputAlert1.setAttribute('type', 'text');
inputAlert1.setAttribute('id', 'nomJoueur1');
inputAlert1.classList.add('nom');

var button1 = document.createElement('button');
button1.setAttribute('id', 'valider1');
button1.classList.add('btnAlert1');
var buttonText1 = document.createTextNode('Valider');


$container.appendChild(divAlert1);
divAlert1.appendChild(headerAlert1);
headerAlert1.appendChild(h21);
h21.appendChild(h2Title1);
divAlert1.appendChild(inputAlert1);
divAlert1.appendChild(button1);
button1.appendChild(buttonText1);



//Création de l'alerte2
var divAlert2 = document.createElement('div');
    divAlert2.style.visibility="hidden";
    divAlert2.setAttribute('id', 'alert2');
    divAlert2.classList.add('alert2');


var headerAlert2 = document.createElement('header');
var h22 = document.createElement('h2');
var h2Title2 = document.createTextNode('Saisissez votre pseudo : Joueur 2');

var inputAlert2 = document.createElement('input');
inputAlert2.setAttribute('type', 'text');
inputAlert2.setAttribute('id', 'nomJoueur2');
inputAlert2.classList.add('nom');

var button2 = document.createElement('button');
button2.setAttribute('id', 'valider2');
button2.classList.add('btnAlert2');
var buttonText2 = document.createTextNode('Valider');


$container.appendChild(divAlert2);
divAlert2.appendChild(headerAlert2);
headerAlert2.appendChild(h22);
h22.appendChild(h2Title2);
divAlert2.appendChild(inputAlert2);
divAlert2.appendChild(button2);
button2.appendChild(buttonText2);



// les ajouts
$jeu.appendChild($x1y1);
$jeu.appendChild($x1y2);
$jeu.appendChild($x1y3);


$jeu.appendChild($x2y1);
$jeu.appendChild($x2y2);
$jeu.appendChild($x2y3);


$jeu.appendChild($x3y1);
$jeu.appendChild($x3y2);
$jeu.appendChild($x3y3);

/***************VAriables*************/

//Je récupère dans un tableau chaque ID de chaque case
var divs = $jeu.getElementsByTagName('div');
//console.log(divs[2]);
var player = 0;
var player1 = 'play1';
var player2 = 'play2';
var coup= 1;

//Function qui seclectionné la div selectionné
function selectionne(e){
    //Fonction écoute l'event et le r'envoie
    //Si le nombre impair c'est le joueur1 (ajoute class "rouge" sinon c'est le joueur2 (ajoute class "vert")
    //console.log('Nom de la div ' +  e.target.id);
    //console.log('N° du coup ' +  coup);

    //A chaque coup, on enregistre un coup de +
    coup = coup + 1;
    var divSelect = e.target;
    //console.log(divSelect);

    //Si le coup est PAIR alors on lui met le style RED
        if (coup % 2 == 0) {
            //je crée le joueur
            player = player1;
            //console.log('play ' + player1);

            //console.log(divSelect.className);
            if( (divSelect.classList.contains('player1') ) || (divSelect.classList.contains('player2')) ) {
                //console.log('la classe est presente  DESOLE PAS POSSIBLE');
                coup = coup - 1;
                alert('La case est déjà cliqué !');

            }else {
                divSelect.classList.add('player1');
                //console.log('la classe est PAS, AJOUTE CLASS');
            }

        }
        //Si le coup est IMPAIR alors on lui met le style GREEN
        else {

            player = player2;
            console.log('play ' + player2);

            if( (divSelect.classList.contains('player1') ) || (divSelect.classList.contains('player2')) ) {
                //console.log('la classe est presente  DESOLE PAS POSSIBLE');
                coup = coup - 1;
                alert('La case est déjà cliqué !');
            }else {
                divSelect.classList.add('player2');
                //console.log('la classe est PAS, AJOUTE CLASS');
            }
        }
    verify();
}


var $afChrono = document.getElementById('chrono');
var $affichage = document.getElementById('affichage');

//Function qui verify le jeu
function verify() {
    //Vérification de la ligne
    for(var i = 0; i <= 6; i = i + 3 ) {
        if (divs[i].className == 'player1' && divs[i + 1].className == 'player1' && divs[i + 2].className == 'player1') {
            coup = coup;
            alert('Bravo, tu as une ligne joueur 1');
            $affichage.innerHTML= "BRAVO vous avez gagné en min : " + min + " sec : " + sec;
            $chrono = clearTimeout(chrono);
            $afChrono.innerHTML = "Recommencer";
            reset();
        } else if (divs[i].className == 'player2' && divs[i + 1].className == 'player2' && divs[i + 2].className == 'player2') {
            alert('Bravo, tu as une ligne joueur 2');
            $affichage.innerHTML= "BRAVO vous avez gagné en  min : " + min + " sec : " + sec;
            $chrono = clearTimeout(chrono);
            $afChrono.innerHTML = "Recommencer";
            reset();
        }

    }
    //Vérification de la colonne
    for( i = 0; i <= 2; i = i + 1) {
        if (divs[i].className == 'player1' && divs[i + 3].className == 'player1' &&  divs[i + 6].className == 'player1')  {
            alert('Bravo, tu as une colonne joueur 1');
            $affichage.innerHTML= "BRAVO vous avez gagné en  min : " + min + " sec : " + sec;
            $chrono = clearTimeout(chrono);
            $afChrono.innerHTML = "Recommencer";
            reset();
        } else if(divs[i].className == 'player2' && divs[i + 3].className == 'player2' &&  divs[i + 6].className == 'player2')  {
            alert('Bravo, tu as une colonne joueur 2');
            $affichage.innerHTML= "BRAVO vous avez gagné en  min : " + min + " sec : " + sec;
            $chrono = clearTimeout(chrono);
            $afChrono.innerHTML = "Recommencer";
            reset();
        }
    }
    //Vérification des diagonales
    if( (divs[0].className == 'player1' && divs[4].className == 'player1' && divs[8].className =='player1') || (divs[0].className == 'player2' && divs[4].className == 'player2' && divs[8].className =='player2') ) {
        alert('Bravo, tu as une diagonale joueur ');
        $affichage.innerHTML= "BRAVO vous avez gagné en  min : " + min + " sec : " + sec;
        $chrono = clearTimeout(chrono);
        $afChrono.innerHTML = "Recommencer";
        reset();
        //if($chrono == true) {
        //    chrono();
        //}

    } else if( (divs[2].className == 'player1' && divs[4].className == 'player1'&& divs[6].className == 'player1')|| (divs[2].className == 'player2' && divs[4].className == 'player2'&& divs[6].className == 'player2')){
        alert('Bravo, tu as une diagonale joueur ');
        $affichage.innerHTML= "BRAVO vous avez gagné en  min : " + min + " sec : " + sec;
        $chrono = clearTimeout(chrono);
        $afChrono.innerHTML = "Recommencer";
        reset();
        //if($chrono == true) {
        //    chrono();
        //}
    }
    //Vérification de l'égalité
    if(coup >= 10){
        alert('Egalité');
        reset();
    }
}


//Function RESET
function reset() {
    //Je boucle le tableau de 'DIV'
    for(var i = 0, j = divs.length; i < j; i++){
        if(divs[i].classList.contains('player1') ){
            divs[i].classList.remove('player1');

        }
        //Si la class 'player2' existe alors la supprimer
        else if (divs[i].classList.contains('player2')){
            divs[i].classList.remove('player2');

        }
    }
    coup = 0;
    player1 = 0;
    player2 = 0;
    sec = 0;
    min = 0;
    $afChrono.innerHTML = "Recommencer";
}

var $chrono = document.getElementById('chrono');

//Fonction Chrono
var sec = 0;
var min = 0;
var hrs = 0;

function chrono() {

    var $chrono = document.getElementById('chrono');
    setInterval( function(){
        var sec = 0;

        sec++;
        if(sec >59){
            sec = 0;
            min++;
        }else if(min>59){
            min = 0;
            hrs++;
        }
        $chrono.innerHTML = " min : " + min + " sec : " + sec;
    },1000 );

}

function select() {
    //var divSelectTime = e.target;
    chrono();
    console.log( " si c'est selectionné, le chrono part ");
}


var $noms1 = document.getElementById('nomJoueur1');
var $noms2 = document.getElementById('nomJoueur2');
function nomJoueur1() {
        divAlert1.style.visibility = "visible";
}
function nomJoueur2() {
        divAlert2.style.visibility = "visible";

}




var $joueur1 = document.getElementById('joueur1');
var $joueur2 = document.getElementById('joueur2');
function recupNom1() {
   $joueur1.innerHTML = $noms1.value;
    divAlert1.style.visibility = "hidden";
    $noms1.value = "";
}
function recupNom2() {
   $joueur2.innerHTML = $noms2.value;
    divAlert2.style.visibility = "hidden";
    $noms2.value = "";
}






$jeu.addEventListener('click', selectionne, false);
//$chrono.addEventListener('click', select, false);
$chrono.addEventListener('click', chrono, false);
$button.addEventListener('click', reset, false);


$joueur1.addEventListener('click', nomJoueur1, false);
$joueur2.addEventListener('click', nomJoueur2, false);


var $valider1 = document.getElementById('valider1');
var $valider2 = document.getElementById('valider2');
$valider1.addEventListener('click', recupNom1, false);
$valider2.addEventListener('click', recupNom2, false);


