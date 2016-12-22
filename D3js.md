# D3
**D3.js** (or just **D3** for **Data-Driven Documents**) is a [JavaScript](JavaScript "wikilink") library for producing dynamic, interactive [data visualizations](data_visualization "wikilink") in [web browsers](web_browser "wikilink"). It makes use of the widely implemented [SVG](Scalable_Vector_Graphics "wikilink"), [HTML5](HTML5 "wikilink"), and [CSS](Cascading_Style_Sheets "wikilink") standards.

## Technical principles

Embedded within an [HTML](HTML "wikilink") webpage, the JavaScript D3.js library uses pre-built JavaScript functions to select elements, create SVG objects, style them, or add transitions, dynamic effects or [tooltips](tooltip "wikilink") to them. These objects can also be widely styled using CSS. Large datasets can be easily bound to SVG objects using simple D3.js functions to generate rich text/graphic charts and diagrams. The data can be in various formats, most commonly [JSON](JSON "wikilink"), [comma-separated values](comma-separated_values "wikilink") (CSV) or [geoJSON](geoJSON "wikilink"), but, if required, JavaScript functions can be written to read other data formats.

### Selections

    The central principle of D3.js design is to enable the programmer to first use a CSS-style selector to select a given set of [Document Object Model](Document_Object_Model "wikilink") (DOM) nodes, then use operators to manipulate them in a similar manner to [jQuery](jQuery "wikilink").  For example, by using D3.js, one may select all HTML elements, and then change their text color, e.g. to lavender:

``` {.javascript}
 d3.selectAll("p")                 // select all <p> elements
   .style("color", "lavender")     // set style "color" to value "lavender"
   .attr("class", "squares")       // set attribute "class" to value "squares"
   .attr("x", 50);                 // set attribute "x" (horizontal position) to value 50px
```

The selection can be based on tag (as in the above example), class, identifier, attribute, or place in the hierarchy. Once elements are selected, one can apply operations to them. This includes getting and setting attributes, display texts, and styles (as in the above example). Elements may also be added and removed. This process of modifying, creating and removing HTML elements can be made dependent on data, which is the basic concept of D3.js.

### Transitions

By declaring a transition, values for attributes and styles can be smoothly interpolated over a certain time. The following code will make all HTML elements on a page gradually change their text color to pink:

``` {.javascript}
 d3.selectAll("p")             // select all <p> elements
   .transition("trans_1")      // transition with name "trans_1"
     .delay(0)                 // transition starting 0ms after trigger
     .duration(500)            // transitioning during 500ms
     .ease("linear")           // transition easing progression is linear...
   .style("color", "pink");    // ... to color:pink
```

### Data-binding

For more advanced uses, loaded data drives the creation of elements. D3.js loads a given dataset, then, for each of its elements, creates an SVG object with associated properties (shape, colors, values) and behaviors (transitions, events).

``` {.javascript}
// Data
  var data = [
     { name:"Ireland",  income:53000, life: 78, pop:6378, color: "green"},
     { name:"Norway",   income:73000, life: 87, pop:5084, color: "blue" },
     { name:"Tanzania", income:27000, life: 50, pop:3407, color: "grey" }
  ];
// Create SVG container
  var svg = d3.select("#hook").append("svg")
        .attr("width", 120)
        .attr("height", 120)
        .style("background-color", "#D0D0D0");
// Create SVG elements from data 
    svg.selectAll("circle")                  // create virtual circle template
      .data(data)                            // bind data
    .enter()                                 // for each row in data...
      .append("circle")                      // bind circle & data row such that... 
        .attr("id", function(d) { return d.name })           // set the circle's id according to the country name
        .attr("cx", function(d) { return d.income /1000  })  // set the circle's horizontal position according to income 
        .attr("cy", function(d) { return d.life })           // set the circle's vertical position according to life expectancy 
        .attr("r",  function(d) { return d.pop /1000 *2 })   // set the circle's radius according to country's population 
        .attr("fill",function(d){ return d.color });         // set the circle's color according to country's color
```

Generated SVG graphics are designed according to the provided data.

