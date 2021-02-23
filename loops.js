let array = []

function forLoop(array) {
  for ( let i = 0; i < 25; i++) {
       array.push(`I am ${i} strange loop${ i === 1 ? '' : 's'}.`)}
     return array;
   }
let n = 100
function whileLoop(n) {
while (n > 0) {
  console.log(--n);}
  return 'done';
}

function doWhileLoop(num) {
  let i = 0;

  function incrementVariable() {
    i = i + i;
    return i;
  }

  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= num);
}
