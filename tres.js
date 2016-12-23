function output (txt) {
  $("#out").append(txt).append('<br>')
}

$( document ).ready(function() {
for(i=0; i<=10; i++) {output(i*i)}
})
