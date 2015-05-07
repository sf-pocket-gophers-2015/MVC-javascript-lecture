function Model() {

}

Model.prototype = {

  create: function(data, callback) {
    var request = $.ajax({
      url: '/events/create',
      method: 'POST',
      data: data,
      dataType: 'json',
    });

    request.done(function(event){
      callback(event);
    });

    request.error(function(xhr){
      callback('fucked!');
    });
    
  }
}