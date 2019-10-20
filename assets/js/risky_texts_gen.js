var allTextsDiv = document.getElementById("all-texts-div");

function generate_texts() {
  while (allTextsDiv.firstChild) {
    allTextsDiv.removeChild(allTextsDiv.firstChild);
  }



  var texts = document.getElementById("input-form").value.split("\n\n");
  var lastPerson = "";
  var firstText = true;

  texts.forEach(function(item) {
    var regex = /(.*?):([\s\S]*)/s
    var person = item.split(regex)[1];
    var message = item.split(regex)[2];


    var colDiv = document.createElement("div");
    var conDiv = document.createElement("div");
    var textDiv = document.createElement("div");

    var textClasses = "text";
    var colClasses = "col-12";
    var conClasses = "d-flex";

    if (lastPerson === person) {
      colClasses += " pt-1";
    } else {
      colClasses += " pt-3";
      textClasses += " chain-top";
    }

    switch (person) {
      case "me":
        textClasses += " me";
        conClasses += " flex-row-reverse";
        break;
      case "them":
        textClasses += " them";
        conClasses += " flex-row";
        break;
      case "time":
        textClasses += " time text-center";
        break;
      default:
        conClasses = "d-none";
        message = "";
        break;
    }

    colDiv.className = colClasses;
    conDiv.className = conClasses;
    textDiv.className = textClasses;
    textDiv.innerHTML = message.replace("\n","</br>");

    conDiv.appendChild(textDiv);
    colDiv.appendChild(conDiv);
    allTextsDiv.appendChild(colDiv);


    lastPerson = person;
  });
}

allTextsDiv.addEventListener("load", generate_texts());