### Appending nodes using data

Once a dataset is bound to a document, use of D3.js typically follows a pattern wherein an explicit `.enter()` function, an implicit "update," and an explicit `.exit()` function is invoked for each item in the bound dataset. Any [methods chained](method_chaining "wikilink") after the `.enter()` command will be called for each item in the dataset not already represented by a DOM node in the selection (the previous `selectAll()`). Likewise, the implicit update function is called on all existing selected nodes for which there is a corresponding item in the dataset, and `.exit()` is called on all existing selected nodes that do not have an item in the dataset to bind to them. The D3.js documentation provides several examples of how this works.

## API structure

D3.js API contains several hundred functions, and they can be grouped into following logical units:

-   Selections
-   Transitions
-   Arrays
-   Math
-   Color
-   Scales
-   SVG
-   Time
-   Layouts
-   Geography
-   Geometry
-   Behaviors

### Maths

-   Generation of pseudorandom numbers with [normal](Normal_distribution "wikilink"), [log-normal](Log-normal_distribution "wikilink"), [Bates](Bates_distribution "wikilink"), and [Irwin-Hall](Irwin–Hall_distribution "wikilink") distributions.
-   Transformations in 2D: [translation](Translation_(geometry) "wikilink"), [rotation](Rotation_(mathematics) "wikilink"), skew, and scaling.

### Arrays

D3.js array operations are built to complement existing array support in JavaScript (mutator methods: sort, reverse, splice, shift and unshift; accessor methods: concat, join, slice, indexOf and lastIndexOf; iteration methods: filter, every, forEach, map, some, reduce and reduceRight). D3.js extends this functionality with:

-   Functions for finding minimum, maximum, extent, sum, mean, median, and quantile of an array.
-   Functions for ordering, shuffling, permuting, merging, and bisecting arrays.
-   Functions for nesting arrays.
-   Functions for manipulating associative arrays.
-   Support for map and set collections.

### Geometry

-   Computing convex hull of a set of points.
-   Computing Voronoi tesselation of a set of points.
-   Support for point quadtree data structure.
-   Support for basic operations on polygon.

### Color

-   Support for RGB, HSL, HCL, and L\*a\*b\* color representation.
-   Brightening, darkening, and interpolation of colors.


## Further reading

### Background on data visualization and information graphics:

