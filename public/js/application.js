$(document).ready(function() {
  var view = new View()
  var event = new Event()
  var controller = new Controller()
  bindListeners()
});

var bindListeners = function(){
  $('.createForm').on('submit', function(submitEvent){
    submitEvent.preventDefault();
    var data = $(this).serialize();
    create(data)
  })
}

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

