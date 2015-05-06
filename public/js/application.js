$(document).ready(function() {
  bindListeners()
  console.log("load")
});

var bindListeners = function(){
  $('.submit').bind('click', create)
}

var create = function(e){
  console.log(e)
  e.preventDefault()
}
