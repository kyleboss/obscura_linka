// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require_tree .

ObscuraLinka = {
  initialize: function() {
    var rot_elements = document.querySelectorAll(".rot13_link");

    for (var i = 0; i < rot_elements.length ; i++) {
      // Is an old browser? Such as IE8
      if (rot_elements[i].addEventListener) {
        var obscured_link = rot_elements[i].getAttribute("data-href");
        rot_elements[i].addEventListener("click", function (e) { 
          ObscuraLinka.go_to_url(e, obscured_link) }, false);
      } else {
        var obscured_link = rot_elements[i].attributes["data-href"].nodeValue;
        rot_elements[i].attachEvent("onclick", function (e) { 
          ObscuraLinka.go_to_url(e, obscured_link) });
      }
    }
  },

  go_to_url: function(event, obscured_link) {
    // Is an old browser? Such as IE8
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
    window.location = ObscuraLinka.rot13(obscured_link);
  },

  rot: function( t, u, v ) {
   return String.fromCharCode( ( ( t - u + v ) % ( v * 2 ) ) + u );
  },

  rot13: function( s ) {
    var b = [], c, i = s.length,
    a = 'a'.charCodeAt(), z = a + 26,
    A = 'A'.charCodeAt(), Z = A + 26;
    while(i--) {
      c = s.charCodeAt( i );
      if( c>=a && c<z ) {
        b[i] = ObscuraLinka.rot( c, a, 13 );
      }
      else if( c>=A && c<Z ) {
        b[i] = ObscuraLinka.rot( c, A, 13 );
      }
      else {
        b[i] = s.charAt( i );
      }
    }
    return b.join( '' );
  }
};

window.onload = function() { ObscuraLinka.initialize() };