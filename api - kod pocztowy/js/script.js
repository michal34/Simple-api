$('#check').click(function(){
  var kod = $('#kod').val();

  $.get("https://api.zippopotam.us/pl/" + kod, function(data, status){
    console.log(data);

  $("#list").empty()
    
  var list = $('#list');
  list.append('<li class="text"> Kod pocztowy ' + kod + ' należy do miasta '+ data.places[0]["place name"] + '</li>');

  });
});