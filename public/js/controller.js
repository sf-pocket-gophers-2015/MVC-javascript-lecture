var Controller = function(event, view) {
  this.event = event;
  this.view = view;
}

Controller.prototype = {
  bindListeners: function(){
    var controller = this
    $('.createForm').on('submit', function(submitEvent){
        submitEvent.preventDefault();
        var data = $(this).serialize();
        controller.createEvent(data);
    })
  },
  createEvent: function(data) {
    debugger
    var view = this.view
    this.event.create(data, function(event){
      view.renderEvent(event)
    })
  }
}