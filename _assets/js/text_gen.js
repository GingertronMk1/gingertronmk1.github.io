/**
 *
 * TEXT GENERATOR
 *
 */

export const allTextsDiv = document.querySelector("#all-texts-div");

export function generate_texts() {
  while (allTextsDiv.firstChild) {
    allTextsDiv.removeChild(allTextsDiv.firstChild);
  }

  var texts = document.querySelector("#input-form").value.split("\n\n");
  var lastPerson = "";
  var firstText = true;

  var y = 12;

  texts.forEach(function(item) {
    /**
     *
     *  PRINTING TO HTML AND DIVS
     *
     */
    var regex = /(.+?): ([\s\S]+)/
    var person = item.split(regex)[1];
    var message = item.split(regex)[2];
    console.log(person, message);

    if (!(person && message)) {
      return;
    }

    person = person.trim();
    message = message.trim();

    var messageDiv = document.createElement("div");
    var textDiv = document.createElement("div");

    var textClasses = "text";
    var messageClasses = "message"

    if (lastPerson !== person) {
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


/*
 *
 *  SEASON GENERATOR
 *
 */

const seasonDiv = document.querySelector(".season__input");

function generate_season_form(num_shows) {
  document.querySelector(".season__input").innerHTML = "";
  for(var i = 0; i < num_shows; i++){
    add_season_input(i);
  }
}

function add_season_input(n) {
  var new_input = document.querySelector("#season__input-template").innerHTML;
  new_input = new_input.replace("NUMBERREPLACE", n);
  var new_fieldset = document.createElement("fieldset");
  new_fieldset.name = ("show" + n);
  new_fieldset.innerHTML = new_input;
  document.querySelector(".season__input").append(new_fieldset);
}

function add_input() {
  add_season_input(document.querySelectorAll(".season__input > fieldset").length);
}

// [{show: show_name,slot: slot_num}]

function generate_options() {
  var fieldsets = document.querySelectorAll(".season__input > fieldset");
  var preferences = [];


  fieldsets.forEach(function(fieldset) {
    var showname = fieldset.querySelector("input[name*=title]").value;
    var slots = fieldset.querySelector("input[name*=slots]").value.split(",");
    if(slots != "" && showname != "") {
      slots.forEach(function(slot) {
        slot = slot.trim();
        if(!preferences[slot]) {
          preferences[slot] = [showname]
        } else {
          preferences[slot].push(showname);
        }
      })
    }
  })

  var season_options = [];


  console.log(preferences, Object.keys(preferences));
  var s = something(preferences, Object.keys(preferences), 0);

  var n_o_html = "";
  n_o_html += "<h3>You have: " + s.length + " options for this season</h3>";
  n_o_html += "<ul>";

  s.forEach(function(season) {
    n_o_html += "<li><ol>";
    season.reverse().forEach(function(show, slotMinus) {
      slot = slotMinus + 1;
      n_o_html += "<li>" + show + "</li>";
    })
    n_o_html += "</ol></li>";
  })
  n_o_html += "</ul>";


  document.querySelector(".season__option").innerHTML = n_o_html;
  console.log(s);

}

function something(object, keys, index) {
  //console.log("index:", index, "keys:", keys);
  if (index+1 < keys.length) {
    var after = something(object, keys, index+1);
    var oki = object[keys[index]];
    var n = [];

    for(var _perm in after) {
      var perm = after[_perm];                // One option for after this slot
      for(var _slot in oki) {
        try {
          var slot = oki[_slot];                // The current show for this slot
          var perm2 = perm.slice(0);
          console.log(perm2, slot)
          if(perm2.indexOf(slot) == -1) {
            //console.log('before', perm2);
            perm2.push(slot);
            //console.log('after',perm2);
            n.push(perm2);
            //console.log('n',n);
          }
        } catch(e) {
          console.error(e);
        }
      }
    }
    console.log('n',n);
    return n;
  } else {
    return object[keys[index]].map(x=>[x]);
  }
}