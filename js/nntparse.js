var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;
xhr.open("GET", "https://history.newtheatre.org.uk/feeds/search.json", true);
xhr.send();
var resp;

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var accCastCrew = function(shows) {
  var total = 0;
  for(i = 0; i < shows.length; i++) {
    total += shows[i].cast.split(",").length;
    total += shows[i].crew.split(",").length;
  }
  return total;
}

var castCrewAcc = function(currShow, nextShow) {
  return {year_title:currShow.year_title,
    cast:currShow.cast+nextShow.cast,
    crew:currShow.crew+nextShow.crew}
}

function process()
{
  if (xhr.readyState == 4) {
    resp = JSON.parse(xhr.responseText);
    //console.log(resp[0].type);
    // resp now has the text and you can process it.
    // alert(resp);
    allShows = resp.filter(function(x) {return x.type==="show"});
    allPeople = resp.filter(function(x) {return x.type==="person"});
    //console.log(allShows);
    //console.log(allPeople);
    for(i = 0; i < allShows.length; i++) {
      var curr = allShows[i].year_title;
      allShows[i].year_title = curr.replace("&ndash;","-");
      //console.log(allShows[i].year_title);
    }

    var ccData = Object.values(_.groupBy(allShows, 'year_title'));
    //console.log(ccData);

    var yearParse = d3.timeFormat("%Y");

    for(i = 0; i < ccData.length; i++) {
      ccData[i] = ccData[i].reduce(castCrewAcc);
      ccData[i].year_title = parseInt(ccData[i].year_title.substring(0,4));
      var currCast = Array.from(new Set(ccData[i].cast.split(","))).length - 1; //It counts the additional one brought about as a result of the encoding to JSON

      ccData[i].cast = currCast;

      var currCrew = Array.from(new Set(ccData[i].crew.split(","))).length - 1; //It counts the additional one brought about as a result of the encoding to JSON

      ccData[i].crew = currCrew;
      //console.log(typeof ccData[i].cast);
    }

    ccData.sort(function(a,b) {if (a.year_title > b.year_title) {return 1} else if (a.year_title < b.year_title) {return -1} else {return 0}})

    //D3 DRAWING BEGINS HERE

    var margin = {top: 20, right: 20, bottom: 50, left: 70},
      widthm = width - margin.left - margin.right,
      heightm = height - margin.top - margin.bottom;

    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);


    var ccLine = centre.append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(d3.extent(ccData, function(d) { return d.year_title;}));
    y.domain(d3.extent(ccData, function(d) { return d.cast + d.crew;}));

    var valueline = d3.line()
      .x(function(d) {return x(d.year_title);})
      .y(function(d) {return y(d.cast + d.crew);});


    ccLine.append("g")
      .attr("transform", "translate(0," + height + ")")
      //.call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y")));
      .call(d3.axisBottom(x));


    ccLine.append("g")
      .call(d3.axisLeft(y));

    ccLine.append("path")
      .data([ccData])
      .attr("class", "line")
      .attr("d", valueline)
      .attr("fill", "none")
      .attr("stroke","black");
      
    //console.log(ccData);

  }
}
