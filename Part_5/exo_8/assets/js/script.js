function myFunction() {
  var elmnt = document.getElementById("formClone");
  var cln = elmnt.cloneNode(true);
  document.body.appendChild(cln);
}