* {{citation |first1=Andy |last1=Kirk |title=Data Visualization: a successful design process |edition=1st |date=December 2012 |publisher=[[Packt Publishing]] |place=Birmingham |isbn=978-1-84969-346-2 |url=http://www.packtpub.com/data-visualization-a-successful-design-process/book }}
* {{citation |first1=Alberto |last1=Cairo |title=The Functional Art |edition=1st |date=August 2012 |publisher=[[Peachpit]] |place=Berkeley |isbn=978-0321834737 |url=http://www.thefunctionalart.com/ }}

### Background on D3.js itself:

* {{citation |first1=Michael |last1=Bostock |first2=Vadim |last2=Ogievetsky |first3=Jeffrey |last3=Heer |title=D3: Data-Driven Documents |journal=IEEE Transactions on Visualization and Computer Graphics |date=October 2011 |publisher=[[IEEE Press]] |url=http://vis.stanford.edu/papers/d3 |volume=17 |issue=12 |pages=2301–2309 |doi=10.1109/TVCG.2011.185 |pmid=22034350}}

### Using D3.js - beginner level:

* {{citation |first1=Scott |last1=Murray |title=Interactive Data Visualization for the Web, An Introduction to Designing with D3 |edition=1st |date=March 2013 |publisher=[[O’Reilly Media]] |place=Sebastopol, California |isbn=978-1-4493-3973-9 |url=http://shop.oreilly.com/product/0636920026938.do }}
* {{citation |first1=Simon |last1=Timms |title=Social Data Visualization with HTML5 and JavaScript |edition=1st |date=September 2013 |publisher=[[Packt Publishing]] |place=Birmingham |isbn=978-1-7821-6654-2 |url=http://www.packtpub.com/social-data-visualization-with-html5-and-javascript/book }}

### Using D3.js - intermediate level:

* {{citation |first1=Mike |last1=Dewar |title=Getting Started with D3 |series=Creating Data-Driven Documents |edition=1st |editor1-first=Julie |editor1-last=Steele |editor2-first=Meghan |editor2-last=Blanchette |date=June 2012 |publisher=[[O’Reilly Media]] |place=Sebastopol, California |isbn=978-1-4493-2879-5 |url=https://books.google.com/books?id=-1Zk213nXsYC }}
* {{citation |first1=Nick |last1=Qi Zhu |title=Data Visualization with D3.js Cookbook |edition=1st |date=October 2013 |publisher=[[Packt Publishing]] |place=Birmingham |isbn=978-1-7821-6216-2 |url=http://www.packtpub.com/data-visualization-with-d3-js-cookbook/book }}

### Others
* {{cite book|last1=Newton|first1=Thomas |last2=Villareal |first2=Oscar |title=Learning D3.js Mapping|date=2014|publisher=Packt Publishing|isbn=9781783985609|page=126|url=https://www.packtpub.com/web-development/learning-d3js-mapping}}
* {{citation |url=https://www.packtpub.com/web-development/mastering-d3js|title=Mastering D3.js|first=Pablo|last=Navarro Castillo|year=2014|publisher=[[Packt Publishing]] |place=Birmingham |isbn=9781783286270|page=352}}
* {{citation |url=https://www.packtpub.com/web-development/data-visualization-d3js|title=Data Visualization with d3.js|first=Swizec|last=Teller|year=2013|publisher=[[Packt Publishing]] |place=Birmingham |isbn=9781782160007|page=194}}
* {{citation |url=https://www.packtpub.com/web-development/learning-d3js-mapping |title=Learning D3.js Mapping|first1=Thomas|last1=Newton|first2=Oscar|last2=Villarreal|year=2014|publisher=[[Packt Publishing]] |place=Birmingham |isbn=9781783985609|page=126}}
* {{citation |url=http://shop.oreilly.com/product/9781939902023.do|title=Developing a D3.js Edge: Constructing Reusable D3 Components and Charts|first=Christophe|last=Viau|year=2013|publisher=[[Bleeding Edge Press]] |isbn=9781939902023|page=268}}
* {{citation |url=http://www.amazon.com/D3-js-Action-Elijah-Meeks/dp/1617292117/ref=sr_1_1?ie=UTF8&qid=1409163691&sr=8-1&keywords=elijah+meek|title=D3.js in Action|first=Elijah|last=Meeks|year=2014|publisher=[[Manning Publications]] |isbn=9781617292118|page=325}}
* {{citation |url=https://leanpub.com/D3-Tips-and-Tricks|title=D3 Tips and Tricks|first=Malcolm|last=Maclean|year=2014|publisher=[[Leanpub]] |page=580}}
* {{citation |url=http://www.informit.com/store/visual-storytelling-with-d3-an-introduction-to-data-9780321933171|title=Visual Storytelling with D3: An Introduction to Data Visualization in JavaScript|first=Ritchie|last=King|year=2014|publisher=[[Addison-Wesley Data & Analytics Series]] |page=288}}

### Videos
* {{citation |first1=Nikhil |last1=Gopal |title=D3 and CoffeeScript: A Python Programmer's Introduction to Web Visualizations |date=October 2014 |publisher=[[O’Reilly Media]] |place=Sebastopol, California |url=http://shop.oreilly.com/product/110000663.do }}
* {{citation |first1=Ritchie |last1=King |title=D3 Visualization LiveLessons: An Introduction to Data Visualization in JavaScript |date= December 2014 |publisher=[[Addison-Wesley Professional]] |url=http://www.informit.com/store/d3-visualization-livelessons-an-introduction-to-data-9780134087139 }}

## External links
* [official website](d3js.org)
* [https://github.com/mbostock/d3/wiki/Gallery/ D3.js Gallery]
* [http://bl.ocksplorer.org Blocksplorer], search for blocks by methods used

