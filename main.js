// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.
// ---------------------------------------------------------------------

// assegno una variabile al mio elemento html su cui voglio cliccare
var menu = $ (".header-right > a");
var menuHamburger = $ (".hamburger-menu");
var menuClose = $ (".close");
console.log(menu);

// faccio comparire l'hamburger menu al click
menu.on({
  click: function(){
    menuHamburger.show();
    // menuHamburger.addClass('hamburger-menu.active');

  }
});
// faccio scomparire l'hamburger menu al click
menuClose.on({
  click: function(){
    menuHamburger.hide();
  }
});
