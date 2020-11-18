var content = document.querySelector("#content");

var width = content.offsetWidth - 20;
height = window.innerHeight * 0.8,
  margin = {top: 20, right: 50, bottom: 20, left: 80},
  widthM = width - margin.left - margin.right,
  heightM = height - margin.top - margin.bottom;

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
  allYears = [];

var cardClasses = "card col-12";

function searchGraph() {
  resetGraph();
  var sValue = document.querySelector("#searchVal").value;
  d3.select("par[id=\"infobox\"]").text(sValue);

  d3.selectAll("circle[class=\"connNode\"]")
    .filter(function(d){return d.name!=sValue;})
    .attr("opacity", 0.1);

  d3.selectAll("circle[class=\"connNode\"]")
    .filter(function(d){return d.name==sValue;})
    .each(function(){this.parentElement.appendChild(this);});

  d3.selectAll("line[class=\"connLink\"]")
    .filter(function(d){return d.source.name!=sValue && d.target.name!=sValue;})
    .style("stroke","grey")
    .attr("opacity",0.1);

  d3.selectAll("line[class=\"connLink\"]")
    .filter(function(d){return d.source.name==sValue || d.target.name==sValue;})
    .style("stroke-width", function(d){return 1*(d.strength);});
}

function resetGraph() {
  d3.selectAll("circle[class=\"connNode\"]")
    .attr("opacity",1);
  d3.selectAll("line[class=\"connLink\"]")
    .style("stroke-width", function(d){return 0.5*(d.strength);})
    .style("stroke","black")
    .attr("opacity",1);
}

function filterSeason() {
  allSeasons.forEach(function(s){
    if(!document.querySelector("#" + s + "Filt").checked){
      d3.selectAll("[season=\"" + s + "\"]").attr("opacity", 0).attr("pointer-events","none");
    } else {
      d3.selectAll("[season=\"" + s + "\"]").attr("opacity", 1).attr("pointer-events","all");
    };
  })
}

function resetFilterSeason() {
  d3.selectAll("circle").attr("opacity", 1).attr("pointer-events","all");
  d3.selectAll("path").attr("opacity", 1).attr("pointer-events","all");
  d3.selectAll("input[type=\"checkbox\"]").property("checked","true");
}

function seasonColours(s) {
  switch(s){
    case "In House":return "yellow"; break;
    case "UNCUT": return "orange"; break;
    case "Fringe": return "purple"; break;
    case "STuFF": return "red"; break;
    case "Postgrads": return "blue"; break;
    case "External": return "grey"; break;
    case "Lakeside": return "steelblue"; break;
    case "Fundraiser": return "lightgreen"; break;
    case "Previews":
    case "Edinburgh": return "green"; break;
    case "IUDF": return "navy"; break;
    default: return "black"; break;
  }
}

function year_titleToDate(yt){return Date.parse(yt.slice(0,4));}
function rmDups(list){return Array.from(new Set(list));}

