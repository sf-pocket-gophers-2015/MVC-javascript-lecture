var View = function(){

}

View.prototype = {
  addEvent: function(response){
    response = JSON.parse(response)
    $('.eventName').prepend(response.name)
    $('.eventDate').prepend(response.date)
  }
}