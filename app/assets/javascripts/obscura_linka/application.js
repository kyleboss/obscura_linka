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
    var rot_elements = document.getElementsByClassName("rot13_link");

    for (var i = 0; i < rot_elements.length ; i++) {
      rot_elements[i].addEventListener("click",
      function (event) {
        event.preventDefault();
        window.location = ObscuraLinka.rot13(this.getAttribute("data-href"));
      }, false);
    }
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

$(window).load = ObscuraLinka.initialize();