function View() {}

View.prototype = {
  renderEvent: function(event){
    console.log('REDENRING EVENT', event);
    // $('.eventName').prepend(data.name)
    // $('.eventDate').prepend(data.date)
  }
}