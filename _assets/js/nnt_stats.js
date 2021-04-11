import axios from 'axios';
import * as d3 from 'd3';

const content = document.querySelector('.content');

const width = content.offsetWidth - 20;
const height = window.innerHeight * 0.8;
const margin = {top: 20, right: 50, bottom: 20, left: 80};
const widthM = width - margin.left - margin.right;
const heightM = height - margin.top - margin.bottom;
const allActorsObjs = [];
const links = [];

let allShows = [];
let allPeople = [];
let allActors = [];
let allSeasons = [];
let allYears = [];

function searchGraph() {
  resetGraph();
  const sValue = document.querySelector('#searchVal').value;
  d3.select('par[id="infobox"]').text(sValue);

  d3.selectAll('circle[class="connNode"]')
      .filter(function(d) {
        return d.name != sValue;
      })
      .attr('opacity', 0.1);

  d3.selectAll('circle[class="connNode"]')
      .filter(function(d) {
        return d.name == sValue;
      })
      .each(function(item) {
        item.parentElement.appendChild(item);
      });

  d3.selectAll('line[class="connLink"]')
      .filter(function(d) {
        return d.source.name != sValue && d.target.name != sValue;
      })
      .style('stroke', 'grey')
      .attr('opacity', 0.1);

  d3.selectAll('line[class="connLink"]')
      .filter(function(d) {
        return d.source.name == sValue || d.target.name == sValue;
      })
      .style('stroke-width', function(d) {
        return 1 * d.strength;
      });
}

function resetGraph() {
  d3.selectAll('circle[class="connNode"]').attr('opacity', 1);
  d3.selectAll('line[class="connLink"]')
      .style('stroke-width', function(d) {
        return 0.5 * d.strength;
      })
      .style('stroke', 'black')
      .attr('opacity', 1);
}

function filterSeason() {
  allSeasons.forEach(function(s) {
    if (!document.querySelector('#' + s + 'Filt').checked) {
      d3.selectAll('[season="' + s + '"]')
          .attr('opacity', 0)
          .attr('pointer-events', 'none');
    } else {
      d3.selectAll('[season="' + s + '"]')
          .attr('opacity', 1)
          .attr('pointer-events', 'all');
    }
  });
}

function resetFilterSeason() {
  d3.selectAll('circle')
      .attr('opacity', 1)
      .attr('pointer-events', 'all');
  d3.selectAll('path')
      .attr('opacity', 1)
      .attr('pointer-events', 'all');
  d3.selectAll('input[type="checkbox"]').property('checked', 'true');
}

function seasonColours(s) {
  switch (s) {
    case 'In House': return 'yellow';
    case 'UNCUT': return 'orange';
    case 'Fringe': return 'purple';
    case 'STuFF': return 'red';
    case 'Postgrads': return 'blue';
    case 'External': return 'grey';
    case 'Lakeside': return 'steelblue';
    case 'Fundraiser': return 'lightgreen';
    case 'Previews':
    case 'Edinburgh': return 'green';
    case 'IUDF': return 'navy';
    default: return 'black';
  }
}

function yearTitleToDate(yt) {
  return Date.parse(yt.slice(0, 4));
}
function rmDups(list) {
  return Array.from(new Set(list));
}


