

var openInbox = document.getElementById("myBtn");
openInbox.click();

function sgiri_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function sgiri_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("sgiri-show") == -1) {
    x.className += " sgiri-show"; 
    x.previousElementSibling.className += " sgiri-red";
  } else { 
    x.className = x.className.replace(" sgiri-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" sgiri-red", "");
  }
}

openMail("Borge")
function openMail(personName) {
  var i;
  var x = document.getElementsByClassName("person");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x = document.getElementsByClassName("test");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" sgiri-light-grey", "");
  }
  document.getElementById(personName).style.display = "block";
  event.currentTarget.className += " sgiri-light-grey";
}



var openTab = document.getElementById("firstTab");
openTab.click();

