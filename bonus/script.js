// assegno una variabile al mio elemento html su cui voglio cliccare
var menu = $ (".iconHamburgerMenu");
var menuHamburger = $ ("#hamburgerMenu");
var menuClose = $ (".close");
var candidati = $(".candidati");
var sconto = $(".sconto");

console.log(menu);

// faccio comparire l'hamburger menu al click
menu.on({
  click: function(){
    // menuHamburger.addClass('hamburgerMenuClick');
    menuHamburger.slideDown(600);
    console.log(menu);
  }
});
// // faccio scomparire l'hamburger menu al click
menuClose.on({
  click: function(){
    // menuHamburger.removeClass('hamburgerMenuClick');
    menuHamburger.slideUp(600);

    console.log(menuClose);
  }
});
candidati.mouseover(function() {
  sconto.show(800);
});
candidati.mouseout(function(event) {
  sconto.hide(800);
});
