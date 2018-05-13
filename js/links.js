var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;
xhr.open("GET", "https://history.newtheatre.org.uk/feeds/search.json", true);
xhr.send();
var resp,
  allShows = [],
  allPeople = [],
  allActors = [],
  allSeasons = [],
  allActorsObjs = [],
  links = [],
  allYears = [],
  showConnectionGraph = 1,    // set to 0 if you don't want the main connection graph
  showOtherGraphs     = 1,    // set to 0 if you don't want the additional graphs
  longGraphs          = 1;    // set to 0 if you want the entire history, 1 if you want it from 2010 onwards

function searchGraph(){
  resetGraph();
  var sValue = document.getElementById("searchVal").value;
  console.log(sValue);
  d3.select("par[id=\"infobox\"]").text(sValue);

  d3.selectAll("circle[class=\"connNode\"]")
    .filter(function(d){return d.name!=sValue;})
    .attr("opacity", 0.2);

  d3.selectAll("line[class=connLink]")
    .filter(function(d){return d.source!=sValue && d.target!=sValue;})
    .attr("opacity", 0.2);
}

function resetGraph(){
  d3.selectAll("circle[class=\"connNode\"]")
    .attr("opacity",1);
  d3.selectAll("line[class=connLink]")
    .attr("opacity",1);
  /*
    .on("mouseover", function(d) {
      d3.select(this).attr("fill","black"); 
      printDetails(d);
    })
    .on("mouseout", function(d) {d3.select(this).attr("fill","red");});
    */
}

function filterSeason() {
  allSeasons.forEach(function(s) {
    if(!document.getElementById(s + "Filt").checked){
      d3.selectAll("[season=\"" + s + "\"]").attr("opacity", 0).attr("pointer-events","none");
    } else {
      d3.selectAll("[season=\"" + s + "\"]").attr("opacity", 1).attr("pointer-events","all");
    };
  });
}

function resetFilterSeason() {
  d3.selectAll("circle").attr("opacity", 1).attr("pointer-events","all");
  d3.selectAll("path").attr("opacity", 1).attr("pointer-events","all");
  d3.selectAll("input[type=\"checkbox\"]").property("checked","true");
}

function printDetails(a) {
  var temp = [];
  (a.shows).forEach(function(s){temp.push(s.title);});
  d3.select("par[id=\"infobox\"]").text(a.name + ", who was first in a show in " + a.firstYear + ", and has been in: \n" + temp + ", with a total of " + (a.links).length + " links");
  console.log(a);
}

function seasonColours(s) {
  switch(s) {
    case "In House":return "yellow"; break;
    case "UNCUT": return "orange"; break;
    case "Fringe": return "purple"; break;
    case "STUFF": return "red"; break;
    case "Postgrads": return "blue"; break;
    case "External": return "grey"; break;
    case "Lakeside": return "steelblue"; break;
    case "Fundraiser": return "lightgreen"; break;
    case "Previews":
    case "Edinburgh": return "green"; break;
    default: return "black"; break;
  }
}

function year_titleToDate(yt){return Date.parse(yt.slice(0,4));}

