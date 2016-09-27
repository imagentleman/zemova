zemova
======

An infinite circular carousel javascript plugin.

Only 485 bytes gzipped (2.1kb without minification or compression).

### Demo

Visit: [http://imagentleman.github.io/zemova/](http://imagentleman.github.io/zemova/)

### What is it?

Zemova is a javascript plugin that creates circular (also known as infinite) galleries with a carousel style.

It doesn't have any dependencies and doesn't force any css layout or styles. Just follow a simple convention and add a few classes and you are good to go.

![Zemova screenshot](http://imagentleman.github.io/zemova/zemova-screenshot.png)

### How to use it

Include `zemova.js` somewhere on the page.

All the images most be inside an element (e.g. a DIV) with the class `zemova-mask`.

The element `zemova-mask` must be inside an element with the class `zemova` and must have a width set somehow (all the images will get the same width).

The button that moves the carousel to the left must have the class `zemova-prev`. The other button (moves to the right) must have the class `zemova-next`.

That's it.

For example:

    <body>
      <div class='carrousel'>
      	<a class='prev zemova-prev' href='#'></a>
      	<div class='zemova' style="width: 100%;">
      		<div class='mask zemova-mask'>
      			<img class='photo' src='1.png'>
      			<img class='photo' src='2.png'>
      			<img class='photo' src='3.png'>
      		</div>
      	</div>
      	<a class='next zemova-next' href='#'></a>
      </div>
      
      <script src='zemova.js'></script>
