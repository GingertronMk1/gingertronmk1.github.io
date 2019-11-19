var toggle = document.getElementById("nav-toggle");
var nav_list = document.getElementsByClassName("navbar__list")[0];

toggle.onclick = function() {
  toggle.classList.toggle("active");
  nav_list.classList.toggle("active");
}

/*
 *
 * TEXT GENERATOR
 *
 */

var allTextsDiv = document.getElementById("all-texts-div");

function generate_texts() {
  while (allTextsDiv.firstChild) {
    allTextsDiv.removeChild(allTextsDiv.firstChild);
  }

  var texts = document.getElementById("input-form").value.split("\n\n");
  var lastPerson = "";
  var firstText = true;

  var y = 12;

  texts.forEach(function(item) {
    /*
     *
     *  PRINTING TO HTML AND DIVS
     *
     */
    var regex = /(.*?): ([\s\S]*)/s
    var person = item.split(regex)[1];
    var message = item.split(regex)[2];

    if (!(person && message)) {
      return;
    }

    person = person.trim();
    message = message.trim();

    var messageDiv = document.createElement("div");
    var textDiv = document.createElement("div");

    var textClasses = "text";
    var messageClasses = "message"

    if (lastPerson === person) {
    } else {
      textClasses += " text--chain-top";
      messageClasses += " message--chain-top";
    }

    switch (person) {
      case "me":
        textClasses += " text--me";
        messageClasses += " message--me";
        break;
      case "them":
        textClasses += " text--them";
        messageClasses += " message--them";
        break;
      case "time":
        textClasses += " text--time";
        messageClasses += " message--time";
        break;
      default:
        break;
    }


    messageDiv.className = messageClasses;
    textDiv.className = textClasses;
    textDiv.innerHTML = message.replace("\n","</br>");

    messageDiv.appendChild(textDiv);
    allTextsDiv.appendChild(messageDiv);

    lastPerson = person;
  });
}

window.onload = function() {
  generate_texts();
}
