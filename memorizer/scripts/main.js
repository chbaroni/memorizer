document.querySelector('h1').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});

let monImage = document.querySelector('img');

monImage.addEventListener('click', function() {
    let monSrc = monImage.getAttribute('src');
    if (monSrc === 'images/memorywall2.png') {
      monImage.setAttribute('src', 'images/astronaute2.png');
    } else {
      monImage.setAttribute('src', 'images/memorywall2.png');
    }
});


let monImage2 = document.getElementById('elsa');

monImage2.addEventListener('click', function() {
    let monSrc2 = monImage2.getAttribute('src');
    if (monSrc2 === 'images/iphonex2.png') {
      monImage2.setAttribute('src', 'images/iphonex3.png');
    } else {
      monImage2.setAttribute('src', 'images/iphonex2.png');
    }
});

let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
  let monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Memorizer de ' + monNom;
}

if (!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Memorizer de ' + nomEnregistré;
}

monBouton.addEventListener('click', function() {
  définirNomUtilisateur();
  
});