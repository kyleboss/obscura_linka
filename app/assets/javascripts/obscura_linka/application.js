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


window.onload=function() {

  // Get all elements that need to be obfuscated
  rot_elements = document.getElementsByClassName('rot13_link')

  // Add onclick listeners to each link with deciphered code
  for(var x = 0; x < rot_elements.length; x++) {
      rot_elements[x].addEventListener("click",function(){
        window.location = rot13(this.getAttribute("data-href"));
      },false);
  }

  function rot( t, u, v ) {
   return String.fromCharCode( ( ( t - u + v ) % ( v * 2 ) ) + u );
  }
  function rot13( s ) {
    var b = [], c, i = s.length,
    a = 'a'.charCodeAt(), z = a + 26,
    A = 'A'.charCodeAt(), Z = A + 26;
    while(i--) {
      c = s.charCodeAt( i );
      if( c>=a && c<z ) {
        b[i] = rot( c, a, 13 );
      }
      else if( c>=A && c<Z ) {
        b[i] = rot( c, A, 13 );
      }
      else {
        b[i] = s.charAt( i );
      }
    }
    return b.join( '' );
  }
}