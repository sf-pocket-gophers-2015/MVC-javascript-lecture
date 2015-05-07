$(document).ready(function() {
  var view = new View()
  var event = new Event()
  var controller = new Controller(event, view)
  controller.bindListeners()
});



var create = function(data) {
  var request = $.ajax({
    url: '/events/create',
    method: 'POST',
    data: data,
    dataType: 'json'
  })
  request.done(function(data){
    addEvent(data)
  })
  request.error(function(data){
    console.log("data not saved")
    console.log(data.status)
  })
}


var addEvent = function(data){
  $('.eventName').prepend(data.name)
  $('.eventDate').prepend(data.date)
}

