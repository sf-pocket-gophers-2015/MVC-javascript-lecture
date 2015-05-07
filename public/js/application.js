$(document).ready(function() {
  var view = new View()
  var model = new Model()
  var controller = new Controller(view, model)
  controller.bindListeners()
});

