let previousValue = '';
let currentValue = '';
let currentOperator = '';

document.addEventListener('DOMContentLoaded', function () {
  currentShow = document.querySelector('.current');
  previousShow = document.querySelector('.previous');
  clearSelection = document.querySelector('.clear');
  operators = document.querySelectorAll('.operator');
  numbers = document.querySelectorAll('.number');
  equal = document.querySelector('.equal');
  dot = document.querySelector('.dot');

  numbers.forEach((number) =>
    number.addEventListener('click', function (e) {
      handleNumber(e.target.textContent);
      currentShow.textContent = currentValue;
    })
  );

  clearSelection.addEventListener('click', function (e) {
    previousValue = '';
    currentValue = '';
    currentShow.textContent = currentValue;
    previousShow.textContent = previousValue;
  });

  operators.forEach((ope) =>
    ope.addEventListener('click', function (e) {
      handleOperator(e.target.textContent);
      previousShow.textContent = previousValue + ' ' + operator;
      currentShow.textContent = currentValue;
    })
  );
});

function handleOperator(opera) {
  operator = opera;
  previousValue = currentValue;
  currentValue = '';
}

function handleNumber(num) {
  let maxLength = 7;
  num = num.replace(/[^0-9]/g, '');
  if (currentValue.length < maxLength) {
    currentValue += num;
  } else {
    console.log('bug');
  }
}

// }
// 1 : Après avoir préparer tout mon html et css (via tailwind)
//     Je nomme tout mes boutons par rapport à leurs values :
// current (valeur actualisée)
//  previous (ancienne valeur)
//  clear (bouton clear)
//  operator (+ - / X)
//  number (chiffre 0 à 9)
// equal (égal)
// dot (. pour les décimales)
// Une fois nommée, je les call dans mon js via un DomContentLoaded
// et un querySelector

// 2 : j'assigne des valeurs null a des fonctions changeantes (previous, current, operators)

// 3 : je veux ajouter un event sur base de click pour les nombres
// !!!!!!!!!!!!!!!!!!!! numbers.FOREACH !!!!!!!!!!!!!!!!!!

// 4 : je veux que ma fonction affiche le bouton sélectionner (target.text content)

// 5 je dois créer une fonction à appeler

// 6 je veux que les chiffres ne soit pas dans ma console.log mais dans currentValue
// current.value.textContent = num

// 7 je veux qu'a chaque click, la valeur s'ajoute mais ne supprime pas l'ancienne
// currentValue += num

// 8 je veux donner une limite au nombre d'input possible

// 9 je fais pareil pour les opérations

// 10 en créant ma fonction pour les opérations, je veux que toute ma current value, quand je click sur un
// opérateur, elle aille en previousShow

// 11 reset ensuite la current Value

// 12 je veux l'appeler et rajouter petit à petit.

// 13 Je veux ajouter le bouton clear

// 14 Je veux ajouter le bouton = et calculer les opérations.
