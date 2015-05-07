var View = function() {}

View.prototype = {
  renderEvent: function(data) {
    $('.eventName').prepend(data.name)
    $('.eventDate').prepend(data.date)
  }
}