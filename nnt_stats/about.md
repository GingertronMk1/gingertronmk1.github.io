---
title: About NNT Statistics
layout: post
permalink: /nnt_stats/about
---

{% assign link="/nnt_stats" %}

I created the NNT statistics page as an extension of a previous project, a "6 degrees of separation" calculator for actors at the Nottingham New Theatre.
It expanded into a full set of visualisations with other bits of information as I saw them to be useful.
This page will go through them one by one.
Click on a header to be taken to the relevant visualisation.

# [Connections]({{ link }}#connCard)

The basis for the whole project, this visualisation is a simple-ish graph in which the vertices represent actors from the NNT's recorded history, and the edges are a shorthand for "has worked with".
The edges between two people grow as a function of the number of times they have worked together, and the d3 function I used simulates physics between them, so people who have worked together more are closer together physically on the graph.
The colour of a vertex represents the year the person acted in their first show - I elected to use a blue-red spectrum as a "cold-hot" representation.

This visualisation also has a search functionality, albeit basic.
Type in the person's name (correctly capitalised) and click "Search", and the graph will highlight the searched individual by fading all others.
Clicking on a person will then move you down the page to a view containing some more detailed information about that person, including a top 5 most common co-cast members and a radar graph denoting their breakdown of shows by season.

# [Most Shows]({{ link }}#mostShowsCard)

A simple bar chart showing the top 10 actors with the most shows.
The interesting bit about this is that the top 1 has 21 shows - the NNT has a limiting system which basically means that you should be able to do no more than 2 shows per semester, so in order to beat this mark an actor would have to successfully audition for every season over the course of a degree of 5 years of length.
And then 1 more.

The mouseover text gives a breakdown of the shows that make up the count.

# [Cast Numbers]({{ link }}#castNosCard)

This is a dot chart showing all shows over time, colour coded by seasons, with the time on the x-axis and cast number on y.
There are a few obvious outliers higher up but usually casts top out at 10-15.
Any more than that and it becomes logistically... difficult.

# [Cast vs Crew Numbers]({{ link }}#castCrewNosCard)

This is something of an extension of the above graph, the idea being to see if there is some correlation between cast size and crew size for a given show.
The graph does seem to indicate that such a relationship exists, however there are so many shows at the lower end of both that it is hard to distinguish signal from noise.

# [Show Numbers]({{ link }}#showNosCard)

This graph is to show the relative growth/decline of seasons at the NNT over the course of history.
UNCUT existed for only two years by that name, however the Fringe season (which it became) has been going strong ever since.

# [Season Filter]({{ link }}#filterCard)

This is just a filter for seasons, amending all graphs.

# [New People Numbers]({{ link }}#newNosCard)

In my view, other than the connection graph this is the most interesting visualisation on the page.
It represents the number of people taking part in their "first show" in any given year at the NNT.
To me it demonstrates the change in engagement over time of the theatre, however this could be skewed by the different cast sizes of shows.
