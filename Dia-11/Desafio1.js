/* ### Exercícios: Nível 1
```js


```

1. Desestruture e atribua os elementos do array constantes a e, pi, gravidade, temperaturaCorporalHumana, temperaturaDeFervuraDaÁgua.
2. Desestruture e atribua os elementos do array países a fin, est, sw, den, nor.
3. Desestruture o objeto retângulo por suas propriedades ou chaves.
*/


const constantes = [2.72, 3.14, 9.81, 37, 100]
let [e, pi , gravidade, temperaturaCorporalHumana, temperaturaDeFervuraDaÁgua] = constantes
console.log(e, pi, gravidade, temperaturaCorporalHumana, temperaturaDeFervuraDaÁgua);


const países = ['Finlândia', 'Estônia', 'Suécia', 'Dinamarca', 'Noruega']
const retângulo = {
  largura: 20,
  altura: 10,
  área: 200,
  perímetro: 60
}

let [fin,est,sw,den,nor] = países
console.log(fin,est,sw,den,nor);

let {largura, altura, área, perímetro} = retângulo
console.log(largura, altura, área, perímetro);
