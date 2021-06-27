//slowBundle.js
console.log('executing script');
document.getElementById('root').replaceChildren("DONE");
//alert('Waiting');
const start = Date.now();
while (Date.now() - start < 2000) {

}