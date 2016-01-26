$('button').click(function() {
  $(this).toggleClass('clicked');
  $('button p').text(function(i, text) {
    return text === "Done!" ? "Trunk" : "Done!";
  });
});