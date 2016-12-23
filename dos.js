function output (txt) {
  out = document.getElementById("out")
  out.appendChild(document.createTextNode(txt));
  out.appendChild(document.createElement('br'));
}

for(i=0; i<=10; i++) {output(i*i)}
