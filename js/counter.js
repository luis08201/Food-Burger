let contadorUno = document.getElementById("contadorUno");
let contadorDos = document.getElementById("contadorDos");
let contadorTres = document.getElementById("contadorTres");
let cant1 = 0,
  cant2 = 0,
  cant3 = 0;

let tiempo1 = setInterval(() => {
  contadorUno.textContent = cant1 += 1;

  if (cant1 === 7) {
    clearInterval(tiempo1);
  }
}, 130);

let tiempo2 = setInterval(() => {
  contadorDos.textContent = cant2 += 1;

  if (cant2 === 109) {
    clearInterval(tiempo2);
  }
}, 10);

let tiempo3 = setInterval(() => {
  contadorTres.textContent = cant3 += 1;

  if (cant3 === 35) {
    clearInterval(tiempo3);
  }
}, 40);





