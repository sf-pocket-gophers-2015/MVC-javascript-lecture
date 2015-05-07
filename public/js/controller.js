function Controller(view, Event) {
  this.view = view;
  this.Event = Event;
}

Controller.prototype = {
  
  bindListeners: function() {
    var controller = this;
    $('.createForm').on('submit', function(submitEvent){
      submitEvent.preventDefault();
      var data = $(this).serialize();
      controller.createEvent(data);
    });
  },

  createEvent: function(data) {
    var view = this.view;
    this.Event.create(data, function(event){
      view.renderEvent(event);
    });
  }


};