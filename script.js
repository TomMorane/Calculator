// Begining with the value for nothing
let previousValue = '';
let currentValue = '';
let operator = '';

document.addEventListener('DOMContentLoaded', function () {
  // selecting every html pieces into the js
  let currentShow = document.querySelector('.current');
  let previousShow = document.querySelector('.previous');
  let clearSelection = document.querySelector('.clear');
  let operators = document.querySelectorAll('.operator');
  let numbers = document.querySelectorAll('.number');
  let equal = document.querySelector('.equal');

  // Selecting the numbers 0 to 9 and stack it
  numbers.forEach((number) =>
    number.addEventListener('click', function (e) {
      handleNumber(e.target.textContent);
      currentShow.textContent = currentValue;
    })
  );

  // Deleting and reseting everything
  clearSelection.addEventListener('click', function (e) {
    previousValue = '';
    currentValue = '';
    operator = '';
    currentShow.textContent = currentValue;
    previousShow.textContent = previousValue;
  });

  // Selecting the +, -, /, X and stacking it
  operators.forEach((op) =>
    op.addEventListener('click', function (e) {
      handleOperator(e.target.textContent);

      previousShow.textContent = previousValue + ' ' + operator;
      currentShow.textContent = currentValue;
    })
  );

  // Trying to show the result pressing =
  equal.addEventListener('click', function () {
    equalCalculation();
    previousShow.textContent = '';
    currentShow.textContent = previousValue;
  });
});

// function math about the number, putin maxLength at most
function handleNumber(num) {
  let maxLength = 7;
  num = num.replace(/[^0-9]/g, '');
  if (currentValue.length < maxLength) {
    currentValue += num;
  }
}

// function math about stacking which operator choosed
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

// function equal showing a result depending on the operator
function equalCalculation() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  operator = operator.replace(/\s+/g, ' ').trim();
  //   operator = 'x';
  if (operator === '+') {
    previousValue += currentValue;
  } else if (operator === '-') {
    previousValue -= currentValue;
  } else if (operator === 'x') {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  // Putting the answer back to a string and deleting the high amount of number
  previousValue = highAmountNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

// function math of deleting high amount of number
function highAmountNumber(num) {
  return Math.round(num * 1000) / 1000;
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

// 15 FCKING BUG with operator

// 16 correct for the high amount of number (need transform into number)

// 17 correct the length of the result
