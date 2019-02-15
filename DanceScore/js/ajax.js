// window.addEventListener("load",function() {
// });

function testajax() {
  var xhr = new XMLHttpRequest();
  var test = "10";
  xhr.open('POST','//толькотвори.рф/api_test.php', true);
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send(test);

  xhr.addEventListener('readystatechange', function() {
    if ((xhr.readyState==4) && (xhr.status==200)) {
      // тест
      var welcome = document.getElementById('welcome');
      welcome.innerHTML = JSON.parse(xhr.responseText);
    }
  });


}


// {"onlinePerformanceId":10,"10":{"criteria":{"1":1,"2":5,"3":"NULL"},"comment":"Отличный номер, на Нобелевскую их!"},"22":{"criteria":{"1":1,"2":5,"3":"NULL"},"comment":"Рекомендовать смену музыки"}}

// function testajax( rating) {
// $.ajax({
// url: 'http://толькотвори.рф/api.php',
// type: 'POST',
// typeDate: 'JSON',
// data: "rating=" + rating,
// success: function(msg){
// //alert( "Data Saved: " + msg);
// var json = $.parseJSON(msg);
// $("#performanceTitle").text(json.performanceTitle)
// $("#nominationTitle").text(json.nominationTitle)
// $("#contestTitle").text(json.contestTitle)
// $("#teamTitle").text(json.teamTitle)
// $("#refereeSurname").text(json.surname);
//
//
// //alert( "Data Saved: " + msg);
// }
// })
// return false;
// }
