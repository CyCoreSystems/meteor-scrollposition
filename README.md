meteor-scrollposition
======

Meteor package `cycore:scrollposition` is simple set of tools for obtaining
the scroll position (coordinates of the top-left corner of the view) of a browser window.

It provides the following global reactive variables:
*  `ScrollPosition`:  an array of the form `[X,Y]`, representing the `X` and `Y` offsets
*  `ScrollPositionX`: a Number representing the `X` scroll offset
*  `ScrollPositionY`: a Number representing the `Y` scroll offset

There is also a cross-browser function to return the current scroll position as
a two-element array `[X,Y]`:  `getScrollPosition()`


