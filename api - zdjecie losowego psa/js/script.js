$('#check').click(function(){

  $.get("https://dog.ceo/api/breeds/image/random", function(data, status){

  $("#list").empty();
    
  var list = $('#list');
  list.append('<li class="text">' + "<img src=" + data.message + "></img>" + '</li>');

  });
});