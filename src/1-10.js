// 1) Dado un arreglo de número devolver otro arreglo con los numeros menores a 5
exports.menoresACinco = (arreglo) => {
  return arreglo.filter((el) => el < 5);
};

// 2) Obtener el número mayor de un array
exports.numeroMayor = (arreglo) => {
  return Math.max(...arreglo);
};

// 3) Intersecta dos vectores y devuelve los elementos comunes en un tercer vector
exports.intersectarVectores = (vector1, vector2) => {
  return vector1.filter((el) => vector2.includes(el));
};

// 4) Sumar los numero consecutivos entre 0 y un numero dado incluido este número
exports.sumarConsecutivos = (num) => {
  let acumulado = 0;
  for (let i = 1; i <= num; i++) {
    acumulado += i;
  }
  return acumulado;
};

// 5) verificar si una oración es palindroma
exports.oracionPalindroma = (oracion) => {
  const oracionMinuscula = oracion
    .split(" ")
    .join("")
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const oracionReversa = oracionMinuscula.split("").reverse().join("");

  if (oracionMinuscula === oracionReversa) {
    return true;
  }
  return false;
};

// 6) Contar cada letra de una oración y devolver el resultado en un objeto
exports.contarLetras = (oracion) => {
  let conteo = {};
  const minuscula = oracion
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (let i = 0; i < minuscula.length; i++) {
    if (conteo[minuscula[i]]) {
      conteo[minuscula[i]] = conteo[minuscula[i]] + 1;
    } else {
      conteo[minuscula[i]] = 1;
    }
  }
  return conteo;
};

// 7) multiplicar dos numero sin usar la operacion de multiplicacion
exports.multiplicarSumando = (num1, num2) => {
  let res = 0;

  for (let i = 0; i < Math.abs(num2); i++) {
    res = res + Math.abs(num1);
  }

  if (Math.sign(num1) === Math.sign(num2)) {
    return res;
  } else {
    return -res;
  }
};

// 8) Elevar un numero positivo dado a una potencia positiva dada unicamente con operaciones de suma
exports.elevarAPotencia = (base, potencia) => {
  let res = base;
  if (potencia === 0) {
    return 1;
  }

  const multiplicar = (num1, num2) => {
    let multRes = 0;
    for (let i = 0; i < num2; i++) {
      multRes = multRes + num1;
    }
    return multRes;
  };

  for (let i = 1; i < potencia; i++) {
    res = multiplicar(res, base);
  }

  return res;
};

// 9) Elevar a una potencia dada cada elemento de una matriz de números positivos dada
exports.elevarMatriz = (vector, potencia) => {
  const elevada = vector.map((el) => Math.pow(el, potencia));
  return elevada;
};

// 10) Determinar cuantos numeros pares e impares hay en un arreglo dado
exports.paresImpares = (arr) => {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? pares++ : impares++;
  }
  return { pares, impares };
};
