var Controller = function(event, view) {}

Controller.prototype = {
  bindListeners: function(){
  $('.createForm').on('submit', function(submitEvent){
    submitEvent.preventDefault();
    var data = $(this).serialize();
    create(data)
  })
}
}