/**
 *
 *  SEASON GENERATOR
 *
 */

export const seasonDiv = document.querySelector(".season__input");

export function generate_season_form(num_shows) {
  document.querySelector(".season__input").innerHTML = "";
  for(let i = 0; i < num_shows; i++){
    add_season_input(i);
  }
}

function add_season_input(n) {
  let new_input = document.querySelector("#season__input-template").innerHTML;
  new_input = new_input.replace("NUMBERREPLACE", n);
  let new_fieldset = document.createElement("fieldset");
  new_fieldset.name = ("show" + n);
  new_fieldset.innerHTML = new_input;
  document.querySelector(".season__input").append(new_fieldset);
}

export function add_input() {
  add_season_input(document.querySelectorAll(".season__input > fieldset").length);
}

// [{show: show_name,slot: slot_num}]

export function generate_options() {
  const fieldsets = document.querySelectorAll(".season__input > fieldset");
  let preferences = [];


  fieldsets.forEach(function(fieldset) {
    const showname = fieldset.querySelector("input[name*=title]").value;
    const slots = fieldset.querySelector("input[name*=slots]").value.split(",");
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


  console.log(preferences, Object.keys(preferences));
  const s = something(preferences, Object.keys(preferences), 0);

  let n_o_html = "";
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
    const after = something(object, keys, index+1);
    const oki = object[keys[index]];
    let n = [];

    for(let _perm in after) {
      let perm = after[_perm];                // One option for after this slot
      for(let _slot in oki) {
        try {
          let slot = oki[_slot];                // The current show for this slot
          let perm2 = perm.slice(0);
          console.log(perm2, slot)
          if(perm2.indexOf(slot) == -1) {
            perm2.push(slot);
            n.push(perm2);
          }
        } catch(e) {
          console.error(e);
        }
      }
    }
    return n;
  } else {
    return object[keys[index]].map(x=>[x]);
  }
}