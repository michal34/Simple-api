$('#check').click(function(){
  var title = $('#title').val();
  var picture = $('#picture');
  var list1 = $('#list1');

  $.get("http://www.omdbapi.com/?t=" + title + "&apikey=788acb0", function(data){
    console.log(data);

  $("#picture").empty();
  $("#list1").empty();
  
  picture.append('<p>' + "<img src=" + data.Poster + "></img>" + '</p>');
  
  $('#check1').click(function(){
    var information=$('#information1').val();

    $(list1).empty();

    if (data[information] === undefined) {
      data[information] = "Informacja nie istnieje albo wpisz " + information + " z dużej litery"
    }

    list1.append("<li>" + data[information] + "</li>")
  });
  });
});

var content2 = $("#content2")
var information = $("#information")
var back = $("#back")

content2.hide();
information.hide();
back.hide();

$("#check").click(function(){
  content2.show();
  information.show();
  back.show();
})