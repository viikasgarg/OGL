//ADD YOUR CODE HERE.
$.ready(){


  $.getJSON('/static/guide.json', function(data) {
      //data is the JSON string
      console.log(data);
    });
}
