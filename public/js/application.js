$(document).ready(function() {
  var view = new View()
  var event = new Event()
  var controller = new Controller(event, view)
  controller.bindListeners()
});

var addEvent = function(data){
  $('.eventName').prepend(data.name)
  $('.eventDate').prepend(data.date)
}