function process() {
  if (xhr.readyState==4){
    /*
     *
     *  GONNA SET UP THE DRAWING STUFF NOW
     *
     */

    var svg,
      linevalue,
      x,
      y,
      xAxis,
      yAxis;


    resp = JSON.parse(xhr.responseText);

    // resp now has the text and you can process it.
    if(fullHistory == 1){
      allShows = resp.filter(function(x){return x.type==="show" && x.title != "Freshers' Fringe";});
    } else {
      allShows = resp.filter(function(x){return x.type==="show"
          && x.title != "Freshers' Fringe"
          && x.year_title>="2010&ndash;11";
      });
    }
    allPeople = resp.filter(function(x){return x.type==="person"});
    allShows.forEach(function(s){
      s.year_title = (s.year_title).replace("&ndash;","-");
      s.date = (s.date) = new Date(s.date)
      s.cast = rmDups((s.cast).split(", ").slice(0,-1));
      s.crew = rmDups((s.crew).split(", ").slice(0,-1));
      (s.cast).forEach(function(a){allActors.push(a);});
    });

    allSeasons = (rmDups(allShows.map(function(d){return d.season;}))).sort();
    allActors = (rmDups(allActors)).sort();
    allActors.forEach(function(a){allActorsObjs.push(actorToObject(a));});
    allYears = (rmDups(allShows.map(function(d){return d.year_title;}))).sort();

    function allActorsShows(a){
      var temp = [];
      (allShows.filter(function(d){return (d.cast).includes(a);}))
        .forEach(function(d){temp.push(d.title);});
      return temp;
    }

    function actorToObject(a){
      var personShows = allShows.filter(function(d){return (d.cast).includes(a);}),
        personLinks = [],
        personShowTitles = [],
        earliestShow = "3000-01",
        personRecordLink;

      var personRecord = allPeople.find(function(d){return d.title == a});

      if(personRecord === undefined){
        personRecordLink = "https://history.newtheatre.org.uk/people";
      } else {
        personRecordLink = "https://history.newtheatre.org.uk" + personRecord.link;
      };


      personShows.forEach(function(s){
        personShowTitles.push(s.title);
        (s.cast).forEach(function(d){if(!personLinks.includes(d)){personLinks.push(d);}});
        if(s.year_title < earliestShow){earliestShow = s.year_title};
      });
      personLinks = personLinks.filter(function(l){return l!=a;})
        .map(function(l){var conns = allShows.filter(function(d){return d.cast.includes(a) && d.cast.includes(l)})
          return {name:         l,
            connections:  conns,
            strength:     conns.length
          };
        })
        .sort(function(l1,l2){return l2.strength-l1.strength;});

      personShows = personShows.sort(function(s1,s2){if(s1.title>s2.title){
        return 1;
      }else if(s2.title>s1.title){
        return -1;
      }else{
        return 0;
      };});
      return {
        name: a,
        shows: personShows,
        firstYear: earliestShow,
        record: personRecord,
        url: personRecordLink,
        links: personLinks
      }
    }


    var yearColourAxis = d3.scaleOrdinal()
      .domain(allYears)
      .range(d3.quantize(d3.interpolate("#0000ff","#ff0000"), allYears.length));

    function addAxisLabels(xLabel, yLabel){
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

    //}


    if(showConnectionGraph){
      setTimeout(function() { // Timing it out so it runs async
        allActorsObjs.forEach(function(so){
          (so.links).forEach(function(ta){
            if(so.name != ta.name && links.filter(function(d){return (d.source == ta.name && d.target == so.name)
                || (d.source == so.name && d.target == ta.name);})
              .length == 0){
              links.push({source:so.name,target:ta.name,strength:ta.strength});
            }
          })
        });



        connCard = d3.select("#connCard");
        connCard.html("");

        svg = connCard.append("svg")
          .attr("id", "connGraph")
          .attr("width", width)
          .attr("height", height);

        var radius = 15;

        //set up the simulation and add forces
        var simulation = d3.forceSimulation()
          .nodes(allActorsObjs);

        var link_force =  d3.forceLink(links)
          .id(function(d){return d.name;})
          .strength(function(d){return Math.sqrt(d.strength/30);});

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
          .attr("source", function(d){return d.source.name;})
          .attr("sink", function(d){return d.target.name;});

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
          .style("stroke-width", function(d){return 0.15*(Math.sqrt((d.links).length));})
          .style("stroke", "white")
          .attr("fill", function(d){return yearColourAxis(d.firstYear);})
          .attr("id", function(d){return d.name;})
          .on("mouseover", function(d){
            d3.select(this).attr("fill","black");
            this.parentElement.appendChild(this);
            infoText.text(d.name);
            infoShows.text("Has been in " + (d.shows).length + ((d.shows).length == 1 ? " show" : " shows"));
            infoLinks.text("Has a total of " + (d.links).length + ((d.links).length == 1 ? " link" : " links"));
            var textWidth = d3.max([infoText,infoShows,infoLinks], function(i){return (i.node().getBBox()).width;}) + 10;
            infoBox.attr("x", width - (textWidth + 5))
              .attr("width", textWidth)
              .attr("height", "4.4em");
          })
          .on("mouseout", function(t){d3.select(this).attr("fill", yearColourAxis(t.firstYear));})
          .on("click", function(person){
            var boxWidth = [1,2,3,4].map(function(d){return d*(widthM/4);}),
              boxHeight = [1,2,3,4].map(function(d){return d*(heightM/4);});
            infoSVG.selectAll("*").remove();
            document.querySelector("#infoSVG").scrollIntoView();

            /*
             *  BAR GRAPH OF TOP 5 LINKS
             */

            var topLinks = person.links.slice(0,5),

              barX = d3.scaleBand()
              .range([0,boxWidth[1]])
              .domain(topLinks.map(function(l){return l.name;}))
              .padding(0.1),
              barY = d3.scaleLinear()
              .range([boxHeight[1],0])
              .domain([0,d3.max(topLinks, function(d){return d.strength;})]),


              barXAxis = d3.axisBottom(barX),
              barYAxis = d3.axisLeft(barY)
              .ticks(d3.max(topLinks, function(d){return d.strength;}));

            // Add the X Axis
            infoSVG.append("g")
              .attr("transform", "translate(0," + boxHeight[1] + ")")
              .call(barXAxis)
              .selectAll("text")
              .attr("text-anchor", "start")
              .attr("transform","rotate(15)");

            // Add the Y Axis
            infoSVG.append("g")
              .call(barYAxis);

            infoSVG.selectAll("bar")
              .data(topLinks)
              .enter().append("rect")
              .attr("x", function(d){return barX(d.name);})
              .attr("y", function(d){return barY(d.strength);})
              .attr("width", barX.bandwidth)
              .attr("height", function(d){return (boxHeight[1])-barY(d.strength);})
              .attr("fill", "rgb(0,0,0)")
            //.append("svg:title")
            //.text(function(d){return d.connections.map(function(c){return c.title;});});
              .append("svg:title")
              .append("text")
              .text(function(d){
                var conns = [];
                (d.connections).forEach(function(c){conns += (c.title + "\n");});
                return conns;
              });

            infoSVG.append("text")
              .attr("transform", "translate("+(0-margin.left/2)+","+(boxHeight[0])+") rotate(-90)")
              .style("font-weight", "bolder")
              .style("text-anchor", "middle")
              .text("Number Of Shared Shows");


            /*
             *  RADAR GRAPH BREAKDOWN OF SHOWS BY SEASON
             */

            var divisions = (2*Math.PI)/allSeasons.length,
              seasonCounts = d3.nest()
              .key(function(d){return d.season;})
              .entries(person.shows),

              circleCenter = boxWidth[2] + (margin.left/2),

              radius = (boxHeight[0] > boxWidth[0] ? boxWidth[0] : boxHeight[0]),

              seasonScale = d3.scaleLinear()
              .range([0, radius])
              .domain([0,d3.max(seasonCounts, function(d){return (d.values).length;})]),
              radarAxis = d3.axisBottom(seasonScale)
              .ticks(d3.max(seasonCounts, function(d){return (d.values).length;}));

            for(i=0;i<allSeasons.length;i++){   // Interesting to note the use of a for-loop rather than a forEach() call here, at least I think
              var angle = divisions*i,
                s = Math.sin(angle),
                c = Math.cos(angle),
                shows = seasonCounts.find(function(d){return d.key === allSeasons[i]}),
                showNames = (shows !== undefined ? shows.values : [{title:"Nothing"}])
              showNum = seasonScale((shows !== undefined ? (shows.values).length : 0)),
                angleDegs = angle*(180/Math.PI);

              infoSVG.append("g")
                .attr("transform","translate(" + circleCenter + "," + boxHeight[0] + ") rotate("+ angleDegs +")")
                .call(radarAxis);

              infoSVG.append("g")
                .attr("transform","translate(" + circleCenter + "," + boxHeight[0] + ") rotate("+ angleDegs +") translate(75,-5)")
                .append("text")
                .attr("text-anchor", "center")
                .text(allSeasons[i])

              infoSVG.append("circle")
                .attr("r", 5)
                .attr("cx", circleCenter + (showNum*c))
                .attr("cy", boxHeight[0] + (showNum*s))
                .attr("fill", seasonColours(allSeasons[i]))
                .append("svg:title")
                .append("text")
                .text(function(d){
                  var titles = [];
                  showNames.forEach(function(s){titles += (s.title + "\n");});
                  return titles;
                });
            }

            infoSVG.append("text")
              .attr("x", boxWidth[0])
              .attr("y", margin.top-30)
              .style("font-weight", "bolder")
              .style("text-anchor", "middle")
              .text(person.name + "'s top 5 co-cast members");

            infoSVG.append("text")
              .attr("x", circleCenter)
              .attr("y", margin.top-30)
              .style("font-weight", "bolder")
              .style("text-anchor", "middle")
              .text("How many shows of each season " + person.name + " has been in");
          });

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

        //add zoom capabilities
        var zoom_handler = d3.zoom()
          .scaleExtent([0.1, 3])
          .on("zoom", zoom_actions);

        zoom_handler(svg);

        //Zoom functions
        function zoom_actions(){
          g.attr("transform", d3.event.transform)
        }

        function tickActions(){
          //update circle positions each tick of the simulation
          node
            .attr("cx", function(d){ return d.x; })
            .attr("cy", function(d){ return d.y; });

          //update link positions
          link
            .attr("x1", function(d){ return d.source.x; })
            .attr("y1", function(d){ return d.source.y; })
            .attr("x2", function(d){ return d.target.x; })
            .attr("y2", function(d){ return d.target.y; });
        }



        /*
         *  NAME, NUMBER OF SHOWS, NUMBER OF LINKS IN A RECTANGLE
         *  AT THE TOP-RIGHT OF THE GRAPH
         */

        var infoBox = svg.append("rect")
          .attr("id", "infoBox")
          .attr("x", width - 95)
          .attr("y", 5)
          .attr("width", 0)
          .attr("height", "2.2em")
          .attr("fill", "white")
          .attr("opacity", 0.5);

        var infoText = svg.append("text")
          .attr("id","infoText")
          .attr("font-size", 12)
          .attr("font-color", "black")
          .attr("x", width - 10)
          .attr("y", 5)
          .attr("dy", "1.1em")
          .attr("text-anchor", "end")
          .text("Hover over a node to see a name");

        var infoShows = svg.append("text")
          .attr("id","infoShows")
          .attr("font-color", "black")
          .attr("font-size", 12)
          .attr("x", width - 10)
          .attr("y", 5)
          .attr("dy", "2.2em")
          .attr("text-anchor", "end");

        var infoLinks = svg.append("text")
          .attr("id","infoLinks")
          .attr("font-color", "black")
          .attr("font-size", 12)
          .attr("x", width - 10)
          .attr("y", 5)
          .attr("dy", "3.3em")
          .attr("text-anchor", "end");

        infoBox.attr("width", (infoText.node().getBBox()).width + 10)
          .attr("x", width - ((infoText.node().getBBox()).width + 15));

        var info = connCard.append("div")
          .attr("id", "info");

        var searcher = info.append("input")
          .attr("id", "searchVal")
          .attr("name", "searchVal")
          .attr("placeholder", "Search a person")
          .attr("type", "text");

        var searchbutton = info.append("button")
          .attr("onclick", "searchGraph()")
          .attr("class", "btn btn-primary")
          .append("text")
          .text("Search");

        var resetbutton = info.append("button")
          .attr("onclick", "resetGraph()")
          .attr("class", "btn btn-secondary")
          .append("text")
          .text("Reset");

        /*
         *  MORE DETAILS ABOUT SOMEONE AVAILABLE ON CLICKING THEIR NODE
         */

        var infoSVG = connCard.append("svg")
          .attr("id","infoSVG")
          .attr("width",width)
          .attr("height",(height/2) + 50)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        infoSVG.append("text")
          .attr("x", widthM/2)
          .attr("y", height/4)
          .attr("font-size", 30)
          .attr("text-anchor", "middle")
          .attr("dy", "1em")
          .text("Click on a node to get more information");

        function detailedInfo(person) {
          var boxWidth = [1,2,3,4].map(function(d){return d*(widthM/4);}),
            boxHeight = [1,2,3,4].map(function(d){return d*(heightM/4);});
          infoSVG.selectAll("*").remove();
          document.querySelector("#infoSVG").scrollIntoView();

          /*
           *  BAR GRAPH OF TOP 5 LINKS
           */

          var topLinks = person.links.slice(0,5);
          var barX = d3.scaleBand()
            .range([0,boxWidth[1]])
            .domain(topLinks.map(function(l){return l.name;}))
            .padding(0.1);
          var barY = d3.scaleLinear()
            .range([boxHeight[1],0])
            .domain([0,d3.max(topLinks, function(d){return d.strength;})]);


          var barXAxis = d3.axisBottom(barX);
          var barYAxis = d3.axisLeft(barY)
            .ticks(d3.max(topLinks, function(d){return d.strength;}));

          // Add the X Axis
          infoSVG.append("g")
            .attr("transform", "translate(0," + boxHeight[1] + ")")
            .call(barXAxis)
            .selectAll("text")
            .attr("text-anchor", "start")
            .attr("transform","rotate(15)");

          // Add the Y Axis
          infoSVG.append("g")
            .call(barYAxis);

          infoSVG.selectAll("bar")
            .data(topLinks)
            .enter().append("rect")
            .attr("x", function(d){return barX(d.name);})
            .attr("y", function(d){return barY(d.strength);})
            .attr("width", barX.bandwidth)
            .attr("height", function(d){return (boxHeight[1])-barY(d.strength);})
            .attr("fill", "rgb(0,0,0)");

          infoSVG.append("text")
            .attr("transform", "translate("+(0-margin.left/2)+","+(boxHeight[0])+") rotate(-90)")
            .style("font-weight", "bolder")
            .style("text-anchor", "middle")
            .text("Number Of Shared Shows");


          /*
           *  RADAR GRAPH BREAKDOWN OF SHOWS BY SEASON
           */

          var divisions = (2*Math.PI)/allSeasons.length;
          var seasonCounts = d3.nest()
            .key(function(d){return d.season;})
            .entries(person.shows);

          var circleCenter = boxWidth[2] + (margin.left/2);

          var radius = (boxHeight[0] > boxWidth[0] ? boxWidth[0] : boxHeight[0]);

          var seasonScale = d3.scaleLinear()
            .range([0, radius])
            .domain([0,d3.max(seasonCounts, function(d){return (d.values).length;})]);
          var radarAxis = d3.axisBottom(seasonScale)
            .ticks(d3.max(seasonCounts, function(d){return (d.values).length;}));

          for(i=0;i<allSeasons.length;i++){   // Interesting to note the use of a for-loop rather than a forEach() call here, at least I think
            var angle = divisions*i,
              s = Math.sin(angle),
              c = Math.cos(angle),
              shows = seasonCounts.find(function(d){return d.key === allSeasons[i]}),
              showNum = seasonScale((shows !== undefined ? (shows.values).length : 0)),
              angleDegs = angle*(180/Math.PI);

            infoSVG.append("g")
              .attr("transform","translate(" + circleCenter + "," + boxHeight[0] + ") rotate("+ angleDegs +")")
              .call(radarAxis);

            infoSVG.append("g")
              .attr("transform","translate(" + circleCenter + "," + boxHeight[0] + ") rotate("+ angleDegs +") translate(75,-5)")
              .append("text")
              .attr("text-anchor", "center")
              .text(allSeasons[i])

            infoSVG.append("circle")
              .attr("r", 5)
              .attr("cx", circleCenter + (showNum*c))
              .attr("cy", boxHeight[0] + (showNum*s))
              .attr("fill", seasonColours(allSeasons[i]));
          }

          infoSVG.append("text")
            .attr("x", boxWidth[0])
            .attr("y", margin.top-30)
            .style("font-weight", "bolder")
            .style("text-anchor", "middle")
            .text(person.name + "'s top 5 co-cast members");

          infoSVG.append("text")
            .attr("x", circleCenter)
            .attr("y", margin.top-30)
            .style("font-weight", "bolder")
            .style("text-anchor", "middle")
            .text("How many shows of each season " + person.name + " has been in");
        }
      }, 1);
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

      mostShowsCard = d3.select("#mostShowsCard");
      mostShowsCard.html("");

      svg = mostShowsCard.append("svg")
        .attr("id", "mostShowsGraph")
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

      xAxis = d3.axisBottom(x);
      yAxis = d3.axisLeft(y);

      // Add the X Axis
      svg.append("g")
        .attr("transform", "translate(0," + heightM + ")")
        .call(xAxis)
        .selectAll("text")
        .attr("text-anchor", "start")
        .attr("transform","rotate(15)");

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
        .attr("fill", function(d){return yearColourAxis(d.firstYear);})
        .append("svg:title")
        .append("text")
        .text(function(d){
          var titles = [];
          (d.shows).forEach(function(s){titles += (s.title + "\n");});
          return (titles + "---\n" + d.shows.length + " shows");
        });

      addAxisLabels("","Number of Shows");

      //CAST NUMBERS THROUGH THE YEARS

      allDatedShows = allShows.filter(function(d){return !(isNaN(d.date.getDate()))});

      castNosCard = d3.select("#castNosCard");
      castNosCard.html("");

      svg = castNosCard.append("svg")
        .attr("id", "castNosGraph")
        .attr("width", width)
        .attr("height", height + 20)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x = d3.scaleTime()
        .domain(d3.extent(allDatedShows, function(d){return d.date;}))
        .range([0, widthM]);

      y = d3.scaleLinear()
        .domain(d3.extent(allDatedShows, function(d){let ca=d.cast;return ca.length;}))
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
        .attr("cx", function(d){ return x(d.date); })
        .attr("cy", function(d){ return y((d.cast).length); })
        .text(function(d){return d.title + ", " + d.year_title})
        .attr("season", function(d){return d.season})
        .attr("fill", function(d){return seasonColours(d.season);})
        .append("svg:title")
        .text(function(d){return d.title + ", " + d.year_title});

      addAxisLabels("Year", "Cast Size");

      //CAST VS CREW NUMBERS

      castCrewNosCard = d3.select("#castCrewNosCard");
      castCrewNosCard.html("");

      svg = castCrewNosCard.append("svg")
        .attr("id","castCrewNosGraph")
        .attr("width", width)
        .attr("height", height + 20)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x = d3.scaleLinear()
        .domain(d3.extent(allDatedShows, function(d){return (d.cast).length;}))
        .range([0, widthM]);

      y = d3.scaleLinear()
        .domain(d3.extent(allDatedShows, function(d){return (d.crew).length;}))
        .range([heightM, 0]);

      var colors = d3.scaleTime()
        .domain(d3.extent(allDatedShows, function(d){return d.date;}))
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
        .attr("cx", function(d){ return x((d.cast).length); })
        .attr("cy", function(d){ return y((d.crew).length); })
        .attr("season", function(d){return d.season})
        .attr("fill", function(d){return seasonColours(d.season);})
        .append("svg:title")
        .text(function(d){return d.title + ", " + d.year_title});

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

      showNosCard = d3.select("#showNosCard");
      showNosCard.html("");

      svg = showNosCard.append("svg")
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
        .attr("cx", function(d){return x(year_titleToDate(d.key));})
        .attr("cy", function(d){return y((d.values).length);})
        .attr("fill", function(d){return seasonColours(d.season);})
        .append("svg:title")
        .append("text")
        .text(function(d){
          var titles = [];
          (d.values).sort(function(a,b){return a.date - b.date;}).forEach(function(v){titles+=(v.title + "\n");})
          return d.season + " " + d.key + ": " + (d.values).length + " shows\n----\n" + titles;
        });


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

      filterCard = d3.select("#filterCard");
      filterCard.html("");

      allSeasons.forEach(function(s){
        filterCard.append("br");
        filterCard.append("input")
          .attr("type", "checkbox")
          .attr("id", s + "Filt")
          .attr("name", s + "Filt")
          .property("checked","true");

        filterCard.append("label")
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
      filterCard.append("br");
      filterCard.append("button")
        .attr("onclick", "filterSeason()")
        .attr("class", "btn btn-primary")
        .append("text")
        .text("Filter Season");

      filterCard.append("button")
        .attr("onclick", "resetFilterSeason()")
        .attr("class", "btn btn-danger")
        .append("text")
        .text("Reset");

      /*
       *
       *  Number of people in their first shows per year
       *
       */

      var newNos = (d3.nest()
        .key(function(d){return d.firstYear;})
        .entries(allActorsObjs)).sort(function(a,b){
          var aVal = (a.key).slice(0,4),
            bVal = (b.key).slice(0,4);
          return aVal-bVal;});

      newNosCard = d3.select("#newNosCard");
      newNosCard.html("");

      svg = newNosCard.append("svg")
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
