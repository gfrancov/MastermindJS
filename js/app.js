var colorSelected;
var random;
var actualArray = [];
var actualRow = 0;

const totalColors = [
    '#ff0000', // Vermell
    '#8FBE00', // Verd
    '#993394', // Lila
    '#F8CA00', // Groc
    '#008C9E', // Blau
    '#6b4d39' // Marró
];

const posVerticals = [

    '650',
    '575',
    '500',
    '425',
    '350',
    '275',
    '200',
    '125',
    '50'
];

const posHoritzontals = [
    '50',
    '130',
    '210',
    '290',
    '370'
];

$(document).ready(function(){

    random = generateRandom();

    console.log(random);

});

function changeButtonColor(colorSent) {

    colorSelected = totalColors[colorSent];
    $('body').css('background-color', `${colorSelected}`);
    var posActual = actualArray.length;
    actualArray.push(colorSent);

    const novaBola = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    novaBola.setAttribute("cx", posHoritzontals[posActual] );
    novaBola.setAttribute("cy", posVerticals[actualRow] );
    novaBola.setAttribute("r", '30');
    novaBola.setAttribute("stroke", "black");
    novaBola.setAttribute("stroke-width", "3");
    novaBola.setAttribute("fill", colorSelected);

    document.getElementById('mastermind').appendChild(novaBola);


    if(actualArray.length >= 5) {

        console.log(random);
        console.log(actualArray);
        var resultats = comprovation();
        actualRow++;
        actualArray = [];

    }

    

}

function generateRandom() {
    arrRandom = [];
    for(let i = 0; i < 5; i++) {
        arrRandom.push(Math.round(Math.random()*5));
    }
    return arrRandom;
}

function comprovation() {

    var encert = 0;
    var existeix = 0;

    // Comprovació de cada posició
    for(let i = 0; i < 5; i++) {

        if(random[i] == actualArray[i]) {
            encert++;
        }

        for(let j = 0; j < 5; j++) {

            if(random[i] == actualArray[j]) {
                existeix++;
                j = 5;
            }

        }

    }

    console.log("Encerts: " + encert);
    console.log("Existeix: " + existeix);

    if(encert == 5) {

        Swal.fire({        
            type: 'success',
            title: '¡Has guanyat el joc!',
            showConfirmButton: false
         }).then( (result) => {
            location.reload();
         });

    }

    if(actualRow == 8) {

        Swal.fire({        
            type: 'error',
            title: '¡Has perdut el joc!',
            showConfirmButton: false
         }).then( (result) => {
            location.reload();
         });

    }

    return [encert, existeix];


}