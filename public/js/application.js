$(document).ready(function() {
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
  $.ajax({
    url: '/events/create',
    method: 'POST',
    data: data,
    dataType: 'json'
  }).done(function(data){
    addEvent(data)
  })
}


var addEvent = function(data){
  $('.eventName').prepend(data.name)
  $('.eventDate').prepend(data.date)
}

