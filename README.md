# tax-round-br [![NPM version][npm-image]][npm-url]
Rounding of federal taxes in Brazil uses asymmetric arithmetic round.

Rounding of federal taxes in Brazil is discussed in the IN 1145/20155 : Instrução Normativa nº 1145/2011
Rounding should be done based on the 2nd decimal place as follows:
Evaluate the 3rd decimal place:
If it is less then 5, the value of previous decimal place should be kept.
If it is greater then 5, the value of the previous decimal place should be increased by one.
If it is equal to 5, the next decimal place should be evaluate the fourth decimal place as follows:
If it's value is between 0 and 4, the value of the first decimal place should be kept.
If it's value is between 5 and 9, the value of the first decimal place should be increased by one.

The original text in Portuguese
"Parágrafo único. O arredondamento do algarismo da casa decimal de que trata o inciso I do caput será efetuado levando-se em consideração o algarismo relativo à 2ª (segunda) casa decimal, do modo a seguir:
I - menor que 5 (cinco), permanecerá o algarismo da 1ª (primeira) casa decimal;
II - maior que 5 (cinco), acrescentar-se-á uma unidade ao algarismo da 1ª (primeira) casa decimal; e
III - igual a 5 (cinco), deverá ser analisada a 3ª (terceira) casa decimal, da seguinte maneira:
a) quando o algarismo estiver compreendido entre 0 (zero) e 4 (quatro), permanecerá o algarismo da 1ª (primeira) casa decimal; e
b) quando o algarismo estiver compreendido entre 5 (cinco) e 9 (nove), acrescentar-se-á uma unidade ao algarismo da 1ª (primeira) casa decimal." (NR)".

##Use

###To build
```bash npm install -d ```

###To run the tests
```bash gulp ```

###To use in your project

## Required [![Dependency Status][david-image]][david-url] [![devDependency Status][david-image-dev]][david-url-dev]

 * node.js 4+
 
```bash
    npm install tax-round-br
```

In your code:

```javascript
let roundTax = require('tax-round-br').round;

let valueRounded = roundTax(100/3);

```