function process() {
  if (xhr.readyState==4) {
    /*
     *
     *  GONNA SET UP THE DRAWING STUFF NOW
     *
     */

    var svg,
        linevalue,
        x,
        y;

    resp = JSON.parse(xhr.responseText);

    // resp now has the text and you can process it.
    if(longGraphs) {
      allShows = resp.filter(function(x) {return x.type==="show" && x.title != "Freshers' Fringe";});
    } else {
      allShows = resp.filter(function(x) {return x.type==="show"
                                              && x.title != "Freshers' Fringe"
                                              && x.title != "Charity Gala"
                                              && x.year_title>="2010&ndash;11";
      });
    }
    allPeople = resp.filter(function(x) {return x.type==="person"});
    console.log(allPeople);
    allShows.forEach(function(s) {
      s.year_title = (s.year_title).replace("&ndash;","-");
      s.date = (s.date) = new Date(s.date)
      s.cast = (s.cast).split(", ").slice(0,-1);
      s.crew = (s.crew).split(", ").slice(0,-1);
      (s.cast).forEach(function(a){allActors.push(a);});
    });

    allSeasons = (Array.from(new Set(allShows.map(function(d){return d.season;})))).sort();
    allActors = (Array.from(new Set(allActors))).sort();
    allActors.forEach(function(a) {allActorsObjs.push(actorToObject(a));});
    allYears = (Array.from(new Set(allShows.map(function(d){return d.year_title;})))).sort();

    function allActorsLinks(a) {
      var temp = [],
        actorsShows = allShows.filter(function(d) {return (d.cast).includes(a);});
      actorsShows.forEach(function(s) {(s.cast).forEach(function(d) {temp.push(d);});});
      temp = (Array.from(new Set(temp))).filter(function(d) {return d != a;}).sort();
      return temp;
    }

    function allActorsShows(a) {
      var temp = [];
      (allShows.filter(function(d) {return (d.cast).includes(a);}))
        .forEach(function(d) {temp.push(d.title);});
      return temp;
    }

    function actorToObject(a) {
      var allTheseShows = allShows.filter(function(d) {return (d.cast).includes(a);}),
        allTheseLinks = [],
        allTheseShowTitles = [],
        earliestShow = "3000-01",
        personRecordLink;

      var personRecord = allPeople.find(function(d){return d.title == a});

      if(personRecord === undefined) {
        personRecordLink = "https://history.newtheatre.org.uk/people";
      } else {
        personRecordLink = "https://history.newtheatre.org.uk" + personRecord.link;
      };


      allTheseShows.forEach(function(s) {
        allTheseShowTitles.push(s.title);
        (s.cast).forEach(function(d) {allTheseLinks.push(d);});
        if(s.year_title < earliestShow){earliestShow = s.year_title};
      });
      var allTheseLinks2 = [];
      allTheseLinks.forEach(function(l){
        allTheseLinks2.push({name:l, strength:allTheseLinks.filter(function(d){return d===l;}).length})
      });


      //console.log(allTheseLinks);
      allTheseLinks.filter(function(l){return l!=a;});

      allTheseLinks = Array.from(new Set(allTheseLinks));
      allTheseLinks2 = Array.from(new Set(allTheseLinks2));
      //console.log(a, allTheseLinks2);
      var person = {
        name: a,
        shows: allTheseShows,
        firstYear: earliestShow,
        record: personRecord,
        url: personRecordLink,
        links: allTheseLinks2
      }
      return person;
    }


    allActorsObjs.forEach(function(so) {
      (so.links).forEach(function(ta) {
        links.push({source:so.name,target:ta.name,strength:ta.strength});
      })
    });

    console.log(links);
    links = links.filter(function(l){return l.source!=l.target;});
    console.log(links);
    console.log(allActorsObjs);

    var yearColourAxis = d3.scaleOrdinal()
      .domain(allYears)
      .range(d3.quantize(d3.interpolate("#0000ff","#ff0000"), allYears.length));


    function addAxisLabels(xLabel, yLabel) {
      var mb = margin.bottom/2,
          ml = margin.left/2;

      svg.append("text")  // XLABEL
        .attr("transform", "translate("+(width/2)+","+(height-mb)+")")
        .style("font-weight", "bolder")
        .style("text-anchor", "middle")
        .text(xLabel);

      svg.append("text")  // YLABEL
        .attr("transform", "translate("+(0-ml)+","+(height/2)+") rotate(-90)")
        .attr("dy", "1em")
        .style("font-weight", "bolder")
        .style("text-anchor", "middle")
        .text(yLabel);

    }

    /*
     *
     *  THE GRAPHS START HERE
     *
     */

    /*
     *
     *  BIG CONNECTION GRAPH
     *
     */

    if(showConnectionGraph) {

      svg = centre.append("svg")
        .attr("id", "connGraph")
        .attr("width", width)
        .attr("height", height);

      var radius = 15;

      //set up the simulation and add forces
      var simulation = d3.forceSimulation()
        .nodes(allActorsObjs);

      var link_force =  d3.forceLink(links)
        .id(function(d){return d.name;});

      var charge_force = d3.forceManyBody()
        .strength(-100);

      var center_force = d3.forceCenter(width / 2, height / 2);

      simulation
        .force("charge_force", charge_force)
        .force("center_force", center_force)
        .force("links",link_force)
        .on("tick", tickActions);

      //add encompassing group for the zoom
      var g = svg.append("g")
        .attr("class", "everything");

      //draw lines for the links
      var link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("class","link")
        .attr("class","connLink")
        .style("stroke-width", function(d){return 0.5*(d.strength);})
        .style("stroke", "black")
        .attr("source", function(d) {return d.source.name;})
        .attr("sink", function(d) {return d.target.name;});

      //draw circles for the nodes
      var node = g.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(allActorsObjs)
        .enter()
        .append("circle")
        .attr("class","node")
        .attr("class","connNode")
        .attr("r", function(d){return 3*(Math.sqrt((d.links).length));})
        .attr("fill", function(d){return yearColourAxis(d.firstYear);})
        .attr("id", function(d) {return d.name;})
        .on("mouseover", function(d) {
          d3.select(this).attr("fill","black");
          printDetails(d);
        })
        .on("mouseout", function(d) {d3.select(this).attr("fill", t=>yearColourAxis(t.firstYear));})
        //.attr("xlink:href", function(d){return d.url;})
        .on("click", function(d){window.open(d.url)});

      // Adding a legend
      var legendHeight = (svg.attr("height")/2.1),    //2.1 for rendering purposes
        legendWidth = 70;

      var legend = svg.append("g")
        .attr("class", "legend")
        .attr("x", width-margin.left)
        .attr("y", margin.top);

      for(i = 0; i < allYears.length; i++){
        var sectionHeight = legendHeight/allYears.length;
        legend.append("rect")
          .attr("x", 0)
          .attr("y", sectionHeight*i)
          .attr("height", (sectionHeight*1.05))
          .attr("width", legendWidth)
          .attr("fill", function(d){return yearColourAxis(allYears[i])})
      }

      legend.append("text")
        .attr("text-anchor","middle")
        .attr("alignment-baseline","middle")
        .attr("fill","white")
        .attr("x", legendWidth/2)
        .attr("y", 20)
        .text(allYears[0]);
      legend.append("text")
        .attr("text-anchor","middle")
        .attr("alignment-baseline","middle")
        .attr("fill","white")
        .attr("x", legendWidth/2)
        .attr("y", legendHeight-20)
        .text(allYears[allYears.length-1]);

      /*
      var connInfo = svg.append("g")
                        .attr("class", "actorInfo")
                        .attr("x", 500)
                        .attr("y", margin.top);

      connInfo.append("rect")
              .attr("x", svg.attr("width")-100)
              .attr("fill-opacity", 0.5)
              .attr("width", 100)
              .attr("height", svg.attr("height"))
              .attr("fill", "red")
              .append("text")
              .attr("id", "infobox");
              */

      //add zoom capabilities
      var zoom_handler = d3.zoom()
        .scaleExtent([0.1, 3])
        .on("zoom", zoom_actions);

      zoom_handler(svg);

      //Zoom functions
      function zoom_actions(){
        g.attr("transform", d3.event.transform)
      }

      function tickActions() {
        //update circle positions each tick of the simulation
        node
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });

        //update link positions
        link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });
      }



      // Adding more information to the nodes

      var info = centre.append("div")
        .attr("id", "info")
        .attr("padding", "10px")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "blue");

      var searcher = info.append("input")
        .attr("id", "searchVal")
        .attr("name", "searchVal")
        .attr("placeholder", "Search a person")
        .attr("type", "text");

      var searchbutton = info.append("button")
        .attr("onclick", "searchGraph()")
        .append("text")
        .text("Search");

      var resetbutton = info.append("button")
        .attr("onclick", "resetGraph()")
        .append("text")
        .text("Reset");

      info.append("br");
      info.append("br");

      var infoPar = info.append("par")
        .attr("id", "infobox")
        .text("Hover over a node to see a name");

      info.append("br");
      info.append("br");

      /*
      var box1 = info.append("input")
        .attr("id", "degBox1")
        .attr("name", "degBox1")
        .attr("placeholder", "put the name of person 1")
        .attr("type", "text")
        .text("Ian Sheard");
      var box2 = info.append("input")
        .attr("id", "degBox2")
        .attr("name", "degBox2")
        .attr("placeholder", "Input the name of person 2")
        .attr("type", "text")
        .text("Ian Sheard");

      var routebutton = info.append("button")
        .attr("onclick", "findRoute()")
        .append("text")
        .text("Go");

      var routePar = info.append("par")
        .attr("id", "routePar")
        .append("text")
        .text("The route will appear here");
        */

    }

    /*
     *
     * OTHER CHARTS HERE
     * TO TURN THESE ON SET `showOtherGraphs` to 1
     *
     */

    if(showOtherGraphs){

      //WHO'S BEEN IN THE MOST SHOWS

      var top10Actors = allActorsObjs
        .sort(function(a,b){return (b.shows).length - (a.shows).length;});
      top10Actors = top10Actors.slice(0,10);
      console.log(top10Actors);

      svg = centre.append("svg")
        .attr("id", "castNosGraph")
        .attr("width", width)
        .attr("height", height + 50)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x = d3.scaleBand()
            .range([0,widthM])
            .domain(top10Actors.map(function(d){return d.name;}))
            .padding(0.1);

      y = d3.scaleLinear()
            .range([heightM, 0])
            .domain([0,d3.max(top10Actors,function(d){return (d.shows).length;})]);

      var xAxis = d3.axisBottom(x);
      var yAxis = d3.axisLeft(y);

      // Add the X Axis
      svg.append("g")
        .attr("transform", "translate(0," + heightM + ")")
        .call(xAxis)
        .selectAll("text")
          .attr("text-anchor", "start")
          .attr("transform","rotate(30)");

      // Add the Y Axis
      svg.append("g")
        .call(yAxis);


      svg.selectAll("bar")
         .data(top10Actors)
         .enter().append("rect")
                   .attr("x", function(d){return x(d.name);})
                   .attr("y", function(d){return y((d.shows).length);})
                   .attr("width", x.bandwidth)
                   .attr("height", function(d){return heightM-y((d.shows).length);})
                   .attr("color", function(d){return yearColourAxis(d.firstYear);});

      addAxisLabels("","Number of Shows");

      //CAST NUMBERS THROUGH THE YEARS

      allDatedShows = allShows.filter(function(d) {return !(isNaN(d.date.getDate()))});

      svg = centre.append("svg")
        .attr("id", "castNosGraph")
        .attr("width", width)
        .attr("height", height + 20)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x = d3.scaleTime()
        .domain(d3.extent(allDatedShows, function(d) {return d.date;}))
        .range([0, widthM]);

      y = d3.scaleLinear()
        .domain(d3.extent(allDatedShows, function(d) {let ca=d.cast;return ca.length;}))
        .range([heightM, 0]);

      var xAxis = d3.axisBottom(x);
      var yAxis = d3.axisLeft(y);

      // Add the X Axis
      svg.append("g")
        .attr("transform", "translate(0," + heightM + ")")
        .call(xAxis);

      // Add the Y Axis
      svg.append("g")
        .call(yAxis);

      svg.selectAll("dot")
        .data(allDatedShows)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y((d.cast).length); })
        .text(function(d) {return d.title + ", " + d.year_title})
        .attr("season", function(d) {return d.season})
        .attr("fill", function(d) {return seasonColours(d.season);})
        .append("svg:title")
        .text(function(d) {return d.title + ", " + d.year_title});

      addAxisLabels("Year", "Cast Size");

      //CAST VS CREW NUMBERS

      svg = centre.append("svg")
        .attr("id","castCrewNosGraph")
        .attr("width", width)
        .attr("height", height + 20)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x = d3.scaleLinear()
        .domain(d3.extent(allDatedShows, function(d) {return (d.cast).length;}))
        .range([0, widthM]);

      y = d3.scaleLinear()
        .domain(d3.extent(allDatedShows, function(d) {return (d.crew).length;}))
        .range([heightM, 0]);

      var colors = d3.scaleTime()
        .domain(d3.extent(allDatedShows, function(d) {return d.date;}))
        .range(["yellow","purple"]);

      var xAxis = d3.axisBottom(x);
      var yAxis = d3.axisLeft(y);


      // Add the X Axis
      svg.append("g")
        .attr("transform", "translate(0," + heightM + ")")
        .call(xAxis);

      // Add the Y Axis
      svg.append("g")
        .call(yAxis);

      svg.selectAll("dot")
        .data(allShows)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x((d.cast).length); })
        .attr("cy", function(d) { return y((d.crew).length); })
        .attr("season", function(d) {return d.season})
        .attr("fill", function(d) {return seasonColours(d.season);})
        .append("svg:title")
        .text(function(d) {return d.title + ", " + d.year_title});

      addAxisLabels("Cast Size","Crew Size");

      // SHOW NUMBERS THROUGH THE YEARS

      var showCounts = (d3.nest()
        .key(function(d){return d.season;})
          .key(function(d){return d.year_title;})
          .entries(allShows)).sort(function(a,b){return a.key-b.key;});

      var showCounts2 = []

      showCounts.forEach(function(d){
        (d.values).forEach(function(v){
          v.season = d.key;
          showCounts2.push(v);
        })
      });
      showCounts2.sort(function(a,b){return (b.key-a.key);});

      svg = centre.append("svg")
        .attr("id","showNosGraph")
        .attr("width", width)
        .attr("height", height + 20)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      x = d3.scaleTime()
        .domain(d3.extent(allYears.map(function(d){return year_titleToDate(d);})))
        .range([0,widthM]);

      y = d3.scaleLinear()
        .domain(d3.extent(showCounts2, function(d){return (d.values).length;}))
        .range([heightM,0]);

      allSeasons.forEach(function(s){
        var thisSeasons = (showCounts2.filter(function(d){return d.season==s;})).sort(function(a,b){
          var aVal = (a.key).slice(0,4),
            bVal = (b.key).slice(0,4);
          return aVal-bVal;
        });
        linevalue = d3.line()
          .x(function(d){return x(year_titleToDate(d.key));})
          .y(function(d){return y((d.values).length);});

        svg.append("path")
          .datum(thisSeasons)
          .attr("class","line")
          .attr("stroke", seasonColours(s))
          .attr("season", s)
          .attr("d", linevalue);
      });

      svg.selectAll("dot")
        .data(showCounts2)
        .enter().append("circle")
        .attr("season", function(d){return d.season;})
        .attr("r", 5)
        //.attr("cx", function(d){return x(Date.parse((d.key).slice(0,4)));})
        .attr("cx", function(d){return x(year_titleToDate(d.key));})
        .attr("cy", function(d){return y((d.values).length);})
        .attr("fill", function(d){return seasonColours(d.season);})
        .append("svg:title")
        .text(function(d){return d.season + " " + d.key + ": " + (d.values).length + " shows"});


      // Add the X Axis
      svg.append("g")
        .attr("transform", "translate(0," + heightM + ")")
        .call(d3.axisBottom(x));

      // Add the Y Axis
      svg.append("g")
        .call(d3.axisLeft(y));

      addAxisLabels("Year","Number Of Shows");

      /*
       *
       *
       * FILTERING THE ADDITIONAL GRAPHS BY SEASON
       *
       *
       */

      allSeasons.forEach(function(s) {
        centre.append("br");
        centre.append("input")
          .attr("type", "checkbox")
          .attr("id", s + "Filt")
          .attr("name", s + "Filt")
          .property("checked","true");

        centre.append("label")
          .attr("for", s + "Filt")
          .text(s + "  ")
          .append("div")
          .style("width","10px")
          .style("height","10px")
          .style("display","inline-block")
          .attr("width","10px")
          .attr("height","10px")
          .style("background-color", seasonColours(s))
          .style("border", "1px solid #000");
      });

      // RESETTING
      centre.append("br");
      centre.append("button")
        .attr("onclick", "filterSeason()")
        .append("text")
        .text("Filter Season");

      centre.append("button")
        .attr("onclick", "resetFilterSeason()")
        .append("text")
        .text("Reset");


      /*
       *
       *  YEAR INTAKE TYPE THING
       *
       */

      var newNos = (d3.nest()
                     .key(function(d){return d.firstYear;})
                     .entries(allActorsObjs)).sort(function(a,b){
                       var aVal = (a.key).slice(0,4),
                           bVal = (b.key).slice(0,4);
                       return aVal-bVal;});

      console.log(newNos);

      svg = centre.append("svg")
        .attr("id","newNosGraph")
        .attr("width", width)
        .attr("height", height + 20)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x = d3.scaleTime()
            .domain(d3.extent(newNos, function(d){return year_titleToDate(d.key);}))
            .range([0,widthM]);

      y = d3.scaleLinear()
            .domain([0,d3.max(newNos, function(d){return (d.values).length;})])
            .range([heightM,0]);

      console.log(d3.extent(newNos, function(d){return d.key;}));
      console.log(d3.extent(newNos, function(d){return (d.values).length;}));

      linevalue = d3.line()
                    .x(function(d){return x(year_titleToDate(d.key));})
                    .y(function(d){return y((d.values).length);});

      svg.append("path")
         .datum(newNos)
         .attr("class","line")
         .attr("stroke", "black")
         .attr("d", linevalue);

      svg.selectAll("dot")
         .data(newNos)
         .enter().append("circle")
                   .attr("r", 5)
                   .attr("fill", function(d){return yearColourAxis(d.key);})
                   .attr("cx", function(d){return x(year_titleToDate(d.key));})
                   .attr("cy", function(d){return y((d.values).length);})
                   .append("svg:title")
                     .text(function(d){
                       return d.key + ": " + (d.values).length + " new people";
                     })

      // Add the X Axis
      svg.append("g")
        .attr("transform", "translate(0," + heightM + ")")
        .call(d3.axisBottom(x));

      // Add the Y Axis
      svg.append("g")
        .call(d3.axisLeft(y));

      addAxisLabels("Year","Number of \"First Shows\"");
    }
  }
}
