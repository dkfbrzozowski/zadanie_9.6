
var add = document.getElementById('addElem'),
	list = document.getElementById('list'),
	number = list.getElementsByTagName('li');


add.addEventListener('click', function() {
  var element = document.createElement('li');
  element.innerHTML = 'item' + ' ' + number.length;
  list.appendChild(element);
});