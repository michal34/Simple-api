$('#check').click(function(){

  $.get("https://randomuser.me/api/", function(data, status){
    console.log(data);

  $("#list").empty()

  var list = $('#list');
  list.append('<li class="text">' + data.results[0]["gender"] + " " + data.results[0]["name"]["first"] + " " + data.results[0]["phone"] 
  + "<img src=" + data.results[0]["picture"]["large"] + "></img>"+ data.results.forEach(callback[thisArg]) + '</li>');

  });
});

