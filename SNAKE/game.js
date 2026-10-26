//////////////////////// INITIALIZATION //////////////////////////////

var tailleCase = 25 // taille d'une case en pixels
var nbCasesH = 20 // nombre de cases Horizontales
var nbCasesV = 20 // carré
var tickIndex = 0 // pour compter le nombres de tick

var serpent = {
    tete: {
        x: 5,
        y: 5
    }, // position de la tête
    taille: 1, // taille de base == 1
    direction: {
        x: -1,
        y: 0
    }, // direction en vecteur
};

// puis on écrit le style de l'arène grâce à jQuery
$('#arena').css({
    height: (nbCasesV + 1) * tailleCase,
    width: (nbCasesH + 1) * tailleCase
})

$('#startGame').fadeIn(1500);





/////////////////////// TICK : LOGIQUE PRINCIPALE ////////////////////////

function tick() {
    //if (pause) return // la pause est géré par defaut par la geeklib
    tickIndex++; // on ajoute 1 à chaque tick
    $('#tick').text(tickIndex);

    redrawSnake(tickIndex);

    // rechercher ce qu'est le modulo (%) - comment nous est il utile?
    if (tickIndex % 5 == 0) {
        dessinerPomme(tickIndex);
    }
}

var interval;
// on doit cliquer pour lancer le tick
$('#startGame').click(function () {
    // Si on click sur le bouton StartGame alors on cache le Rideau en 1000 ms
    $('#rideauGame').fadeOut(1000);
    // j'execute tick() toutes les 100 ms (attention de ne pas mettre les parenthèses à la fonction !)
    interval = setInterval(tick, 100);
});


///////////////////////// SOUS-ROUTINES : details /////////////////////////////////////


///// Association des touches & de la direction

var upArrow = function () {
    serpent.direction = {
        x: 0,
        y: -1
    };
};
var downArrow = function () {
    serpent.direction = {
        x: 0,
        y: 1
    };
};
var rightArrow = function () {
    serpent.direction = {
        x: 1,
        y: 0
    };
};
var leftArrow = function () {
    serpent.direction = {
        x: -1,
        y: 0
    };
};
key(38, upArrow);
key(40, downArrow);
key(37, leftArrow);
key(39, rightArrow);




/// Le serpent
function redrawSnake(tickIndex) {

    // on définit la nouvelle position de la tête
    // en ajoutant une case dans la direction de chaque vecteur
    serpent.tete = {
        x: serpent.tete.x + serpent.direction.x,
        y: serpent.tete.y + serpent.direction.y
    };

    /// quand on dépasse le bord gauche
    // on se "teleporte" sur le bord droit
    if (serpent.tete.x == -1) {
        serpent.tete.x = nbCasesH;
    }

    // bord droit
    if (serpent.tete.x == nbCasesH + 1) {
        serpent.tete.x = 0;
    }
    // bord haut
    if (serpent.tete.y == -1) {
        serpent.tete.y = nbCasesV;
    }
    // bord bas
    if (serpent.tete.y == nbCasesV + 1) {
        serpent.tete.y = 0;
    }

    // on change l'ancienne tete en corps
    $('.serpent-tete').removeClass('serpent-tete').addClass('serpent-corps');

    // On crée une nouvelle tête
    var tete = $('<div class="serpent-tete tick' + tickIndex +
        ' x' + serpent.tete.x +
        ' y' + serpent.tete.y +
        '"></div>');

    // on la positionne en css
    tete.css({
        left: serpent.tete.x * tailleCase,
        top: serpent.tete.y * tailleCase,
        width: tailleCase,
        height: tailleCase
    });

    // et bien sûr on l'append au body, sinon on ne verra rien
    $('#arena').append(tete);

    // on test si la tete est sur une pomme
    var selectorPositionTete = '.x' + serpent.tete.x + '.y' + serpent.tete.y;
    if ($(selectorPositionTete + '.pomme').length > 0) {
        $(selectorPositionTete + '.pomme').remove();
        serpent.taille++;

        // mise à jour du score
        $('#score').text(serpent.taille);


    }

    if ($(selectorPositionTete + '.serpent-corps').length > 0) {
        // GAME OVER TETE touche le CORPS
        //alert('GAME OVER');
        var gameoverJQ = $('<div>GAME OVER</div>');
        $('#arena').html(gameoverJQ);
        clearInterval(interval);
    }



    var removeTick = tickIndex - serpent.taille;
    $('.tick' + removeTick).remove();



}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var pommePosition = {};
/// Les Pommes
function dessinerPomme(tickIndex) {


    pommePosition.x = getRandomInt(nbCasesH);
    pommePosition.y = getRandomInt(nbCasesV);
    // On crée une nouvelle tête
    var pomme = $('<div class="pomme ' +
        ' x' + pommePosition.x +
        ' y' + pommePosition.y +
        '"></div>');
    //// .....

    // on la positionne en css
    pomme.css({
        // nombre entier correspondant à la case -> converti en unité de pixel
        left: pommePosition.x * tailleCase,
        top: pommePosition.y * tailleCase,
        width: tailleCase,
        height: tailleCase
    });

    // et bien sûr on l'append au body, sinon on ne verra rien
    $('#arena').append(pomme);

    setTimeout(function () {
        // pomme disparaisse
        pomme.remove();
    }, 4000);



}