var Controller = function(view, model){
  this.view = new View()
  this.model = new Model()
}

Controller.prototype = {
  bindListeners: function() {
    test
    $('.createForm').bind('submit', create)
  }
}