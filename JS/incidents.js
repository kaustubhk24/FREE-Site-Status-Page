



/***
 * 
 * Night Mode
 */

function night() {
  nightVal = localStorage.nightMode;

  if (nightVal) 
  {
    localStorage.nightMode=!nightVal;
    var element = document.body;element.classList.toggle("dark-body");
    var nav = document.getElementById("nav");nav.classList.toggle("dark-nav");
    var ftr = document.getElementById("ftr");ftr.classList.toggle("dark-nav");
    var navbtn = document.getElementById("navbtn");navbtn.classList.toggle("dark-nav-btn");
    var buttons = document.getElementsByClassName('btn'); for (let i = 0; i < buttons.length; i++) {let btn = buttons[i];btn.classList.toggle('dark-btn');}
    var clss = document.getElementsByClassName('card'); for (let ic = 0; ic < clss.length; ic++) {let cls = clss[ic];cls.classList.toggle('dark-card');}
    var crdhdr = document.getElementsByClassName('card-header');for (let ic1 = 0; ic1 < crdhdr.length; ic1++) {let crd = crdhdr[ic1];crd.classList.toggle('dark-card-header');}
  }
  else
  {
    localStorage.nightMode=nightVal;
    var element = document.body;element.classList.remove("dark-body");
    var nav = document.getElementById("nav");nav.classList.remove("dark-nav");
    var ftr = document.getElementById("ftr");ftr.classList.remove("dark-nav");
    var navbtn = document.getElementById("navbtn");navbtn.classList.remove("dark-nav-btn");
    var buttons = document.getElementsByClassName('btn');for (let i = 0; i < buttons.length; i++) {let btn = buttons[i];btn.classList.remove('dark-btn');}
    var clss = document.getElementsByClassName('card');for (let ic = 0; ic < clss.length; ic++) {let cls = clss[ic];cls.classList.remove('dark-card');}
    var crdhdr = document.getElementsByClassName('card-header');for (let ic1 = 0; ic1 < crdhdr.length; ic1++) {let crd = crdhdr[ic1];crd.classList.remove('dark-card-header');}

  }
}


/***
 *
 * Night Mode
 */






