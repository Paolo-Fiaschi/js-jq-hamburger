// assegno una variabile al mio elemento html su cui voglio cliccare
var menu = $ (".iconHamburgerMenu");
var menuHamburger = $ ("#hamburgerMenu");
var menuClose = $ (".close");
console.log(menu);

// faccio comparire l'hamburger menu al click
menu.on({
  click: function(){
    // menuHamburger.addClass('hamburgerMenuClick');
    menuHamburger.slideDown();
    console.log(menu);
  }
});
// // faccio scomparire l'hamburger menu al click
menuClose.on({
  click: function(){
    // menuHamburger.removeClass('hamburgerMenuClick');
    menuHamburger.slideUp();

    console.log(menuClose);
  }
});