export default function stats() {
  axios
      .get('https://history.newtheatre.org.uk/feeds/search.json')
      .then(({data: resp}) => {
        console.log('data', resp);
        /*
     *
     *  GONNA SET UP THE DRAWING STUFF NOW
     *
     */

        let svg;
        let linevalue;
        let x;
        let y;
        let xAxis;
        let yAxis;

        allShows = resp.filter((x) => x.type === 'show');
        allPeople = resp.filter((x) => x.type === 'person');

        // resp now has the text and you can process it.
        if (fullHistory === 1) {
          allShows = allShows.filter((x) => x.title != 'Freshers\' Fringe');
        } else {
          allShows = allShows.filter((x) => {
            const t = x.title != 'Freshers\' Fringe';
            const y = x.year_title >= '2010&ndash;11';
            return t && y;
          });
        }
        allShows.forEach(function(s) {
          s.year_title = s.year_title.replace('&ndash;', '-');
          s.date = s.date = new Date(s.date);
          s.cast = rmDups(s.cast.split(', ').slice(0, -1));
          s.crew = rmDups(s.crew.split(', ').slice(0, -1));
          s.cast.forEach(function(a) {
            allActors.push(a);
          });
        });

        allSeasons = rmDups(
            allShows.map(function(d) {
              return d.season;
            }),
        ).sort();
        allActors = rmDups(allActors).sort();
        allActors.forEach(function(a) {
          allActorsObjs.push(actorToObject(a, allShows, allPeople));
        });
        allYears = rmDups(
            allShows.map(function(d) {
              return d.year_title;
            }),
        ).sort();

        const yearColourAxis = d3
            .scaleOrdinal()
            .domain(allYears)
            .range(
                d3.quantize(
                    d3.interpolate('#0000ff', '#ff0000'),
                    allYears.length,
                ),
            );

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

        // }

        if (showConnectionGraph) {
          setTimeout(function() {
            // Timing it out so it runs async
            allActorsObjs.forEach(function(so) {
              so.links.forEach(function(ta) {
                if (
                  so.name != ta.name &&
              links.filter(function(d) {
                return (
                  (d.source == ta.name && d.target == so.name) ||
                  (d.source == so.name && d.target == ta.name)
                );
              }).length == 0
                ) {
                  links.push({
                    source: so.name,
                    target: ta.name,
                    strength: ta.strength,
                  });
                }
              });
            });

            const connCard = d3.select('#connCard');
            connCard.html('');

            svg = connCard
                .append('svg')
                .attr('id', 'connGraph')
                .attr('width', width)
                .attr('height', height);

            // set up the simulation and add forces
            const simulation = d3.forceSimulation().nodes(allActorsObjs);

            const linkForce = d3
                .forceLink(links)
                .id(function(d) {
                  return d.name;
                })
                .strength(function(d) {
                  return Math.sqrt(d.strength / 30);
                });

            const chargeForce = d3.forceManyBody().strength(-100);

            const centerForce = d3.forceCenter(width / 2, height / 2);

            simulation
                .force('chargeForce', chargeForce)
                .force('centerForce', centerForce)
                .force('links', linkForce)
                .on('tick', function() {
                  // update circle positions each tick of the simulation
                  node
                      .attr('cx', (d) => d.x)
                      .attr('cy', (d) => d.y);

                  // update link positions
                  link
                      .attr('x1', (d) => d.source.x)
                      .attr('y1', (d) => d.source.y)
                      .attr('x2', (d) => d.target.x)
                      .attr('y2', (d) => d.target.y);
                });

            // add encompassing group for the zoom
            const g = svg.append('g').attr('class', 'everything');

            // draw lines for the links
            const link = g
                .append('g')
                .attr('class', 'links')
                .selectAll('line')
                .data(links)
                .enter()
                .append('line')
                .attr('class', 'link')
                .attr('class', 'connLink')
                .style('stroke-width', function(d) {
                  return 0.5 * d.strength;
                })
                .style('stroke', 'black')
                .attr('source', function(d) {
                  return d.source.name;
                })
                .attr('sink', function(d) {
                  return d.target.name;
                });

            // draw circles for the nodes
            const node = g
                .append('g')
                .attr('class', 'nodes')
                .selectAll('circle')
                .data(allActorsObjs)
                .enter()
                .append('circle')
                .attr('class', 'node')
                .attr('class', 'connNode')
                .attr('r', function(d) {
                  return 3 * Math.sqrt(d.links.length);
                })
                .style('stroke-width', function(d) {
                  return 0.15 * Math.sqrt(d.links.length);
                })
                .style('stroke', 'white')
                .attr('fill', function(d) {
                  return yearColourAxis(d.firstYear);
                })
                .attr('id', function(d) {
                  return d.name;
                })
                .on('mouseover', function(d) {
                  d3.select(d).attr('fill', 'black');
                  this.parentElement.appendChild(this);
                  infoText.text(d.name);
                  infoShows.text(
                      'Has been in ' +
                d.shows.length +
                (d.shows.length == 1 ? ' show' : ' shows'),
                  );
                  infoLinks.text(
                      'Has a total of ' +
                d.links.length +
                (d.links.length == 1 ? ' link' : ' links'),
                  );
                  const textWidth =
              d3.max([infoText, infoShows, infoLinks], function(i) {
                return i.node().getBBox().width;
              }) + 10;
                  infoBox
                      .attr('x', width - (textWidth + 5))
                      .attr('width', textWidth)
                      .attr('height', '4.4em');
                })
                .on('mouseout', function(t) {
                  d3.select(this).attr('fill', yearColourAxis(t.firstYear));
                })
                .on('click', function(person) {
                  const boxWidth = [1, 2, 3, 4].map(function(d) {
                    return d * (widthM / 4);
                  });
                  const boxHeight = [1, 2, 3, 4].map(function(d) {
                    return d * (heightM / 4);
                  });
                  infoSVG.selectAll('*').remove();
                  document.querySelector('#infoSVG').scrollIntoView();

                  /*
             *  BAR GRAPH OF TOP 5 LINKS
             */

                  const topLinks = person.links.slice(0, 5);
                  const barX = d3
                      .scaleBand()
                      .range([0, boxWidth[1]])
                      .domain(
                          topLinks.map(function(l) {
                            return l.name;
                          }),
                      )
                      .padding(0.1);
                  const barY = d3
                      .scaleLinear()
                      .range([boxHeight[1], 0])
                      .domain([
                        0,
                        d3.max(topLinks, function(d) {
                          return d.strength;
                        }),
                      ]);
                  const barXAxis = d3.axisBottom(barX);
                  const barYAxis = d3.axisLeft(barY).ticks(
                      d3.max(topLinks, function(d) {
                        return d.strength;
                      }),
                  );

                  // Add the X Axis
                  infoSVG
                      .append('g')
                      .attr('transform', 'translate(0,' + boxHeight[1] + ')')
                      .call(barXAxis)
                      .selectAll('text')
                      .attr('text-anchor', 'start')
                      .attr('transform', 'rotate(15)');

                  // Add the Y Axis
                  infoSVG.append('g').call(barYAxis);

                  infoSVG
                      .selectAll('bar')
                      .data(topLinks)
                      .enter()
                      .append('rect')
                      .attr('x', function(d) {
                        return barX(d.name);
                      })
                      .attr('y', function(d) {
                        return barY(d.strength);
                      })
                      .attr('width', barX.bandwidth)
                      .attr('height', function(d) {
                        return boxHeight[1] - barY(d.strength);
                      })
                      .attr('fill', 'rgb(0,0,0)')
                      .append('svg:title')
                      .append('text')
                      .text(function(d) {
                        let conns = [];
                        d.connections.forEach(function(c) {
                          conns += c.title + '\n';
                        });
                        return conns;
                      });

                  infoSVG
                      .append('text')
                      .attr(
                          'transform',
                          'translate(' +
                  (0 - margin.left / 2) +
                  ',' +
                  boxHeight[0] +
                  ') rotate(-90)',
                      )
                      .style('font-weight', 'bolder')
                      .style('text-anchor', 'middle')
                      .text('Number Of Shared Shows');

                  /*
             *  RADAR GRAPH BREAKDOWN OF SHOWS BY SEASON
             */

                  const divisions = (2 * Math.PI) / allSeasons.length;
                  const seasonCounts = d3
                      .group(
                          Object.entries(person.shows),
                          (d) => d.season,
                      );
                  const circleCenter = boxWidth[2] + margin.left / 2;
                  const radius =
              boxHeight[0] > boxWidth[0] ? boxWidth[0] : boxHeight[0];
                  const seasonScale = d3
                      .scaleLinear()
                      .range([0, radius])
                      .domain([
                        0,
                        d3.max(seasonCounts, function(d) {
                          return d.values.length;
                        }),
                      ]);
                  const radarAxis = d3.axisBottom(seasonScale).ticks(
                      d3.max(seasonCounts, function(d) {
                        return d.values.length;
                      }),
                  );

                  for (let i = 0; i < allSeasons.length; i++) {
                  // Interesting to note the use of a for-loop rather than a
                  // forEach() call here, at least I think
                    const angle = divisions * i;
                    const s = Math.sin(angle);
                    const c = Math.cos(angle);
                    const shows = seasonCounts.find(function(d) {
                      return d.key === allSeasons[i];
                    });
                    const showNames =
                shows !== undefined ? shows.values : [{title: 'Nothing'}];
                    const showNum = seasonScale(
                  shows !== undefined ? shows.values.length : 0,
                    );
                    const angleDegs = angle * (180 / Math.PI);

                    infoSVG
                        .append('g')
                        .attr(
                            'transform',
                            'translate(' +
                    circleCenter +
                    ',' +
                    boxHeight[0] +
                    ') rotate(' +
                    angleDegs +
                    ')',
                        )
                        .call(radarAxis);

                    infoSVG
                        .append('g')
                        .attr(
                            'transform',
                            'translate(' +
                    circleCenter +
                    ',' +
                    boxHeight[0] +
                    ') rotate(' +
                    angleDegs +
                    ') translate(75,-5)',
                        )
                        .append('text')
                        .attr('text-anchor', 'center')
                        .text(allSeasons[i]);

                    infoSVG
                        .append('circle')
                        .attr('r', 5)
                        .attr('cx', circleCenter + showNum * c)
                        .attr('cy', boxHeight[0] + showNum * s)
                        .attr('fill', seasonColours(allSeasons[i]))
                        .append('svg:title')
                        .append('text')
                        .text(function(d) {
                          let titles = [];
                          showNames.forEach(function(s) {
                            titles += s.title + '\n';
                          });
                          return titles;
                        });
                  }

                  infoSVG
                      .append('text')
                      .attr('x', boxWidth[0])
                      .attr('y', margin.top - 30)
                      .style('font-weight', 'bolder')
                      .style('text-anchor', 'middle')
                      .text(person.name + '\'s top 5 co-cast members');

                  infoSVG
                      .append('text')
                      .attr('x', circleCenter)
                      .attr('y', margin.top - 30)
                      .style('font-weight', 'bolder')
                      .style('text-anchor', 'middle')
                      .text(
                          'How many shows of each season ' +
                        person.name +
                        ' has been in',
                      );
                });

            // Adding a legend
            // 2.1 for rendering purposes
            const legendHeight = svg.attr('height') / 2.1;
            const legendWidth = 70;

            const legend = svg
                .append('g')
                .attr('class', 'legend')
                .attr('x', width - margin.left)
                .attr('y', margin.top);

            for (let i = 0; i < allYears.length; i++) {
              const sectionHeight = legendHeight / allYears.length;
              legend
                  .append('rect')
                  .attr('x', 0)
                  .attr('y', sectionHeight * i)
                  .attr('height', sectionHeight * 1.05)
                  .attr('width', legendWidth)
                  .attr('fill', function(d) {
                    return yearColourAxis(allYears[i]);
                  });
            }

            legend
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'middle')
                .attr('fill', 'white')
                .attr('x', legendWidth / 2)
                .attr('y', 20)
                .text(allYears[0]);
            legend
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'middle')
                .attr('fill', 'white')
                .attr('x', legendWidth / 2)
                .attr('y', legendHeight - 20)
                .text(allYears[allYears.length - 1]);

            // add zoom capabilities
            const zoomHandler = d3
                .zoom()
                .scaleExtent([0.1, 3])
                .on('zoom', zoomActions);

            zoomHandler(svg);

            // Zoom functions
            function zoomActions() {
            // g.attr('transform', d3.event.transform);
            }

            /*
         *  NAME, NUMBER OF SHOWS, NUMBER OF LINKS IN A RECTANGLE
         *  AT THE TOP-RIGHT OF THE GRAPH
         */

            const infoBox = svg
                .append('rect')
                .attr('id', 'infoBox')
                .attr('x', width - 95)
                .attr('y', 5)
                .attr('width', 0)
                .attr('height', '2.2em')
                .attr('fill', 'white')
                .attr('opacity', 0.5);

            const infoText = svg
                .append('text')
                .attr('id', 'infoText')
                .attr('font-size', 12)
                .attr('font-color', 'black')
                .attr('x', width - 10)
                .attr('y', 5)
                .attr('dy', '1.1em')
                .attr('text-anchor', 'end')
                .text('Hover over a node to see a name');

            const infoShows = svg
                .append('text')
                .attr('id', 'infoShows')
                .attr('font-color', 'black')
                .attr('font-size', 12)
                .attr('x', width - 10)
                .attr('y', 5)
                .attr('dy', '2.2em')
                .attr('text-anchor', 'end');

            const infoLinks = svg
                .append('text')
                .attr('id', 'infoLinks')
                .attr('font-color', 'black')
                .attr('font-size', 12)
                .attr('x', width - 10)
                .attr('y', 5)
                .attr('dy', '3.3em')
                .attr('text-anchor', 'end');

            infoBox
                .attr('width', infoText.node().getBBox().width + 10)
                .attr('x', width - (infoText.node().getBBox().width + 15));

            const info = connCard.append('div').attr('id', 'info');

            info
                .append('input')
                .attr('id', 'searchVal')
                .attr('name', 'searchVal')
                .attr('placeholder', 'Search a person')
                .attr('type', 'text');

            info
                .append('button')
                .attr('onclick', searchGraph.name)
                .attr('class', 'btn btn-primary')
                .append('text')
                .text('Search');

            info
                .append('button')
                .attr('onclick', resetGraph.name)
                .attr('class', 'btn btn-secondary')
                .append('text')
                .text('Reset');

            /*
         *  MORE DETAILS ABOUT SOMEONE AVAILABLE ON CLICKING THEIR NODE
         */

            const infoSVG = connCard
                .append('svg')
                .attr('id', 'infoSVG')
                .attr('width', width)
                .attr('height', height / 2 + 50)
                .append('g')
                .attr(
                    'transform',
                    'translate(' + margin.left + ',' + margin.top + ')',
                );

            infoSVG
                .append('text')
                .attr('x', widthM / 2)
                .attr('y', height / 4)
                .attr('font-size', 30)
                .attr('text-anchor', 'middle')
                .attr('dy', '1em')
                .text('Click on a node to get more information');
          }, 1);
        }
        /**
       *
       * OTHER CHARTS HERE
       * TO TURN THESE ON SET `showOtherGraphs` to 1
       *
       */

        if (showOtherGraphs) {
          // WHO'S BEEN IN THE MOST SHOWS

          let top10Actors = allActorsObjs.sort(function(a, b) {
            return b.shows.length - a.shows.length;
          });
          top10Actors = top10Actors.slice(0, 10);

          const mostShowsCard = d3.select('#mostShowsCard');
          mostShowsCard.html('');

          svg = mostShowsCard
              .append('svg')
              .attr('id', 'mostShowsGraph')
              .attr('width', width)
              .attr('height', height + 50)
              .append('g')
              .attr(
                  'transform',
                  'translate(' + margin.left + ',' + margin.top + ')',
              );

          x = d3
              .scaleBand()
              .range([0, widthM])
              .domain(
                  top10Actors.map(function(d) {
                    return d.name;
                  }),
              )
              .padding(0.1);

          y = d3
              .scaleLinear()
              .range([heightM, 0])
              .domain([
                0,
                d3.max(top10Actors, function(d) {
                  return d.shows.length;
                }),
              ]);

          xAxis = d3.axisBottom(x);
          yAxis = d3.axisLeft(y);

          // Add the X Axis
          svg
              .append('g')
              .attr('transform', 'translate(0,' + heightM + ')')
              .call(xAxis)
              .selectAll('text')
              .attr('text-anchor', 'start')
              .attr('transform', 'rotate(15)');

          // Add the Y Axis
          svg.append('g').call(yAxis);

          svg
              .selectAll('bar')
              .data(top10Actors)
              .enter()
              .append('rect')
              .attr('x', function(d) {
                return x(d.name);
              })
              .attr('y', function(d) {
                return y(d.shows.length);
              })
              .attr('width', x.bandwidth)
              .attr('height', function(d) {
                return heightM - y(d.shows.length);
              })
              .attr('fill', function(d) {
                return yearColourAxis(d.firstYear);
              })
              .append('svg:title')
              .append('text')
              .text(function(d) {
                let titles = [];
                d.shows.forEach(function(s) {
                  titles += s.title + '\n';
                });
                return titles + '---\n' + d.shows.length + ' shows';
              });

          addAxisLabels('', 'Number of Shows', svg);

          // CAST NUMBERS THROUGH THE YEARS

          const allDatedShows = allShows.filter(function(d) {
            return !isNaN(d.date.getDate());
          });

          const castNosCard = d3.select('#castNosCard');
          castNosCard.html('');

          svg = castNosCard
              .append('svg')
              .attr('id', 'castNosGraph')
              .attr('width', width)
              .attr('height', height + 20)
              .append('g')
              .attr(
                  'transform',
                  'translate(' + margin.left + ',' + margin.top + ')',
              );

          x = d3
              .scaleTime()
              .domain(
                  d3.extent(allDatedShows, function(d) {
                    return d.date;
                  }),
              )
              .range([0, widthM]);

          y = d3
              .scaleLinear()
              .domain(
                  d3.extent(allDatedShows, function(d) {
                    const ca = d.cast;
                    return ca.length;
                  }),
              )
              .range([heightM, 0]);

          xAxis = d3.axisBottom(x);
          yAxis = d3.axisLeft(y);

          // Add the X Axis
          svg
              .append('g')
              .attr('transform', 'translate(0,' + heightM + ')')
              .call(xAxis);

          // Add the Y Axis
          svg.append('g').call(yAxis);

          svg
              .selectAll('dot')
              .data(allDatedShows)
              .enter()
              .append('circle')
              .attr('r', 5)
              .attr('cx', function(d) {
                return x(d.date);
              })
              .attr('cy', function(d) {
                return y(d.cast.length);
              })
              .text(function(d) {
                return d.title + ', ' + d.year_title;
              })
              .attr('season', function(d) {
                return d.season;
              })
              .attr('fill', function(d) {
                return seasonColours(d.season);
              })
              .append('svg:title')
              .text(function(d) {
                return d.title + ', ' + d.year_title;
              });

          addAxisLabels('Year', 'Cast Size', svg);

          // CAST VS CREW NUMBERS

          const castCrewNosCard = d3.select('#castCrewNosCard');
          castCrewNosCard.html('');

          svg = castCrewNosCard
              .append('svg')
              .attr('id', 'castCrewNosGraph')
              .attr('width', width)
              .attr('height', height + 20)
              .append('g')
              .attr(
                  'transform',
                  'translate(' + margin.left + ',' + margin.top + ')',
              );

          x = d3
              .scaleLinear()
              .domain(
                  d3.extent(allDatedShows, function(d) {
                    return d.cast.length;
                  }),
              )
              .range([0, widthM]);

          y = d3
              .scaleLinear()
              .domain(
                  d3.extent(allDatedShows, function(d) {
                    return d.crew.length;
                  }),
              )
              .range([heightM, 0]);

          d3
              .scaleTime()
              .domain(
                  d3.extent(allDatedShows, function(d) {
                    return d.date;
                  }),
              )
              .range(['yellow', 'purple']);

          xAxis = d3.axisBottom(x);
          yAxis = d3.axisLeft(y);

          // Add the X Axis
          svg
              .append('g')
              .attr('transform', 'translate(0,' + heightM + ')')
              .call(xAxis);

          // Add the Y Axis
          svg.append('g').call(yAxis);

          svg
              .selectAll('dot')
              .data(allShows)
              .enter()
              .append('circle')
              .attr('r', 5)
              .attr('cx', function(d) {
                return x(d.cast.length);
              })
              .attr('cy', function(d) {
                return y(d.crew.length);
              })
              .attr('season', function(d) {
                return d.season;
              })
              .attr('fill', function(d) {
                return seasonColours(d.season);
              })
              .append('svg:title')
              .text(function(d) {
                return d.title + ', ' + d.year_title;
              });

          addAxisLabels('Cast Size', 'Crew Size', svg);

          // SHOW NUMBERS THROUGH THE YEARS

          const showCounts = Array.from(d3
              .group(
                  Object.entries(allShows),
                  (d) => d.season,
                  (d) => d.year_title,
              )).sort(function(a, b) {
            return a.key - b.key;
          });

          const showCounts2 = [];

          showCounts.forEach(function(d) {
            Object.keys(d).forEach(function(v) {
              if (d[v]) {
                d[v].season = d.key;
              }
              showCounts2.push(v);
            });
          });
          showCounts2.sort((a, b) => b.key - a.key);

          const showNosCard = d3.select('#showNosCard');
          showNosCard.html('');

          svg = showNosCard
              .append('svg')
              .attr('id', 'showNosGraph')
              .attr('width', width)
              .attr('height', height + 20)
              .append('g')
              .attr(
                  'transform',
                  'translate(' + margin.left + ',' + margin.top + ')',
              );

          x = d3
              .scaleTime()
              .domain(d3.extent(allYears.map((d) => yearTitleToDate(d))))
              .range([0, widthM]);

          y = d3
              .scaleLinear()
              .domain(
                  d3.extent(showCounts2, (d) => d.values.length),
              )
              .range([heightM, 0]);

          allSeasons.forEach(function(s) {
            const thisSeasons = showCounts2
                .filter(function(d) {
                  return d.season == s;
                })
                .sort(function(a, b) {
                  const aVal = a.key.slice(0, 4);
                  const bVal = b.key.slice(0, 4);
                  return aVal - bVal;
                });
            linevalue = d3
                .line()
                .x((d) => x(yearTitleToDate(d.key)))
                .y((d) => y(d.values.length));

            svg
                .append('path')
                .datum(thisSeasons)
                .attr('class', 'line')
                .attr('stroke', seasonColours(s))
                .attr('season', s)
                .attr('d', linevalue);
          });

          svg
              .selectAll('dot')
              .data(showCounts2)
              .enter()
              .append('circle')
              .attr('season', function(d) {
                return d.season;
              })
              .attr('r', 5)
              .attr('cx', (d) => x(yearTitleToDate(d.key)))
              .attr('cy', (d) => y(d.values.length))
              .attr('fill', (d) => seasonColours(d.season))
              .append('svg:title')
              .append('text')
              .text(function(d) {
                let titles = [];
                d.values
                    .sort(function(a, b) {
                      return a.date - b.date;
                    })
                    .forEach(function(v) {
                      titles += v.title + '\n';
                    });
                return (
                  d.season +
            ' ' +
            d.key +
            ': ' +
            d.values.length +
            ' shows\n----\n' +
            titles
                );
              });

          // Add the X Axis
          svg
              .append('g')
              .attr('transform', 'translate(0,' + heightM + ')')
              .call(d3.axisBottom(x));

          // Add the Y Axis
          svg.append('g').call(d3.axisLeft(y));

          addAxisLabels('Year', 'Number Of Shows', svg);

          /*
       *
       *
       * FILTERING THE ADDITIONAL GRAPHS BY SEASON
       *
       *
       */

          const filterCard = d3.select('#filterCard');
          filterCard.html('');

          allSeasons.forEach(function(s) {
            filterCard.append('br');
            filterCard
                .append('input')
                .attr('type', 'checkbox')
                .attr('id', s + 'Filt')
                .attr('name', s + 'Filt')
                .property('checked', 'true');

            filterCard
                .append('label')
                .attr('for', s + 'Filt')
                .text(s + '  ')
                .append('div')
                .style('width', '10px')
                .style('height', '10px')
                .style('display', 'inline-block')
                .attr('width', '10px')
                .attr('height', '10px')
                .style('background-color', seasonColours(s))
                .style('border', '1px solid #000');
          });

          // RESETTING
          filterCard.append('br');
          filterCard
              .append('button')
              .attr('onclick', filterSeason.name)
              .attr('class', 'btn btn-primary')
              .append('text')
              .text('Filter Season');

          filterCard
              .append('button')
              .attr('onclick', resetFilterSeason.name)
              .attr('class', 'btn btn-danger')
              .append('text')
              .text('Reset');

          /*
       *
       *  Number of people in their first shows per year
       *
       */

          const newNos = d3
              .group(
                  Object.entries(allActorsObjs),
                  (d) => d.firstYear,
              );
          newNos.sort(function(a, b) {
            const aVal = a.key.slice(0, 4);
            const bVal = b.key.slice(0, 4);
            return aVal - bVal;
          });

          const newNosCard = d3.select('#newNosCard');
          newNosCard.html('');

          svg = newNosCard
              .append('svg')
              .attr('id', 'newNosGraph')
              .attr('width', width)
              .attr('height', height + 20)
              .append('g')
              .attr(
                  'transform',
                  'translate(' + margin.left + ',' + margin.top + ')',
              );

          x = d3
              .scaleTime()
              .domain(
                  d3.extent(newNos, function(d) {
                    return yearTitleToDate(d.key);
                  }),
              )
              .range([0, widthM]);

          y = d3
              .scaleLinear()
              .domain([
                0,
                d3.max(newNos, (d) => d.values.length),
              ])
              .range([heightM, 0]);

          linevalue = d3
              .line()
              .x((d) => x(yearTitleToDate(d.key)))
              .y((d) => y(d.values.length));

          svg
              .append('path')
              .datum(newNos)
              .attr('class', 'line')
              .attr('stroke', 'black')
              .attr('d', linevalue);

          svg
              .selectAll('dot')
              .data(newNos)
              .enter()
              .append('circle')
              .attr('r', 5)
              .attr('fill', function(d) {
                return yearColourAxis(d.key);
              })
              .attr('cx', function(d) {
                return x(yearTitleToDate(d.key));
              })
              .attr('cy', function(d) {
                return y(d.values.length);
              })
              .append('svg:title')
              .text(function(d) {
                return d.key + ': ' + d.values.length + ' new people';
              });

          // Add the X Axis
          svg
              .append('g')
              .attr('transform', 'translate(0,' + heightM + ')')
              .call(d3.axisBottom(x));

          // Add the Y Axis
          svg.append('g').call(d3.axisLeft(y));

          addAxisLabels('Year', 'Number of "First Shows"', svg);
        }
      });
}


