$(document).ready(function() {
  var model = new Model()
  var view = new View()
  var controller = new Controller(model, view)  
  controller.bindListeners()
  console.log("load")
});

