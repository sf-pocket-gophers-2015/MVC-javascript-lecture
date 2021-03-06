$(document).ready(function() {
  bindListeners()
  console.log("load")
});

var bindListeners = function(){
  $('.createForm').bind('submit', create)
}

var create = function(e) {
  e.preventDefault()
  $.ajax({
    url: '/events/create',
    method: 'POST',
    data: $(this).serialize() 
  }).done(function(data){
    addEvent(data)
  })
}


var addEvent = function(data){
  data = JSON.parse(data)
  $('.eventName').prepend(data.name)
  $('.eventDate').prepend(data.date)
}

