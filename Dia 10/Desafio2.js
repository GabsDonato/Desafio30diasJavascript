/*### Exercícios: Nível 2

1. Encontre a união de a e b.
2. Encontre a interseção de a e b.
3. Encontre a diferença de a em relação a b.
 */

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


var A = new Set(a)
var B = new Set(b)

const c = a.filter((num) => !B.has(num))
var C = new Set(c)

console.log(C);



