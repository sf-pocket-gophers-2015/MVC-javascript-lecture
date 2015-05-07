var Event = function() {}

Event.prototype = {
  create: function(data, callback) {
    var request = $.ajax({
      url: '/events/create',
      method: 'POST',
      data: data,
      dataType: 'json'
    })

    request.done(function(event){
      callback(event)
    })

    request.error(function(data){
      console.log("data not saved")
      console.log(data.status)
    })
  }
}