var allTextsDiv = document.getElementById("all-texts-div");
var i = 0;

function generate_texts() {
  while (allTextsDiv.firstChild) {
    allTextsDiv.removeChild(allTextsDiv.firstChild);
  }



  var texts = document.getElementById("input-form").value.split("\n\n");
  var lastPerson = "";
  var firstText = true;

  var y = 12;
  var c = document.getElementById("text-canvas");

  if (c) {
    var ctx = c.getContext("2d");
    var ctxWidth = c.width;
    var ctxHeight = c.height;
    console.log(ctxWidth, ctxHeight);

    ctx.moveTo(ctxWidth/2, 0);
    ctx.lineTo(ctxWidth/2, ctxHeight);
    ctx.stroke();
  }

  texts.forEach(function(item) {
    /*
     *
     *  PRINTING TO HTML AND DIVS
     *
     */
    var regex = /(.*?): ([\s\S]*)/s
    var person = item.split(regex)[1];
    var message = item.split(regex)[2];

    if (!person || !message) {
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
    console.log(i++);

    /*
     *  PRINTING TO HTML CANVAS
     */

    if(c) {
      var print_to_canvas = 0;

      if(print_to_canvas) {
        var x = 480;
        ctx.font = "12px sans-serif";

        var maxWidth = ctxWidth * 0.7;
        var textWidth = ctx.measureText(message).width
        var textHeight = 12;
        console.log(textWidth);
        var bubbleScale = 2;

        var bubbleOffset = 0.55 * textHeight * bubbleScale;

        switch (person) {
          case "me":
            var bubbleWidth = textWidth + 10;
            ctx.fillStyle = "#00AAF0";
            ctx.fillRect(ctxWidth - (bubbleWidth + 10), y, bubbleWidth, textHeight * bubbleScale);
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(message, ctxWidth - (bubbleWidth + 5), y + bubbleOffset);
            break;
          case "them":
            ctx.fillStyle = "#969696";
            ctx.fillRect(10, y, textWidth + 10, textHeight * bubbleScale);
            ctx.fillStyle = "#FFFFFF";
            //ctx.fillText(message, 15, y + bubbleOffset);
            wrapText(ctx, message, 15, y + bubbleOffset, maxWidth, 12);
            break;
          case "time":
            var w = (ctxWidth - textWidth)/2
            ctx.fillStyle = "#000000";
            ctx.fillText(message, w, y);
            break;
          default:
            break;
        }

        y += (textHeight * 2);
        console.log(y);
      }
    }





    lastPerson = person;
  });
}

allTextsDiv.addEventListener("load", generate_texts());
