var Model = function(){

};

Model.prototype = {
  create: function(callback){
    var form = $('.createForm')
    $.ajax({
      url: '/events/create',
      method: 'POST',
      data: $(form).serialize() 
    }).done(function(response){
      callback(response);
    })
  }
}