function actorToObject(a, showList, peopleList) {
  let personShows = showList.filter((d) => d.cast.includes(a));
  let personLinks = [];
  const personShowTitles = [];
  let earliestShow = '3000-01';
  let personRecordLink;

  const personRecord = peopleList.find((d) => d.title == a);

  if (personRecord === undefined) {
    personRecordLink = 'https://history.newtheatre.org.uk/people';
  } else {
    personRecordLink =
  'https://history.newtheatre.org.uk' + personRecord.link;
  }

  personShows.forEach(function(s) {
    personShowTitles.push(s.title);
    s.cast.forEach(function(d) {
      if (!personLinks.includes(d)) {
        personLinks.push(d);
      }
    });
    if (s.year_title < earliestShow) {
      earliestShow = s.year_title;
    }
  });
  personLinks = personLinks
      .filter(function(l) {
        return l != a;
      })
      .map(function(l) {
        const conns = allShows.filter(function(d) {
          return d.cast.includes(a) && d.cast.includes(l);
        });
        return {name: l, connections: conns, strength: conns.length};
      })
      .sort(function(l1, l2) {
        return l2.strength - l1.strength;
      });

  personShows = personShows.sort(function(s1, s2) {
    if (s1.title > s2.title) {
      return 1;
    } else if (s2.title > s1.title) {
      return -1;
    } else {
      return 0;
    }
  });
  return {
    name: a,
    shows: personShows,
    firstYear: earliestShow,
    record: personRecord,
    url: personRecordLink,
    links: personLinks,
  };
}

function addAxisLabels(xLabel, yLabel, svg) {
  const mb = margin.bottom / 2;
  const ml = margin.left / 2;

  svg
      .append('text') // XLABEL
      .attr(
          'transform',
          'translate(' + width / 2 + ',' + (height - mb) + ')',
      )
      .style('font-weight', 'bolder')
      .style('text-anchor', 'middle')
      .text(xLabel);

  svg
      .append('text') // YLABEL
      .attr(
          'transform',
          'translate(' + (0 - ml) + ',' + height / 2 + ') rotate(-90)',
      )
      .attr('dy', '1em')
      .style('font-weight', 'bolder')
      .style('text-anchor', 'middle')
      .text(yLabel);
}
