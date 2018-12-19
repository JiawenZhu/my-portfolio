var txt;
function preload() {
  txt = loadStrings("/book1/book1.txt");
}
function setup() {
  createP(join(txt, "<br/>"));
}