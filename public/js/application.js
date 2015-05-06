$(document).ready(function() {
  var view = new View
  var model = new Model
  var controller = new Controller(view, model)
});

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

var test = console.log("test")