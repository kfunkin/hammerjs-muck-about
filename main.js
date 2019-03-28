var weFunk = document.getElementById('logo');

var ff = new Hammer(weFunk);

ff.on("panleft panright swipeleft swiperight tap press",
function(ev) {
  weFunk.textContent = ev.type +"gesture detected";
});

/*ff.on("panleft panright tap press",
function(ev) {
  console.log(ev);
});*/
