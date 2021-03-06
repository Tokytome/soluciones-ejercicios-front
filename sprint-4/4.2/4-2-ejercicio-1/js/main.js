'use strict';

class Square {
  // Método del perímetro, con un parámetros:
  // - Lado
  perimeter(side) {
    return side * 4;
  }

  // Método del área, con un parámetro:
  // - Lado
  area(side) {
    // Math.pow acepta dos valores y eleva el primero al segundo
    // Como es elevado al cuadrado podríamos haber usado side * side
    return Math.pow(side,2);
  }
}

// Creamos un objeto con nuestra clase Square
const square9 = new Square();

// Cálculo del perímetro (9 de lado y 4 lados)
console.log( `El perímetro de mi cuadrado de 9 m. de lado es ${square9.perimeter(9)} m.`);

// Cálculo del área (9 de lado)
console.log( `El área de mi cuadrado de 9 m. de lado es ${square9.area(9,)} m².`);
