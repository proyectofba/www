function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(cname, exdays) {
  var d = new Date();
  d.setTime(d.getTime() - (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + '' + ';' + expires + ';path=/';
}

$(document).ready(function() {

});

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$("#logout-button").click(function(e) {
  e.preventDefault();
  deleteCookie('befcc8ca25e7f3436a3f2d99ff27117e');
  window.location = "/index.html"
});