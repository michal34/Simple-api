$('#check').click(function(){
  var name = $('#name').val();
  var gender1 = null

  $.get("https://api.genderize.io/?name=" + name, function(data, status){
    console.log(data);
  if (data.gender === 'male') {
    gender1 = "mężczyzny"
  }
  else {
    gender1 = "kobiety"
  }
  var list = $('#list');
  list.append('<li class="text"> Imię ' + name + ' należy do ' + gender1 + '</li>');

  });
});