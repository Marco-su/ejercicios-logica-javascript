const {
  menoresACinco,
  numeroMayor,
  intersectarVectores,
  sumarConsecutivos,
  oracionPalindroma,
  contarLetras,
  multiplicarSumando,
  elevarAPotencia,
  elevarMatriz,
  paresImpares,
} = require("../src/1-10");

describe("Ejercicios 1-10", () => {
  test("Menores a 5 de [1,2,5,7] es [1,2]", () => {
    expect(menoresACinco([1, 2, 5, 7])).toEqual([1, 2]);
  });

  test("Numero mayor de [3,8,1] es 8", () => {
    expect(numeroMayor([3, 8, 1])).toBe(8);
  });

  test('La intersección de [1,6, "A"] y ["A", 6, 8,"o"] es [6, "A"]', () => {
    expect(intersectarVectores([1, 6, "A"], ["A", 6, 8, "o"])).toEqual([
      6,
      "A",
    ]);
  });

  test("La suma de los números consecutivos hasta el 5 es 15", () => {
    expect(sumarConsecutivos(5)).toBe(15);
  });

  test('Oracion "Anita lava la tina" es palindroma', () => {
    expect(oracionPalindroma("Ánita lava la tina")).toBe(true);
  });

  test('Oracion "Jose es aviador" no es palindroma', () => {
    expect(oracionPalindroma("Jose es aviador")).toBe(false);
  });

  test('Al contar las letras de "Amanda" obtengo {a:3, m:1, n:1, d:1}', () => {
    expect(contarLetras("Amanda")).toEqual({ a: 3, m: 1, n: 1, d: 1 });
  });

  test("8 * 6 = 48", () => {
    expect(multiplicarSumando(8, 6)).toBe(48);
  });

  test("8 * -6 = -48", () => {
    expect(multiplicarSumando(8, -6)).toBe(-48);
  });

  test("-8 * -6 = 48", () => {
    expect(multiplicarSumando(-8, -6)).toBe(48);
  });

  test("2 ^ 3 = 8", () => {
    expect(elevarAPotencia(2, 3)).toBe(8);
  });

  test("2 ^ 0 = 1", () => {
    expect(elevarAPotencia(2, 0)).toBe(1);
  });

  test("El vector [1, 2, 3, 4, 5] al cuadrado es [1, 4, 9, 16, 25]", () => {
    expect(elevarMatriz([1, 2, 3, 4, 5], 2)).toEqual([1, 4, 9, 16, 25]);
  });

  test("En [1,2,3,4,5] hay 2 pares y tres impares", () => {
    expect(paresImpares([1, 2, 3, 4, 5])).toEqual({ pares: 2, impares: 3 });
  });
});
