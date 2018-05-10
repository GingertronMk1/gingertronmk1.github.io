var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;
xhr.open("GET", "https://history.newtheatre.org.uk/feeds/search.json", true);
xhr.send();
var resp;//,
  //centered,
  //allSeasons;

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function searchGraph(){
  resetGraph();
  var sValue = document.getElementById("searchVal").value;
  d3.select("par[id=\"infobox\"]").text(sValue);

  d3.selectAll("circle[id=\"" + sValue + "\"]")
    .attr("fill", "yellow")
    .on("mouseover",function(d) {d3.select("par[id=\"infobox\"]").text(d.name);})
    .on("mouseout","")
}

function resetGraph(){
  //console.log("Resetting nodes")
  d3.selectAll(".node")
    .attr("fill", "red")
    .on("mouseover", function(d) {d3.select(this).attr("fill","black"); d3.select("par[id=\"infobox\"]").text(d.name);})
    .on("mouseout", function(d) {d3.select(this).attr("fill","red");});
}

function filterSeason() {
  if(!document.getElementById("In HouseFilt").checked){
    d3.selectAll("[season=\"In House\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"In House\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("FringeFilt").checked){
    d3.selectAll("[season=\"Fringe\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"Fringe\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("UNCUTFilt").checked){
    d3.selectAll("[season=\"UNCUT\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"UNCUT\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("STUFFFilt").checked){
    d3.selectAll("[season=\"STUFF\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"STUFF\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("PostgradsFilt").checked){
    d3.selectAll("[season=\"Postgrads\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"Postgrads\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("ExternalFilt").checked){
    d3.selectAll("[season=\"External\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"External\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("LakesideFilt").checked){
    d3.selectAll("[season=\"Lakeside\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"Lakeside\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("FundraiserFilt").checked){
    d3.selectAll("[season=\"Fundraiser\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"Fundraiser\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("EdinburghFilt").checked){
    d3.selectAll("[season=\"Edinburgh\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"Edinburgh\"]").attr("opacity", 1).attr("pointer-events","all");
  };
  if(!document.getElementById("PreviewsFilt").checked){
    d3.selectAll("[season=\"Previews\"]").attr("opacity", 0).attr("pointer-events","none");
  } else {
    d3.selectAll("[season=\"Previews\"]").attr("opacity", 1).attr("pointer-events","all");
  };
}

function resetFilterSeason() {
  d3.selectAll("circle").attr("opacity", 1).attr("pointer-events","all");
  d3.selectAll("path").attr("opacity", 1).attr("pointer-events","all");
  d3.selectAll("input[type=\"checkbox\"]").property("checked","true");
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



function process()
{
  if (xhr.readyState == 4) {
    resp = JSON.parse(xhr.responseText);
    // resp now has the text and you can process it.
    //var allShows = resp.filter(function(x) {return x.type==="show" && x.title != "Freshers' Fringe" && x.year_title == "2017&ndash;18";});
    var allShows = resp.filter(function(x) {return x.type==="show" && x.title != "Freshers' Fringe";});
    var allPeople = resp.filter(function(x) {return x.type==="person"});
    var allActors = []
    for(i = 0; i < allShows.length; i++) {;
      var curr = allShows[i].year_title;
      allShows[i].year_title = curr.replace("&ndash;","-");
      allShows[i].date = new Date(allShows[i].date);
      curr = allShows[i].cast;
      allShows[i].cast = curr.split(", ").slice(0,-1);
      curr = allShows[i].crew;
      allShows[i].crew = curr.split(", ").slice(0,-1);
      (allShows[i].cast).forEach(function(a) {allActors.push(a);});
    }
    var allSeasons = (Array.from(new Set(allShows.map(a => a.season)))).sort();
    console.log(allActors);
    allActors = (Array.from(new Set(allActors))).sort();
    var allActorsObjs = []
    allActors.forEach(function(a) {allActorsObjs.push(actorToObject(a));});

    function allActorsLinks(a) {
      var temp = [],
          actorsShows = allShows.filter(function(d) {return (d.cast).includes(a);});
      actorsShows.forEach(function(s) {(s.cast).forEach(function(d) {temp.push(d);});});
      temp = (Array.from(new Set(temp))).filter(function(d) {return d != a;}).sort();
      return temp;

    }

    function allActorsShows(a) {
      var temp = [];
      (allShows.filter(function(d) {return (d.cast).includes(a);})).forEach(function(d) {temp.push(d.title);});
      //console.log(temp);
      return temp;
    }

    function actorToObject(a) {
      var person = {
        name: a,
        showTitles: allActorsShows(a),
        links: allActorsLinks(a)
      }
      return person;
    }

    var newLinks = [];
    allActorsObjs.forEach(function(so) {(so.links).forEach(function(si) {newLinks.push({source:so.name,target:si});});});
    console.log(newLinks);


    console.log(allActors);
    console.log(links_data);
    console.log(newLinks);
    console.log(nodes_data);
    console.log(allActorsObjs);
    //var allSeasons = Array.from(allShows.forEach(function(d) {return d.season}));
    //console.log(allSeasons);
    //console.log(allShows);
    //console.log(allPeople);
    // BIG CONNECTION GRAPH

    var svg = centre
      .append("svg")
      .attr("id", "connGraph")
      .attr("width", width)
      .attr("height", height);

    var radius = 15;

    //set up the simulation and add forces
    var simulation = d3.forceSimulation()
      .nodes(allActorsObjs);

    var link_force =  d3.forceLink(newLinks)
      .id(function(d) { return d.name; });

    var charge_force = d3.forceManyBody()
      .strength(-100);

    var center_force = d3.forceCenter(width / 2, height / 2);

    simulation
      .force("charge_force", charge_force)
      .force("center_force", center_force)
      .force("links",link_force);


    //add tick instructions:
    simulation.on("tick", tickActions );

    //add encompassing group for the zoom
    var g = svg.append("g")
      .attr("class", "everything");

    //draw lines for the links
    var link = g.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(newLinks)
      .enter()
      .append("line")
      .attr("class","link")
      .style("stroke-width", "0.5")
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
      .attr("r", 15)
      .attr("fill", "red")
      .attr("id", function(d) {return d.name;})
      .attr("shows", function(d) {return d.showTitles;})
      .on("mouseover", function(d) {d3.select(this).attr("fill","black"); 
                                    d3.select("par[id=\"infobox\"]").text(d.name + ", who has been in: " + d.showTitles)
                                   }
         )
      .on("mouseout", function(d) {d3.select(this).attr("fill","red");});

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

    var infoPar = info.append("par")
      .attr("id", "infobox")
      .text("Hover over a node to see a name");

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

    //console.log("Resetting arcs");
    d3.selectAll(".link")
      .attr("stroke-width","0.5")
      .attr("stroke","black");

    //OTHER CHARTS HERE




    //CAST NUMBERS THROUGH THE YEARS


    allDatedShows = allShows.filter(function(d) {return !(isNaN(d.date.getDate()))});
    //console.log(allDatedShows);

    var castNos = centre.append("svg")
      .attr("width", widthM + margin.left + margin.right)
      .attr("height", heightM + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime()
      .domain(d3.extent(allDatedShows, function(d) {return d.date;}))
      .range([0, widthM]);

    var y = d3.scaleLinear()
      .domain(d3.extent(allDatedShows, function(d) {let ca=d.cast;return ca.length;}))
      .range([heightM, 0]);

    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y);

    // Add the X Axis
    castNos.append("g")
      .attr("transform", "translate(0," + heightM + ")")
      .call(xAxis);

    // Add the Y Axis
    castNos.append("g")
      .call(yAxis);

    castNos.selectAll("dot")
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


    //CAST VS CREW NUMBERS
    //
    //
    var castCrewComp = centre.append("svg")
      .attr("width", widthM + margin.left + margin.right)
      .attr("height", heightM + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
      .domain(d3.extent(allDatedShows, function(d) {return (d.cast).length;}))
      .range([0, widthM]);

    var y = d3.scaleLinear()
      .domain(d3.extent(allDatedShows, function(d) {return (d.crew).length;}))
      .range([heightM, 0]);

    var colors = d3.scaleTime()
      .domain(d3.extent(allDatedShows, function(d) {return d.date;}))
      .range(["yellow","purple"]);

    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y);

    // Add the X Axis
    castCrewComp.append("g")
      .attr("transform", "translate(0," + heightM + ")")
      .call(xAxis);

    // Add the Y Axis
    castCrewComp.append("g")
      .call(yAxis);

    castCrewComp.selectAll("dot")
      .data(allDatedShows)
      .enter().append("circle")
      .attr("r", 5)
      .attr("cx", function(d) { return x((d.cast).length); })
      .attr("cy", function(d) { return y((d.crew).length); })
      .attr("season", function(d) {return d.season})
      .attr("fill", function(d) {return seasonColours(d.season);})
      .append("svg:title")
      .text(function(d) {return d.title + ", " + d.year_title});

    var showCounts = d3.nest()
      .key(function(d) {return d.year_title;})
      .entries(allShows);

    var showCounts2 = d3.nest()
      .key(function(d) {return d.year_title;})
      .key(function(d) {return d.season;})
      .entries(allShows);

    showCounts2.forEach(function(d) {(d.values).forEach(function(x) {x.year_title = d.key})});
    showCounts2.forEach(function(d) {(d.values).forEach(function(x) {d = x;})});
    var showCounts3 = [];
    showCounts2.forEach(function(d) {(showCounts3).push(d.values);});
    showCounts3 = [].concat.apply([], showCounts3);
    showCounts3.forEach(function(d) {d.season = d.key});
    showCounts4 = (d3.nest().key(function(d) {return d.year_title;}).entries(showCounts3)).sort(function(a,b) {return parseInt(a.key)-parseInt(b.key);});


    //console.log(showCounts);
    //console.log(showCounts2);
    //console.log(showCounts3);
    //console.log(showCounts4);
    showCounts5 = [];
    showCounts4.forEach(function(d) {(d.values).forEach(function(v) {showCounts5.push(v)})});
    //console.log(showCounts5);

    showCounts.forEach(function(d) {d.count = (d.values).length});
    showCounts.sort(function(a,b) {if(a.key > b.key){return 1}else if(b.key > a.key){return -1}else{return 0}});


    // set the dimensions and margins of the graph
    // parse the date / time
    var parseTime = d3.timeParse("%d-%b-%y");

    // set the ranges
    var x = d3.scaleTime().range([0, widthM]);
    var y = d3.scaleLinear().range([heightM, 0]);

    // define the line
    var valueline = d3.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y((d.cast).length); });

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = centre.append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

    // Get the data
    // Scale the range of the data
    x.domain(d3.extent(showCounts5, function(d){return Date.parse((d.year_title).slice(0,4));}));
    y.domain([0, d3.max(showCounts5, function(d){return (d.values).length;})]);

    // Add the valueline path.
    allSeasons.forEach(function(s) {
      var seasonData = showCounts5.filter(function(d) {return d.season==s;});
      var lineValue = d3.line()
        .x(function(d){return x(Date.parse((d.year_title).slice(0,4)))})
        .y(function(d){return y((d.values).length)});

      svg.append("path")
        .datum(seasonData)
        .attr("class", "line")
        .attr("stroke", seasonColours(s))
        .attr("season", s)
        .attr("d", lineValue);

      svg.selectAll("dot")
         .data(seasonData)
         .enter().append("circle")
                 .attr("r", 5)
                 .attr("cx", function(d) { return x(Date.parse((d.year_title).slice(0,4))); })
                 .attr("cy", function(d) { return y((d.values).length); })
                 .attr("season", s)
                 .attr("fill", seasonColours(s))
                 .append("svg:title")
                 .text(function(d) {return s + " " + d.year_title + " (" + (d.values).length + " shows)"});

    });

    // Add the X Axis
    svg.append("g")
      .attr("transform", "translate(0," + heightM + ")")
      .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g")
      .call(d3.axisLeft(y));

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

  }
}
