**jQuery** is a [cross-platform](cross-platform "wikilink") [JavaScript library](JavaScript_library "wikilink") designed to simplify the [client-side scripting](client-side_scripting "wikilink") of [HTML](HTML "wikilink").[^1] jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web.[^2][^3][^4] jQuery is [free, open-source software](free_and_open_source_software "wikilink") licensed under the [MIT License](MIT_License "wikilink").[^5]

jQuery's syntax is designed to make it easier to navigate a document, select [DOM](Document_Object_Model "wikilink") elements, create [animations](animation "wikilink"), handle [events](event_(computing) "wikilink"), and develop [Ajax](Ajax_(programming) "wikilink") applications. jQuery also provides capabilities for developers to create [plug-ins](plug-in_(computing) "wikilink") on top of the JavaScript library. This enables developers to create [abstractions](abstraction_(computer_science) "wikilink") for low-level interaction and animation, advanced effects and high-level, themeable widgets. The modular approach to the jQuery library allows the creation of powerful [dynamic web pages](dynamic_web_page "wikilink") and Web applications.

The set of [jQuery core features](#Features "wikilink")—DOM element selections, traversal and manipulation—enabled by its *selector engine* (named "Sizzle" from v1.3), created a new "programming style", fusing algorithms and DOM data structures. This style influenced the architecture of other [JavaScript frameworks](Comparison_of_JavaScript_frameworks "wikilink") like [YUI v3](YUI_Library "wikilink") and [Dojo](Dojo_Toolkit "wikilink"), later stimulating the creation of the standard *Selectors API*.[^6]

[Microsoft](Microsoft "wikilink") and [Nokia](Nokia "wikilink") bundle jQuery on their platforms.[^7] Microsoft includes it with [Visual Studio](Microsoft_Visual_Studio "wikilink")[^8] for use within Microsoft's [ASP.NET AJAX](ASP.NET_AJAX "wikilink") and [ASP.NET MVC](ASP.NET_MVC "wikilink") frameworks while Nokia has integrated it into the Web Run-Time widget development platform.[^9] jQuery has also been used in [MediaWiki](MediaWiki "wikilink") since version 1.16.[^10]

## Overview

jQuery, at its core, is a **DOM** ([Document Object Model](Document_Object_Model "wikilink")) manipulation library. The DOM is a tree-structure representation of all the elements of a Web page and jQuery simplifies the syntax for finding, selecting, and manipulating these DOM elements. For example, jQuery can be used for finding an element in the document with a certain property (e.g. all elements with an [h1](HTML_element#heading "wikilink") tag), changing one or more of its attributes (e.g. color, visibility), or making it respond to an event (e.g. a mouse click).

jQuery also provides a paradigm for event handling that goes beyond basic DOM element selection and manipulation. The event assignment and the event callback function definition are done in a single step in a single location in the code. jQuery also aims to incorporate other highly used JavaScript functionality (e.g. fade ins and fade outs when hiding elements, animations by manipulating [CSS](Cascading_Style_Sheets "wikilink") properties).

The principles of developing with jQuery are:

-   **Separation of JavaScript and HTML**: The jQuery library provides simple syntax for adding [event](Event_(computing) "wikilink") handlers to the [DOM](Document_Object_Model "wikilink") using JavaScript, rather than adding [HTML event attributes](HTML_attribute#Event_attributes "wikilink") to call JavaScript functions. Thus, it encourages developers to [completely separate](Separation_of_concerns "wikilink") JavaScript code from HTML markup.
-   **Brevity and clarity**: jQuery promotes brevity and clarity with features like chainable functions and shorthand function names.
-   **Elimination of cross-browser incompatibilities**: The JavaScript engines of different browsers differ slightly so JavaScript code that works for one browser may not work for another. Like other JavaScript toolkits, jQuery handles all these cross-browser inconsistencies and provides a consistent interface that works across different browsers.
-   **Extensibility**: New events, elements, and methods can be easily added and then reused as a plugin.

## Features

jQuery includes the following features:

-   [DOM](Document_Object_Model "wikilink") element selections using the multi-browser open source selector engine *Sizzle*, a spin-off of the jQuery project[^11]
-   DOM manipulation based on CSS selectors that uses elements' names and attributes, such as id and class, as criteria to select nodes in the DOM
-   Events
-   Effects and animations
-   [Ajax](Ajax_(programming) "wikilink")
-   [Deferred and Promise](Futures_and_promises "wikilink") objects to control asynchronous processing
-   [JSON](JSON "wikilink") parsing
-   [Extensibility](Extensibility "wikilink") through plug-ins
-   Utilities, such as feature detection
-   Compatibility methods that are natively available in modern browsers, but need fall backs for older ones, such as `inArray()` and `each()`
-   Multi-browser (not to be confused with [cross-browser](cross-browser "wikilink")) support

### Browser support

Both versions 1.x and 2.x of jQuery support "current-1 versions" (meaning the current stable version of the browser and the version that preceded it) of [Firefox](Firefox "wikilink"), [Chrome](Google_Chrome "wikilink"), [Safari](Safari_(web_browser) "wikilink"), and [Opera](Opera_(web_browser) "wikilink"). Version 1.x also supports [Internet Explorer 6](Internet_Explorer_6 "wikilink") or higher. However, jQuery version 2.x dropped [Internet Explorer](Internet_Explorer "wikilink") 6–8 support and supports only [IE 9](Internet_Explorer_9 "wikilink") and later versions.[^12]

## Usage

### Including the library

The jQuery library is a single JavaScript file containing all of its common DOM, event, effects, and Ajax functions. It can be included within a Web page by linking to a local copy or to one of the many copies available from public servers. jQuery has a [content delivery network](content_delivery_network "wikilink") (CDN) hosted by [MaxCDN](https://www.maxcdn.com/).[^13] Google[^14] and Microsoft[^15] host it as well.

``` {.html5}
<script src="jquery.js"></script>
```

It is also possible to include jQuery directly from a CDN:

``` {.html5}
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```

### Usage styles

jQuery has two usage styles:

-   Via the `$` function, which is a [factory method](Factory_method_pattern "wikilink") for the jQuery object. These functions, often called *commands*, are [*chainable*](method_chaining "wikilink") as they all return jQuery objects.
-   Via `$.`-prefixed functions. These are *utility functions*, which do not act upon the jQuery object directly.

Access to and manipulation of multiple DOM nodes in jQuery typically begins with calling the `$` function with a CSS selector string. This returns a jQuery object referencing all the matching elements in the [HTML](HTML "wikilink") page. `$("div.test")`, for example, returns a jQuery object with all the `div` elements of class `test`. This node set can be manipulated by calling methods on the returned jQuery object or on the nodes themselves.

### No-conflict mode

jQuery also includes `.noConflict()` mode, which relinquishes control of `$`. This is helpful if jQuery is used with other libraries that also use `$` as an identifier. In no-conflict mode, developers can use `jQuery` as a replacement for `$` without losing functionality.[^16]

### Typical start-point

Typically, jQuery is used by putting initialization code and event handling functions in `$(`*`handler`*`)`. This is triggered when the browser has constructed the DOM and sends a load event.

``` {.javascript}
$(function () {
        // jQuery code, event handling callbacks here
});
```

Historically, `$(document).ready(callback)` has been the de facto signature for running code when the DOM is ready. However, since jQuery 3.0, developers are encouraged to use the much shorter `$(handler)` signature.[^17]

Callback functions for event handling on elements that aren't loaded yet can be registered inside `.ready()` as [anonymous functions](Anonymous_function#JavaScript "wikilink"). These event handlers will only be called when the event is triggered. For example, the following code adds an event handler for a mouse click on an `img` image element.

``` {.javascript}
$(function () {
        $('img').on('click', function () {
              // handle the click event on any img element in the page
        });
});
```

The following syntaxes are equivalent, although only `$(`*`handler`*`)` should be used:[^18]

-   `$(`*`handler`*`)`
-   `$().ready(`*`handler`*`)`
-   `$(document).ready(`*`handler`*`)`
-   `$("selector").ready(`*`handler`*`)`

### Chaining

jQuery commands typically return a jQuery object, so commands can be chained:

``` {.javascript}
$('div.test').add('p.quote').addClass('blue').slideDown('slow');
```

This line finds the union of all `div` tags with class attribute `test` and all `p` tags with class attribute `quote`, adds the class attribute `blue` to each matched element, and then increases their height with an animation. The `$` and `add` functions affect the matched set, while the `addClass` and `slideDown` affect the referenced nodes.

Certain jQuery functions return specific values (such as `$('#input-user-email').val()`). In these cases, chaining will not work as the value does not reference the jQuery object.

### Creating new DOM elements

Besides accessing DOM nodes through jQuery object hierarchy, it is also possible to create new DOM elements, if a string passed as the argument to \$() looks like HTML. For example, this line finds an HTML `select` element with ID `carmakes`, and adds an `option` element with value "VAG" and text "Volkswagen":

``` {.javascript}
$('select#carmakes').append($('<option />').attr({value:"VAG"}).append("Volkswagen"));
```

### Utility functions

Functions prefixed with `$.` are utility functions or functions that affect global properties and behaviour. The following, for example, is a function used for iterating over arrays called `each` in jQuery:

``` {.javascript}
$.each([1,2,3], function() {
  console.log(this + 1);
});
```

This writes "2", "3", "4" to the console.

### Ajax

It is possible to perform [cross-browser](cross-browser "wikilink") [Ajax](Ajax_(programming) "wikilink") requests using `$.ajax`. Its associated methods can be used to load and manipulate remote data.

``` {.javascript}
$.ajax({
  type: 'POST',
  url: '/process/submit.php',
  data: {
    name : 'John',
    location : 'Boston',
  },
}).done(function(msg) {
  alert('Data Saved: ' + msg);
}).fail(function(xmlHttpRequest, statusText, errorThrown) {
  alert(
    'Your form submission failed.\n\n'
      + 'XML Http Request: ' + JSON.stringify(xmlHttpRequest)
      + ',\nStatus Text: ' + statusText
      + ',\nError Thrown: ' + errorThrown);
});
```

This example posts the data `name=John` and `location=Boston` to `/process/submit.php` on the server. When this request finishes the success function is called to alert the user. If the request fails it will alert the user to the failure, the status of the request, and the specific error.

#### Asynchronous

Note that the above example uses the deferred nature of `$.ajax()` to handle its asynchronous nature: `.done()` and `.fail()` create callbacks that run only when the asynchronous process is complete.

## jQuery plug-ins

jQuery's architecture allows developers to create [plug-in](Plug-in_(computing) "wikilink") code to extend its function. There are thousands of jQuery plug-ins available on the Web[^19] that cover a range of functions, such as Ajax helpers, [Web services](Web_service "wikilink"), datagrids, dynamic lists, [XML](XML "wikilink") and [XSLT](XSLT "wikilink") tools, [drag and drop](drag_and_drop "wikilink"), events, [cookie](HTTP_cookie "wikilink") handling, and [modal windows](modal_window "wikilink").

An important source of jQuery plug-ins is the plugins subdomain of the jQuery Project website.[^20] The plugins in this subdomain, however, were accidentally deleted in December 2011 in an attempt to rid the site of spam.[^21] The new site will include a [GitHub](GitHub "wikilink")-hosted repository, which will require developers to resubmit their plugins and to conform to new submission requirements.[^22] There are alternative plug-in search engines[^23] like [jquer.in](http://jquer.in) that take more specialized approaches, such as listing only plug-ins that meet certain criteria (e.g. those that have a public code repository). jQuery provides a "Learning Center" that can help users understand JavaScript and get started developing jQuery plugins.[^24]

## History

jQuery was originally released in January 2006 at [BarCamp](BarCamp "wikilink") NYC by [John Resig](John_Resig "wikilink") and was influenced by Dean Edwards' earlier [cssQuery](cssQuery "wikilink") library.[^25] It is currently maintained by a team of developers led by Timmy Willison (with the jQuery selector engine, Sizzle, being led by Richard Gibson).

jQuery has also an interesting [software license](software_license "wikilink") history.[^26] Originally under the [CC BY-SA 2.5](CC_BY-SA_2.5 "wikilink"), it was [relicensed](Software_relicensing "wikilink") to the [MIT license](MIT_license "wikilink") in 2006.[^27] On end of 2006 it was [dual-licensed](dual-license "wikilink") under [GPL](GPL "wikilink") and MIT license.[^28] As this led to some confusion, in 2012 the GPL was dropped and is now only MIT licensed.[^29]

As of 2015, jQuery remains the most widely used JavaScript library on the Web.

### Release history

  Version number   Release date   Latest update   Size Prod (KB)   Additional notes
  ---------------- -------------- --------------- ---------------- ----------------------------------------------------------------------------------------
  1.0                                                              First stable release
  1.1                                                              
  1.2                                                              
  1.3                                             55.9             Sizzle Selector Engine introduced into core
  1.4                                                              
  1.5                                                              Deferred callback management, ajax module rewrite
  1.6                                                              Significant performance improvements to the attr() and val() functions
  1.7                             1.7.2 ()                         New Event APIs: .on() and .off(), while the old APIs are still supported.
  1.8                             1.8.3 ()        91.4             Sizzle Selector Engine rewritten, improved animations and \$(html, props) flexibility.
  1.9                             1.9.1 ()                         Removal of deprecated interfaces and code cleanup
  1.10                            1.10.2 ()                        Incorporated bug fixes and differences reported from both the 1.9 and 2.0 beta cycles
  1.11                            1.11.3 ()       95.9             
  1.12                            1.12.4 ()       95               
  2.0                             2.0.3 ()        81.1             Dropped IE 6–8 support for performance improvements and reduction in filesize
  2.1                             2.1.4 ()        82.4             
  2.2                             2.2.4 ()        85.6
  3.0                             3.0.0 ()        86.3             Promises/A+ support for Deferreds, \$.ajax and \$.when, .data() HTML5-compatible
  3.1                             3.1.0 ()        86.3             jQuery.readyException added, ready handler errors are now not silenced

## Testing framework

[QUnit](QUnit "wikilink") is a [test automation framework](test_automation_framework "wikilink") used to test the jQuery project. The jQuery team developed it as an in-house unit testing library.[^30] The jQuery team uses it to test its code and plugins, but it can test any generic JavaScript code, including server-side JavaScript code.[^31]

As of 2011, the jQuery Testing Team uses [QUnit](QUnit "wikilink") with [TestSwarm](TestSwarm "wikilink") to test each jQuery codebase release.[^32]

## See also

-   [Comparison of JavaScript frameworks](Comparison_of_JavaScript_frameworks "wikilink")
-   [jQuery Mobile](jQuery_Mobile "wikilink")
-   [jQuery UI](jQuery_UI "wikilink")
-   [Globalize](Globalize "wikilink")

## References

## Further reading

-   -   -   -   

## External links

-   -   

[Category:2006 software](Category:2006_software "wikilink") [Category:Ajax (programming)](Category:Ajax_(programming) "wikilink") [Category:Free software programmed in JavaScript](Category:Free_software_programmed_in_JavaScript "wikilink") [Category:JavaScript libraries](Category:JavaScript_libraries "wikilink") [Category:Software using the MIT license](Category:Software_using_the_MIT_license "wikilink")

[^1]: 

[^2]: 

[^3]: 

[^4]: 

[^5]: 

[^6]: "[Selectors API Level 1, W3C Recommendation](http://www.w3.org/TR/selectors-api/#queryselector)" (21 February 2013). This standard turned what was jQuery "helper methods" into JavaScript-native ones, and the wide use of jQuery stimulated the [fast adoption](http://caniuse.com/queryselector) of `querySelector/querySelectorAll` into main Web browsers.

[^7]: 

[^8]: 

[^9]: 

[^10]: 

[^11]: 

[^12]: \[//jquery.com/browser-support/ Browser Support | jQuery\]

[^13]: 

[^14]: 

[^15]: 

[^16]: 

[^17]: 

[^18]: 

[^19]: 

[^20]: 

[^21]: 

[^22]: 

[^23]: 

[^24]: 

[^25]: 

[^26]: [jquery history](http://www.softwarefreedom.org/resources/2013/lcs-slides-aaronw/#/jquery-history) on softwarefreedom.org

[^27]: [jquery-under-the-mit-license](https://blog.jquery.com/2006/05/27/jquery-under-the-mit-license/) on jquery.org (2006)

[^28]: [license](http://web.archive.org/web/20100301130833/http://jquery.org/license) on jquery.org (archived 2010)

[^29]: [jquery-licensing-changes](https://blog.jquery.com/2012/09/10/jquery-licensing-changes/) on jquery.org (2012)

[^30]: 

[^31]: 

[^32]: 
