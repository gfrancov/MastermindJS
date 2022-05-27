var colorSelected;
var random;
var actualRow = 0;

const totalColors = [
    '#ff0000', // Vermell
    '#8FBE00', // Verd
    '#993394', // Lila
    '#F8CA00', // Groc
    '#008C9E', // Blau
    '#6b4d39' // Marró
];

const posHoritzontals = [
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

const posVerticals = [
    '130',
    '210',
    '290',
    '370',
    '450'
];

$(document).ready(function(){

    random = generateRandom();

    console.log(random);

});

function changeButtonColor(colorSent) {

    colorSelected = totalColors[colorSent];
    $('body').css('background-color', `${colorSelected}`);



}

function generateRandom() {

    arrRandom = [];

    for(let i = 0; i < 5; i++) {

        arrRandom.push(Math.round(Math.random()*5));

    }

    return arrRandom;

}