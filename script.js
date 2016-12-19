
function $G(elem) {
  var newElem = elem.split(' ').join(',').split(',');
  var a = newElem[0].substr(1);
  console.log(document.getElementsByClassName(a));

}

$G('.class .second-class')
