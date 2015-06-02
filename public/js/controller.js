var Controller = function(model, view){
  this.model = model
  this.view = view
};

Controller.prototype = {
  bindListeners: function(){
    $('.createForm').on('submit', this.create.bind(this))
  },
  create: function(event, callback){
    event.preventDefault()
    this.model.create(this.renderEvent.bind(this));
  },
  renderEvent: function(response){
    this.view.addEvent(response)
  }
}
