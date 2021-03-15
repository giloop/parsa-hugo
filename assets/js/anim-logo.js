// Récupération de l'élément correspondant au logo
// var svgDoc = document.getElementById('logo-header').contentDocument;
var svgDoc = document.getElementById('logo-header');
svgDoc.onmouseover = logoOver; // Fonction lancée au survol de la souris
svgDoc.onmouseout = logoOut; //  Fonction lancée à la sortie de la souris

function logoOver() {
    // Survol de souris : Modifie des classes de styles des éléments 
    svgDoc.getElementById('txt-G-1').classList.remove('bleu');
    svgDoc.getElementById('txt-G-1').classList.remove('bleu');
    svgDoc.getElementById('txt-o-1').classList.remove('bleu');
    svgDoc.getElementById('txt-o-2').classList.remove('bleu');
    svgDoc.getElementById('txt-G-1').classList.add('vert');
    svgDoc.getElementById('txt-G-2').classList.add('rose');
    svgDoc.getElementById('txt-o-1').classList.add('vert');
    svgDoc.getElementById('txt-o-2').classList.add('rose');
    svgDoc.getElementById('txt-G-1').classList.remove('t0');
    svgDoc.getElementById('txt-G-2').classList.remove('t0');
    svgDoc.getElementById('txt-G-1').classList.add('tG1');
    svgDoc.getElementById('txt-G-2').classList.add('tG2');    
}

function logoOut() {
    // Sortie de souris : Restaure les classes de styles des éléments 
    svgDoc.getElementById('txt-G-1').classList.remove('vert');
    svgDoc.getElementById('txt-G-2').classList.remove('rose');
    svgDoc.getElementById('txt-o-1').classList.remove('vert');
    svgDoc.getElementById('txt-o-2').classList.remove('rose');
    svgDoc.getElementById('txt-G-1').classList.add('bleu');
    svgDoc.getElementById('txt-G-2').classList.add('bleu');
    svgDoc.getElementById('txt-o-1').classList.add('bleu');
    svgDoc.getElementById('txt-o-2').classList.add('bleu');
    svgDoc.getElementById('txt-G-1').classList.remove('tG1');
    svgDoc.getElementById('txt-G-2').classList.remove('tG2');
    svgDoc.getElementById('txt-G-1').classList.add('t0');
    svgDoc.getElementById('txt-G-2').classList.add('t0');
}