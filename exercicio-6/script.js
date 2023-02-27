const n = window.prompt('Digite um numero para obter a tabuada');
console.log(`Tabuada de ${n}`);

for(let i=1; i<=10; i++){
   var resultado = n * i;
   console.log(resultado);
}