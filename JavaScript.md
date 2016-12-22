**JavaScript** ([^1]) is a [high-level](High-level_programming_language "wikilink"), [dynamic](dynamic_programming_language "wikilink"), [untyped](Programming_language#Type_system "wikilink"), and [interpreted](Interpreted_language "wikilink") [programming language](programming_language "wikilink"). It has been standardized in the [ECMAScript](ECMAScript "wikilink") language specification. Alongside [HTML](HTML "wikilink") and [CSS](CSS "wikilink"), JavaScript is one of the three core technologies of [World Wide Web](World_Wide_Web "wikilink") [content production](content_engineering "wikilink"); the majority of [websites](website "wikilink") employ it, and all modern [Web browsers](Web_browser "wikilink") support it without the need for [plug-ins](Browser_extension "wikilink"). JavaScript is [prototype-based](Prototype-based_programming "wikilink") with [first-class functions](first-class_function "wikilink"), making it a [multi-paradigm](multi-paradigm "wikilink") language, supporting [object-oriented](Object-oriented_programming "wikilink"),[^2] [imperative](imperative_programming "wikilink"), and [functional](functional_programming "wikilink") [programming styles](programming_paradigm "wikilink"). It has an [API](Application_programming_interface "wikilink") for working with text, [arrays](Array_data_type "wikilink"), dates and [regular expressions](regular_expression "wikilink"), but does not include any [I/O](Input/output "wikilink"), such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.

Although there are strong outward similarities between JavaScript and Java, including language name, [syntax](Syntax_(programming_languages) "wikilink"), and respective [standard libraries](standard_library "wikilink"), the two are distinct languages and differ greatly in their design. JavaScript was influenced by programming languages such as [Self](Self_(programming_language) "wikilink") and [Scheme](Scheme_(programming_language) "wikilink").[^3]

JavaScript is also used in environments that are not Web-based, such as [PDF](Portable_Document_Format "wikilink") documents, [site-specific browsers](site-specific_browser "wikilink"), and [desktop widgets](desktop_widget "wikilink"). Newer and faster JavaScript [virtual machines](virtual_machine "wikilink") (VMs) and platforms built upon them have also increased the popularity of JavaScript for [server-side](server-side "wikilink") [Web applications](Web_application "wikilink"). On the [client side](client_side "wikilink"), developers have traditionally implemented JavaScript as an [interpreted](Interpreter_(computing) "wikilink") language, but more recent browsers perform [just-in-time compilation](just-in-time_compilation "wikilink"). Programmers also use JavaScript in [video-game development](video_game_development "wikilink"), in crafting desktop and mobile applications, and in server-side [network programming](computer_network_programming "wikilink") with run-time environments such as [Node.js](Node.js "wikilink").

## History

### Beginnings at Netscape

In 1993, the [National Center for Supercomputing Applications](National_Center_for_Supercomputing_Applications "wikilink") (NCSA), a unit of the [University of Illinois at Urbana-Champaign](University_of_Illinois_at_Urbana-Champaign "wikilink"), released [NCSA Mosaic](Mosaic_(web_browser) "wikilink"), the first popular graphical [Web browser](Web_browser "wikilink"), which played an important part in expanding the growth of the nascent [World Wide Web](World_Wide_Web "wikilink"). In 1994, a company called [Mosaic Communications](Netscape "wikilink") was founded in [Mountain View](Mountain_View,_California "wikilink"), [California](California "wikilink") and employed many of the original NCSA Mosaic authors to create [Mosaic Netscape](Netscape_Navigator "wikilink"). However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for "Mosaic killer", as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications.

Netscape Communications realized that the Web needed to become more dynamic. [Marc Andreessen](Marc_Andreessen "wikilink"), the founder of the company believed that [HTML](HTML "wikilink") needed a "glue language" that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup. In 1995, the company recruited [Brendan Eich](Brendan_Eich "wikilink") with the goal of embedding the [Scheme](Scheme_(programming_language) "wikilink") programming language into its Netscape Navigator. Before he could get started, Netscape Communications collaborated with [Sun Microsystems](Sun_Microsystems "wikilink") to include in Netscape Navigator Sun's more static programming language [Java](Java_(programming_language) "wikilink"), in order to compete with [Microsoft](Microsoft "wikilink") for user adoption of Web technologies and platforms.[^4] Netscape Communications then decided that the scripting language they wanted to create would complement Java and should have a similar syntax, which excluded adopting other languages such as [Perl](Perl "wikilink"), [Python](Python_(programming_language) "wikilink"), [TCL](Tcl "wikilink"), or Scheme. To defend the idea of JavaScript against competing proposals, the company needed a prototype. Eich wrote one in 10 days, in May 1995.

Although it was developed under the name **Mocha**, the language was officially called **LiveScript** when it first shipped in beta releases of Netscape Navigator 2.0 in September 1995, but it was renamed **JavaScript**[^5] when it was deployed in the Netscape Navigator 2.0 beta 3 in December.[^6] The final choice of name caused confusion, giving the impression that the language was a spin-off of the Java programming language, and the choice has been characterized as a marketing ploy by Netscape to give JavaScript the cachet of what was then the hot new Web programming language.

There is a common misconception that JavaScript was influenced by an earlier Web page scripting language developed by [Nombas](Openwave "wikilink") named C-- (not to be confused with the later [C--](C-- "wikilink") created in 1997).[^7][^8] Brendan Eich, however, had never heard of C-- before he created LiveScript.[^9] Nombas did pitch their embedded Web page scripting to Netscape, though Web page scripting was not a new concept, as shown by the [ViolaWWW](ViolaWWW "wikilink") Web browser.[^10] Nombas later switched to offering JavaScript instead of C-- in their ScriptEase product and was part of the TC39 group that standardized ECMAScript.[^11]

### Server-side JavaScript

Netscape introduced an implementation of the language for [server-side scripting](server-side_scripting "wikilink") with [Netscape Enterprise Server](Netscape_Enterprise_Server "wikilink") in December 1995, soon after releasing JavaScript for browsers.[^12] Since the mid-2000s, there has been a resurgence of [server-side JavaScript implementations](Comparison_of_server-side_JavaScript_solutions "wikilink"), such as [node.js](node.js "wikilink").[^13] and [MarkLogic](MarkLogic "wikilink").[^14]

### Adoption by Microsoft

Microsoft script technologies including [VBScript](VBScript "wikilink") and [JScript](JScript "wikilink") were released in 1996. JScript, a reverse-engineered implementation of Netscape's JavaScript, was part of [Internet Explorer 3](Internet_Explorer_3 "wikilink"). JScript was also available for server-side scripting in [Internet Information Server](Internet_Information_Server "wikilink"). Internet Explorer 3 also included Microsoft's first support for CSS and various extensions to HTML, but in each case the implementation was noticeably different to that found in Netscape Navigator at the time.[^15][^16] These differences made it difficult for designers and programmers to make a single website work well in both browsers, leading to the use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos that characterized these early years of the [browser wars](browser_wars "wikilink").[^17] JavaScript began to acquire a reputation for being one of the roadblocks to a cross-platform and standards-driven Web. Some developers took on the difficult task of trying to make their sites work in both major browsers, but many could not afford the time.[^18] With the release of [Internet Explorer 4](Internet_Explorer_4 "wikilink"), Microsoft introduced the concept of [Dynamic HTML](Dynamic_HTML "wikilink"), but the differences in language implementations and the different and proprietary [Document Object Models](Document_Object_Model "wikilink") remained and were obstacles to widespread take-up of JavaScript on the Web.[^19]

### Standardization

In November 1996, Netscape submitted JavaScript to [Ecma International](Ecma_International "wikilink") to carve out a standard specification, which other browser vendors could then implement based on the work done at Netscape. This led to the official release of the language specification [ECMAScript](ECMAScript "wikilink") published in the first edition of the ECMA-262 standard in June 1997, with JavaScript being the most well known of the implementations. [ActionScript](ActionScript "wikilink") and [JScript](JScript "wikilink") are other well-known implementations of ECMAScript, with extensions.

The standards process continued in cycles, with the release of ECMAScript 2 in June 1998, which brings some modifications to conform to the ISO/IEC 16262 international standard. The release of ECMAScript 3 followed in December 1999, which is the baseline for modern day JavaScript. The original ECMAScript 4 work led by Waldemar Horwat (then at Netscape, now at [Google](Google "wikilink")) started in 2000 and at first, [Microsoft](Microsoft "wikilink") seemed to participate and even implemented some of the proposals in their [JScript .NET](JScript_.NET "wikilink") language.

Over time it was clear though that Microsoft had no intention of cooperating or implementing proper JavaScript in Internet Explorer, even though they had no competing proposal and they had a partial (and diverged at this point) implementation on the [.NET](.NET "wikilink") server side. So by 2003, the original ECMAScript 4 work was mothballed.

The next major event was in 2005, with two major happenings in JavaScript's history. First, Brendan Eich and Mozilla rejoined Ecma International as a not-for-profit member and work started on [ECMAScript for XML](ECMAScript_for_XML "wikilink") (E4X), the ECMA-357 standard, which came from ex-Microsoft employees at [BEA Systems](BEA_Systems "wikilink") (originally acquired as Crossgain). This led to working jointly with [Macromedia](Macromedia "wikilink") (later acquired by [Adobe Systems](Adobe_Systems "wikilink")), who were implementing E4X in ActionScript 3 (ActionScript 3 was a fork of original ECMAScript 4).

So, along with Macromedia, work restarted on ECMAScript 4 with the goal of standardizing what was in ActionScript 3. To this end, Adobe Systems released the ActionScript Virtual Machine 2, code named [Tamarin](Tamarin_(software) "wikilink"), as an [open source](open_source "wikilink") project. But Tamarin and ActionScript 3 were too different from web JavaScript to converge, as was realized by the parties in 2007 and 2008.

Alas, there was still turmoil between the various players; [Douglas Crockford](Douglas_Crockford "wikilink")—then at [Yahoo!](Yahoo! "wikilink")—joined forces with Microsoft in 2007 to oppose ECMAScript 4, which led to the ECMAScript 3.1 effort. The development of ECMAScript 4 was never completed, but that work influenced subsequent versions.[^20]

While all of this was happening, the open source and developer communities set to work to revolutionize what could be done with JavaScript. This community effort was sparked in 2005 when [Jesse James Garrett](Jesse_James_Garrett "wikilink") released a white paper in which he coined the term [Ajax](Ajax_(programming) "wikilink"), and described a set of technologies, of which JavaScript was the backbone, used to create web applications where data can be loaded in the background, avoiding the need for full page reloads and leading to more dynamic applications. This resulted in a renaissance period of JavaScript usage spearheaded by open source libraries and the communities that formed around them, with libraries such as [Prototype](Prototype_JavaScript_Framework "wikilink"), [jQuery](jQuery "wikilink"), [Dojo Toolkit](Dojo_Toolkit "wikilink"), [MooTools](MooTools "wikilink") and others being released.

In July 2008, the disparate parties on either side came together in Oslo. This led to the eventual agreement in early 2009 to rename ECMAScript 3.1 to ECMAScript 5 and drive the language forward using an agenda that is known as Harmony. ECMAScript 5 was finally released in December 2009.

In June 2011, ECMAScript 5.1 was released to fully align with the third edition of the ISO/IEC 16262 international standard. ECMAScript 2015 was released in June 2015. The current version is ECMAScript 2016, released in June 2016.[^21]

### Later developments

JavaScript has become one of the most popular programming languages on the Web. Initially, however, many professional programmers denigrated the language because, among other reasons, its target audience consisted of Web authors and other such "amateurs".[^22] The advent of [Ajax](Ajax_(programming) "wikilink") returned JavaScript to the spotlight and brought more professional programming attention. The result was a proliferation of comprehensive [frameworks and libraries](List_of_JavaScript_libraries "wikilink"), improved JavaScript programming practices, and increased usage of JavaScript outside Web browsers, as seen by the proliferation of [server-side JavaScript](server-side_JavaScript "wikilink") platforms.

In January 2009, the [CommonJS](CommonJS "wikilink") project was founded with the goal of specifying a common standard library mainly for JavaScript development outside the browser.[^23]

With the rise of [single-page applications](single-page_application "wikilink") and JavaScript-heavy sites, it is increasingly being used as a compile target for [source-to-source compilers](source-to-source_compiler "wikilink") from both [dynamic languages](Dynamic_typing "wikilink") and [static languages](Static_typing "wikilink").

## Trademark

"JavaScript" is a [trademark](trademark "wikilink") of [Oracle Corporation](Oracle_Corporation "wikilink").[^24] It is used under license for technology invented and implemented by Netscape Communications and current entities such as the [Mozilla Foundation](Mozilla_Foundation "wikilink").[^25]

## Features

The following features are common to all conforming ECMAScript implementations, unless explicitly specified otherwise.

### Imperative and structured

JavaScript supports much of the [structured programming](structured_programming "wikilink") syntax from [C](C_(computer_language) "wikilink") (e.g., `if` statements, `while` loops, `switch` statements, `do while` loops, etc.). One partial exception is [scoping](scope_(computer_science) "wikilink"): JavaScript originally had only [function scoping](function_scoping "wikilink") with `var`. ECMAScript 2015 added a `let` keyword for block scoping, meaning JavaScript now has both function and block scoping. Like C, JavaScript makes a distinction between [expressions](Expression_(computer_science) "wikilink") and [statements](Statement_(computer_science) "wikilink"). One syntactic difference from C is [automatic semicolon insertion](Defensive_semicolon "wikilink"), which allows the semicolons that would normally terminate statements to be omitted.

### Dynamic

Typing: As with most [scripting languages](scripting_language "wikilink"), JavaScript is [dynamically typed](dynamic_typing "wikilink"); a [type](type_system "wikilink") is associated with each [value](value_(computer_science) "wikilink"), rather than just with each expression. For example, a [variable](Variable_(programming) "wikilink") that is at one time bound to a number may later be re-bound to a [string](string_(computer_science) "wikilink").[^26] JavaScript supports various ways to test the type of an object, including [duck typing](duck_typing "wikilink").\
Run-time evaluation: JavaScript includes an [`eval`](eval "wikilink") function that can execute statements provided as strings at run-time.

### Prototype-based (Object-oriented)

JavaScript is almost entirely [object-based](object-based "wikilink"). In JavaScript, an [object](Object_(computer_science) "wikilink") is an [associative array](associative_array "wikilink"), augmented with a prototype (see below); each string key provides the name for an object property, and there are two syntactical ways to specify such a name: dot notation (`obj.x = 10`) and bracket notation (`obj['x'] = 10`). A property may be added, rebound, or deleted at run-time. Most properties of an object (and any property that belongs to an object's prototype inheritance chain) can be enumerated using a `for...in` loop.

JavaScript has a small number of built-in objects, including and .

Prototypes: JavaScript uses [prototypes](prototype-based_programming "wikilink") where many other object-oriented languages use [classes](Class_(computer_science) "wikilink") for [inheritance](Inheritance_(computer_science) "wikilink").[^27] It is possible to simulate many class-based features with prototypes in JavaScript.[^28]\
Functions as object constructors: Functions double as object constructors, along with their typical role. Prefixing a function call with *new* will create an instance of a prototype, inheriting properties and methods from the constructor (including properties from the `Object` prototype).[^29] ECMAScript 5 offers the `Object.create` method, allowing explicit creation of an instance without automatically inheriting from the `Object` prototype (older environments can assign the prototype to `null`).[^30] The constructor's `prototype` property determines the object used for the new object's internal prototype. New methods can be added by modifying the prototype of the function used as a constructor. JavaScript's built-in constructors, such as `Array` or `Object`, also have prototypes that can be modified. While it is possible to modify the `Object` prototype, it is generally considered bad practice because most objects in JavaScript will inherit methods and properties from the `Object` prototype, and they may not expect the prototype to be modified.[^31]\
Functions as methods : Unlike many object-oriented languages, there is no distinction between a function definition and a [method](method_(computer_science) "wikilink") definition. Rather, the distinction occurs during function calling; when a function is called as a method of an object, the function's local *this* keyword is bound to that object for that invocation.

### Functional

A [function](Subroutine "wikilink") is [first-class](first-class_function "wikilink"); a function is considered to be an object. As such, a function may have properties and methods, such as <samp>.call()</samp> and `.bind()`.[^32] A *nested* function is a function defined within another function. It is created each time the outer function is invoked. In addition, each nested function forms a [lexical closure](Closure_(computer_programming) "wikilink"): The [lexical scope](Scope_(programming)#Lexical_scoping_vs._dynamic_scoping "wikilink") of the outer function (including any constant, local variable, or argument value) becomes part of the internal state of each inner function object, even after execution of the outer function concludes. JavaScript also supports [anonymous functions](anonymous_function "wikilink").

### Delegative

JavaScript supports implicit and explicit [delegation](Delegation_(object-oriented_programming) "wikilink").

Functions as Roles (Traits and Mixins): JavaScript natively supports various function-based implementations of [Role](Role-oriented_programming "wikilink")[^33] patterns like [Traits](Traits_(computer_science) "wikilink")[^34][^35] and [Mixins](Mixin "wikilink").[^36] Such a function defines additional behavior by at least one method bound to the `this` keyword within its `function` body. A Role then has to be delegated explicitly via `call` or `apply` to objects that need to feature additional behavior that is not shared via the prototype chain.\
Object Composition and Inheritance: Whereas explicit function-based delegation does cover [composition](Object_composition "wikilink") in JavaScript, implicit delegation already happens every time the prototype chain is walked in order to, e.g., find a method that might be related to but is not directly owned by an object. Once the method is found it gets called within this object's context. Thus [inheritance](Inheritance_(computer_science) "wikilink") in JavaScript is covered by a delegation automatism that is bound to the prototype property of constructor functions.

### Miscellaneous

Run-time environment: JavaScript typically relies on a run-time environment (e.g., a [Web browser](Web_browser "wikilink")) to provide objects and methods by which scripts can interact with the environment (e.g., a webpage DOM). It also relies on the run-time environment to provide the ability to include/import scripts (e.g., [HTML](HTML "wikilink") `<script>` elements). This is not a language feature per se, but it is common in most JavaScript implementations.

<!-- -->

:   JavaScript processes [messages](Message_(computer_science) "wikilink") from a [queue](Queue_(abstract_data_type) "wikilink") one at a time. Upon loading a new message, JavaScript calls a [function](Subroutine "wikilink") associated with that message, which creates a [call stack](call_stack "wikilink") frame (the function's [arguments](Parameter_(computer_programming) "wikilink") and [local variables](local_variable "wikilink")). The call stack shrinks and grows based on the function's needs. Upon function completion, when the stack is empty, JavaScript proceeds to the next message in the queue. This is called the [event loop](event_loop "wikilink"), described as "run to completion" because each message is fully processed before the next message is considered. However, the language's [concurrency model](Concurrency_(computer_science) "wikilink") describes the event loop as [non-blocking](Asynchronous_I/O "wikilink"): program [input/output](input/output "wikilink") is performed using [events](Event_(computing) "wikilink") and [callback functions](Callback_(computer_programming) "wikilink"). This means, for instance, that JavaScript can process a mouse click while waiting for a database query to return information.[^37]

<!-- -->

Variadic functions : An indefinite number of parameters can be passed to a function. The function can access them through [formal parameters](formal_parameter "wikilink") and also through the local  object. [Variadic functions](Variadic_functions "wikilink") can also be created by using the [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method.

<!-- -->

Array and object literals: Like many scripting languages, arrays and objects ([associative arrays](associative_arrays "wikilink") in other languages) can each be created with a succinct shortcut syntax. In fact, these [literals](Object_literal "wikilink") form the basis of the [JSON](JSON "wikilink") data format.

<!-- -->

Regular expressions: JavaScript also supports [regular expressions](regular_expression "wikilink") in a manner similar to [Perl](Perl "wikilink"), which provide a concise and powerful syntax for text manipulation that is more sophisticated than the built-in string functions.[^38]

### Vendor-specific extensions

JavaScript is officially managed by [Mozilla Foundation](Mozilla_Foundation "wikilink"), and new language features are added periodically. However, only some [JavaScript engines](JavaScript_engine "wikilink") support these new features:

-   property getter and setter functions (supported by WebKit, Gecko, Opera,[^39] ActionScript, and Rhino)[^40]
-   conditional `catch` clauses
-   iterator protocol (adopted from [Python](Python_(programming_language) "wikilink"))
-   shallow [generators](generator_(computer_programming) "wikilink")-[coroutines](coroutine "wikilink") (adopted from Python)
-   [array comprehensions](List_comprehension "wikilink") and generator expressions (adopted from Python)
-   proper block scope via the `let` keyword
-   array and object destructuring (limited form of [pattern matching](pattern_matching "wikilink"))
-   concise function expressions (`function(args) expr`)
-   [ECMAScript for XML](ECMAScript_for_XML "wikilink") (E4X), an extension that adds native XML support to ECMAScript (unsupported in Firefox since version 21[^41])

## Syntax

### Simple examples

[Variables](Variable_(computer_science) "wikilink") in JavaScript can be defined using the `var` keyword:[^42]

``` {.javascript}
var x; // defines the variable x and assigns to it the special value "undefined" (not to be confused with an undefined value)
var y = 2; // defines the variable y and assigns to it the value 2
```

Note the [comments](Comment_(computer_programming) "wikilink") in the example above, both of which were preceded with two [forward slashes](Slash_(punctuation) "wikilink").

There is no built-in [I/O](Input/output "wikilink") functionality in JavaScript; the run-time environment provides that. The ECMAScript specification in edition 5.1 mentions:[^43]

> … indeed, there are no provisions in this specification for input of external data or output of computed results.

However, most runtime environments have a `console` object [^44] that can be used to print output. Here is a minimalist [Hello World program](Hello_World_program "wikilink"):

``` {.javascript}
console.log("Hello World!");
```

A simple [recursive](Recursion_(computer_science) "wikilink") function:

``` {.javascript}
function factorial(n) {if (n===0||n===1) return 1; //fact0=fact1=1
    return n * factorial(n - 1)} 

factorial(3); // returns 6
```

An [anonymous function](anonymous_function "wikilink") (or lambda):

``` {.javascript}
function counter() {
var count = 0;
    return function() {return ++count}};

var closure = counter();
closure(); // returns 1
closure(); // returns 2
closure(); // returns 3
```

This example shows that in JavaScript, [function closures](Closure_(computer_programming) "wikilink") captures their non-local variables *by reference*.

[Variadic function](Variadic_function "wikilink") demonstration (`arguments` is a special [variable](variable_(programming) "wikilink")):[^45]

``` {.javascript}
function sum() {var x = 0;
    for (var i = 0; i < arguments.length; ++i) x += arguments[i];
    return x}

sum(1, 2); // returns 3
sum(1, 2, 3); // returns 6
```

[Immediately-invoked function expressions](Immediately-invoked_function_expression "wikilink") are often used to create modules, as before ECMAScript 2015 there was not built-in construct in the language. Modules allow gathering properties and methods in a namespace and making some of them private:

``` {.javascript}
var counter = (function () {
    var i = 0; // private property

    return {   // public methods
        get: function () {
            alert(i);
        },
        set: function (value) {
            i = value;
        },
        increment: function () {
            alert(++i);
        }
    };
})(); // module

counter.get();       // shows 0
counter.set(6);
counter.increment(); // shows 7
counter.increment(); // shows 8
```

### More advanced example

This sample code displays various JavaScript features.

``` {.javascript}
/* Finds the lowest common multiple (LCM) of two numbers */
function LCMCalculator(x, y) { // constructor function
    var checkInt = function (x) { // inner function
        if (x % 1 !== 0) {
            throw new TypeError(x + " is not an integer"); // throw an exception
        }
        return x;
    };
    this.a = checkInt(x)
    //   semicolons   ^^^^  are optional, a newline is enough
    this.b = checkInt(y);
}
// The prototype of object instances created by a constructor is
// that constructor's "prototype" property.
LCMCalculator.prototype = { // object literal
    constructor: LCMCalculator, // when reassigning a prototype, set the constructor property appropriately
    gcd: function () { // method that calculates the greatest common divisor
        // Euclidean algorithm:
        var a = Math.abs(this.a), b = Math.abs(this.b), t;
        if (a < b) {
            // swap variables
            t = b;
            b = a;
            a = t;
        }
        while (b !== 0) {
            t = b;
            b = a % b;
            a = t;
        }
        // Only need to calculate GCD once, so "redefine" this method.
        // (Actually not redefinition—it's defined on the instance itself,
        // so that this.gcd refers to this "redefinition" instead of LCMCalculator.prototype.gcd.
        // Note that this leads to a wrong result if the LCMCalculator object members "a" and/or "b" are altered afterwards.)
        // Also, 'gcd' === "gcd", this['gcd'] === this.gcd
        this['gcd'] = function () {
            return a;
        };
        return a;
    },
    // Object property names can be specified by strings delimited by double (") or single (') quotes.
    lcm : function () {
        // Variable names don't collide with object properties, e.g., |lcm| is not |this.lcm|.
        // not using |this.a*this.b| to avoid FP precision issues
        var lcm = this.a/this.gcd()*this.b;
        // Only need to calculate lcm once, so "redefine" this method.
        this.lcm = function () {
            return lcm;
        };
        return lcm;
    },
    toString: function () {
        return "LCMCalculator: a = " + this.a + ", b = " + this.b;
    }
};

// Define generic output function; this implementation only works for Web browsers
function output(x) {
    document.body.appendChild(document.createTextNode(x));
    document.body.appendChild(document.createElement('br'));
}

// Note: Array's map() and forEach() are defined in JavaScript 1.6.
// They are used here to demonstrate JavaScript's inherent functional nature.
[[25, 55], [21, 56], [22, 58], [28, 56]].map(function (pair) { // array literal + mapping function
    return new LCMCalculator(pair[0], pair[1]);
}).sort((a, b) => a.lcm() - b.lcm()) // sort with this comparative function; => is a shorthand form of a function, called "arrow function"
  .forEach(printResult);

function printResult(obj) {
    output(obj + ", gcd = " + obj.gcd() + ", lcm = " + obj.lcm());
}
```

The following output should be displayed in the browser window.

``` {.html4strict}
LCMCalculator: a = 28, b = 56, gcd = 28, lcm = 56
LCMCalculator: a = 21, b = 56, gcd = 7, lcm = 168
LCMCalculator: a = 25, b = 55, gcd = 5, lcm = 275
LCMCalculator: a = 22, b = 58, gcd = 2, lcm = 638
```

## Use in Web pages

The most common use of JavaScript is to add client-side behavior to [HTML](HTML "wikilink") pages, also known as [Dynamic HTML](Dynamic_HTML "wikilink") (DHTML). Scripts are embedded in or included from [HTML](HTML "wikilink") pages and interact with the [Document Object Model](Document_Object_Model "wikilink") (DOM) of the page. Some simple examples of this usage are:

-   Loading new page content or submitting data to the server via [Ajax](Ajax_(programming) "wikilink") without reloading the page (for example, a social network might allow the user to post status updates without leaving the page).
-   Animation of page elements, fading them in and out, resizing them, moving them, etc.
-   Interactive content, for example games, and playing audio and video.
-   [Validating](Data_validation "wikilink") input values of a [Web form](Form_(HTML) "wikilink") to make sure that they are acceptable before being submitted to the server.
-   Transmitting information about the user's reading habits and browsing activities to various websites. Web pages frequently do this for [Web analytics](Web_analytics "wikilink"), [ad tracking](ad_tracking "wikilink"), [personalization](personalization "wikilink") or other purposes.[^46]

Because JavaScript code can run locally in a user's browser (rather than on a remote server), the browser can respond to user actions quickly, making an application more responsive. Furthermore, JavaScript code can detect user actions that HTML alone cannot, such as individual keystrokes. Applications such as [Gmail](Gmail "wikilink") take advantage of this: much of the user-interface logic is written in JavaScript, and JavaScript dispatches requests for information (such as the content of an e-mail message) to the server. The wider trend of Ajax programming similarly exploits this strength.

A [JavaScript engine](JavaScript_engine "wikilink") (also known as JavaScript interpreter or JavaScript implementation) is an [interpreter](interpreter_(computing) "wikilink") that interprets JavaScript [source code](source_code "wikilink") and executes the [script](computer_program "wikilink") accordingly. The first JavaScript engine was created by Brendan Eich at Netscape, for the Netscape Navigator Web browser. The engine, code-named [SpiderMonkey](SpiderMonkey_(JavaScript_engine) "wikilink"), is implemented in [C](C_(programming_language) "wikilink"). It has since been updated (in JavaScript 1.5) to conform to ECMAScript 3. The [Rhino](Rhino_(JavaScript_engine) "wikilink") engine, created primarily by Norris Boyd (formerly at Netscape, now at Google) is a JavaScript implementation in [Java](Java_(programming_language) "wikilink"). Rhino, like SpiderMonkey, is ECMAScript 3 compliant.

A Web browser is by far the most common host environment for JavaScript. Web browsers typically create "host objects" to represent the DOM in JavaScript. The [Web server](Web_server "wikilink") is another common host environment. A [JavaScript Web server](Server-side_JavaScript "wikilink") would typically expose host objects representing [HTTP](HTTP "wikilink") request and response objects, which a JavaScript program could then interrogate and manipulate to dynamically generate Web pages.

Because JavaScript is the only language that the most popular browsers share support for, it has become a [target language](target_language_(computing) "wikilink") for many frameworks in other languages, even though JavaScript was never intended to be such a language.[^47] Despite the performance limitations inherent to its dynamic nature, the increasing speed of JavaScript engines has made the language a surprisingly feasible compilation target.

### Example script

Below is a minimal example of a standards-conforming Web page containing JavaScript (using [HTML 5](HTML_5 "wikilink") syntax) and the DOM:

``` {.html5}
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <button id="hellobutton">Hello</button>
    <script>
        document.getElementById('hellobutton').onclick = function() {
            alert('Hello world!');                     // Show a dialog
            var myTextNode = document.createTextNode('Some new words.');
            document.body.appendChild(myTextNode);     // Append "Some new words" to the page
        };
    </script>
  </body>
</html>
```

### Compatibility considerations

Because JavaScript runs in widely varying environments, an important part of testing and debugging is to test and verify that the JavaScript works across multiple browsers.

The DOM interfaces for manipulating Web pages are not part of the ECMAScript standard, or of JavaScript itself. Officially, the DOM interfaces are defined by a separate standardization effort by the [W3C](World_Wide_Web_Consortium "wikilink"); in practice, browser implementations differ from the standards and from each other, and not all browsers execute JavaScript.

To deal with these differences, JavaScript authors can attempt to write standards-compliant code that will also be executed correctly by most browsers; failing that, they can write code that checks for the presence of certain browser features and behaves differently if they are not available.[^48] In some cases, two browsers may both implement a feature but with different behavior, and authors may find it practical to detect what browser is running and change their script's behavior to match.[^49][^50] Programmers may also use libraries or toolkits that take browser differences into account.

Furthermore, scripts may not work for some users. For example, a user may:

-   use an old or rare browser with incomplete or unusual DOM support;
-   use a [PDA](Personal_digital_assistant "wikilink") or [mobile phone](mobile_phone "wikilink") browser that cannot execute JavaScript;
-   have JavaScript execution disabled as a security precaution;
-   use a speech browser due to, for example, a visual disability.

To support these users, Web authors can try to create pages that [degrade gracefully](Fault-tolerant_system "wikilink") on user agents (browsers) that do not support the page's JavaScript. In particular, the page should remain usable albeit without the extra features that the JavaScript would have added. An alternative approach that many find preferable is to first author content using basic technologies that work in all browsers, then enhance the content for users that have JavaScript enabled. This is known as [progressive enhancement](progressive_enhancement "wikilink").

## Security

JavaScript and the DOM provide the potential for malicious authors to deliver scripts to run on a client computer via the Web. Browser authors contain this risk using two restrictions. First, scripts run in a [sandbox](Sandbox_(computer_security) "wikilink") in which they can only perform Web-related actions, not general-purpose programming tasks like creating files. Second, scripts are constrained by the [same origin policy](same_origin_policy "wikilink"): scripts from one Web site do not have access to information such as usernames, passwords, or cookies sent to another site. Most JavaScript-related security bugs are breaches of either the same origin policy or the sandbox.

There are subsets of general JavaScript—ADsafe, Secure ECMAScript (SES)—that provide greater level of security, especially on code created by third parties (such as advertisements).[^51][^52] [Caja](Caja_project "wikilink") is another project for safe embedding and isolation of third-party JavaScript and HTML.

[Content Security Policy](Content_Security_Policy "wikilink") is the main intended method of ensuring that only trusted code is executed on a Web page.

### Cross-site vulnerabilities

A common JavaScript-related security problem is [cross-site scripting](cross-site_scripting "wikilink") (XSS), a violation of the [same-origin policy](same-origin_policy "wikilink"). XSS vulnerabilities occur when an attacker is able to cause a target Web site, such as an online banking website, to include a malicious script in the webpage presented to a victim. The script in this example can then access the banking application with the privileges of the victim, potentially disclosing secret information or transferring money without the victim's authorization. A solution to XSS vulnerabilities is to use *HTML escaping* whenever displaying untrusted data.

Some browsers include partial protection against *reflected* XSS attacks, in which the attacker provides a URL including malicious script. However, even users of those browsers are vulnerable to other XSS attacks, such as those where the malicious code is stored in a database. Only correct design of Web applications on the server side can fully prevent XSS.

XSS vulnerabilities can also occur because of implementation mistakes by browser authors.[^53]

Another cross-site vulnerability is [cross-site request forgery](cross-site_request_forgery "wikilink") (CSRF). In CSRF, code on an attacker's site tricks the victim's browser into taking actions the user didn't intend at a target site (like transferring money at a bank). It works because, if the target site relies only on cookies to authenticate requests, then requests initiated by code on the attacker's site will carry the same legitimate login credentials as requests initiated by the user. In general, the solution to CSRF is to require an authentication value in a hidden form field, and not only in the cookies, to authenticate any request that might have lasting effects. Checking the HTTP Referrer header can also help.

"JavaScript hijacking" is a type of CSRF attack in which a `<script>` tag on an attacker's site exploits a page on the victim's site that returns private information such as [JSON](JSON "wikilink") or JavaScript. Possible solutions include:

-   requiring an authentication token in the [POST](POST_(HTTP) "wikilink") and [GET](GET_(HTTP) "wikilink") parameters for any response that returns private information.

#### Misplaced trust in the client

Developers of client-server applications must recognize that untrusted clients may be under the control of attackers. The application author cannot assume that his JavaScript code will run as intended (or at all) because any secret embedded in the code could be extracted by a determined adversary. Some implications are:

-   Web site authors cannot perfectly conceal how their JavaScript operates because the raw source code must be sent to the client. The code can be [obfuscated](obfuscated_code "wikilink"), but obfuscation can be reverse-engineered.
-   JavaScript form validation only provides convenience for users, not security. If a site verifies that the user agreed to its terms of service, or filters invalid characters out of fields that should only contain numbers, it must do so on the server, not only the client.
-   Scripts can be selectively disabled, so JavaScript can't be relied on to prevent operations such as right-clicking on an image to save it.[^54]
-   It is extremely bad practice to embed sensitive information such as passwords in JavaScript because it can be extracted by an attacker.

#### Browser and plugin coding errors

JavaScript provides an interface to a wide range of browser capabilities, some of which may have flaws such as [buffer overflows](buffer_overflow "wikilink"). These flaws can allow attackers to write scripts that would run any code they wish on the user's system. This code is not by any means limited to another JavaScript application. For example, a buffer overrun exploit can allow an attacker to gain access to the operating system's API with superuser privileges.

These flaws have affected major browsers including Firefox,[^55] Internet Explorer,[^56] and Safari.[^57]

Plugins, such as video players, [Adobe Flash](Adobe_Flash#Flash_client_security "wikilink"), and the wide range of [ActiveX](ActiveX "wikilink") controls enabled by default in Microsoft Internet Explorer, may also have flaws exploitable via JavaScript (such flaws have been exploited in the past).[^58][^59]

In Windows Vista, Microsoft has attempted to contain the risks of bugs such as buffer overflows by running the Internet Explorer process with limited privileges.[^60] [Google Chrome](Google_Chrome "wikilink") similarly confines its page renderers to their own "sandbox".

#### Sandbox implementation errors

Web browsers are capable of running JavaScript outside the sandbox, with the privileges necessary to, for example, create or delete files. Of course, such privileges aren't meant to be granted to code from the Web.

Incorrectly granting privileges to JavaScript from the Web has played a role in vulnerabilities in both Internet Explorer[^61] and Firefox.[^62] In Windows XP Service Pack 2, Microsoft demoted JScript's privileges in Internet Explorer.[^63]

[Microsoft Windows](Microsoft_Windows "wikilink") allows JavaScript source files on a computer's hard drive to be launched as general-purpose, non-sandboxed programs (see: [Windows Script Host](Windows_Script_Host "wikilink")). This makes JavaScript (like [VBScript](VBScript "wikilink")) a theoretically viable vector for a [Trojan horse](Trojan_horse_(computing) "wikilink"), although JavaScript Trojan horses are uncommon in practice.[^64]

## Uses outside Web pages

In addition to Web browsers and servers, JavaScript interpreters are embedded in a number of tools. Each of these applications provides its own [object model](object_model "wikilink") that provides access to the host environment. The core JavaScript language remains mostly the same in each application.

### Embedded scripting language

-   Google's [Chrome](Google_Chrome "wikilink") extensions, [Opera](Opera_(Web_browser) "wikilink")'s extensions, Apple's [Safari 5](Safari_(Web_browser) "wikilink") extensions, Apple's [Dashboard Widgets](Dashboard_(Mac_OS) "wikilink"), Microsoft's [Gadgets](Microsoft_Gadgets "wikilink"), [Yahoo! Widgets](Yahoo!_Widgets "wikilink"), [Google Desktop Gadgets](Google_Desktop#Gadgets_and_plug-ins "wikilink"), and [Serence](Serence "wikilink") [Klipfolio](Klipfolio "wikilink") are implemented using JavaScript.
-   The [MongoDB](MongoDB "wikilink") database accepts queries written in JavaScript. [MongoDB](MongoDB "wikilink") and [NodeJS](NodeJS "wikilink") are the core components of [MEAN](MEAN_(software_bundle) "wikilink"): a [solution stack](solution_stack "wikilink") for creating Web applications using just JavaScript.
-   The [Clusterpoint](Clusterpoint "wikilink") database accept queries written in JS/SQL, which is a combination of [SQL](SQL "wikilink") and JavaScript. [Clusterpoint](Clusterpoint "wikilink") has built-in computing engine that allows execution of JavaScript code right inside the [distributed database](distributed_database "wikilink").
-   Adobe's [Acrobat and Adobe Reader](Adobe_Acrobat#Security "wikilink") support JavaScript in [PDF](Portable_Document_Format "wikilink") files.[^65]
-   Tools in the [Adobe Creative Suite](Adobe_Creative_Suite "wikilink"), including [Photoshop](Adobe_Photoshop "wikilink"), [Illustrator](Adobe_Illustrator "wikilink"), [Dreamweaver](Dreamweaver "wikilink"), and [InDesign](InDesign "wikilink"), allow scripting through JavaScript.
-   [OpenOffice.org](OpenOffice.org "wikilink"), an office application suite, as well as its popular fork [LibreOffice](LibreOffice "wikilink"), allows JavaScript to be used as a scripting language.
-   The visual programming language [Max](Max_(software) "wikilink"), released by Cycling '74, offers a JavaScript model of its environment for use by developers. It allows users to reduce visual clutter by using a object for a task rather than many.
-   Apple's Logic Pro X digital audio workstation (DAW) software can create custom MIDI effects plugins using JavaScript.
-   ECMAScript was included in the [VRML](VRML "wikilink")97 standard for scripting nodes of VRML scene description files.
-   The [Unity](Unity_(game_engine) "wikilink") game engine supports a modified version of JavaScript for scripting via Mono.[^66]
-   [DX Studio](DX_Studio "wikilink") (3D engine) uses the [SpiderMonkey](SpiderMonkey_(JavaScript_engine) "wikilink") implementation of JavaScript for game and simulation logic.[^67]
-   [Maxwell Render](Maxwell_Render "wikilink") ([rendering](Rendering_(computer_graphics) "wikilink") software) provides an ECMA standard based scripting engine for tasks automation.[^68]
-   [Google Apps Script](Google_Apps_Script "wikilink") in [Google Spreadsheets](Google_Spreadsheets "wikilink") and [Google Sites](Google_Sites "wikilink") allows users to create custom formulas, automate repetitive tasks and also interact with other Google products such as Gmail.[^69]
-   Many [IRC clients](Internet_Relay_Chat_clients "wikilink"), like [ChatZilla](ChatZilla "wikilink") or [XChat](XChat "wikilink"), use JavaScript for their scripting abilities.[^70][^71]
-   [RPG Maker](RPG_Maker "wikilink") MV uses Javascript as its scripting language.[^72]

### Scripting engine

-   Microsoft's [Active Scripting](Active_Scripting "wikilink") technology supports [JScript](JScript "wikilink") as a scripting language.[^73]
-   [Java](Java_(programming_language) "wikilink") introduced the `javax.script` package in version 6 that includes a JavaScript implementation based on [Mozilla Rhino](Rhino_(JavaScript_engine) "wikilink"). Thus, Java applications can host scripts that access the application's variables and objects, much like Web browsers host scripts that access a webpage's [Document Object Model](Document_Object_Model "wikilink") (DOM).[^74]
-   The [Qt](Qt_(toolkit) "wikilink") C++ toolkit includes a `QtScript` module to interpret JavaScript, analogous to Java's `javax.script` package.[^75]
-   [OS X Yosemite](OS_X_Yosemite "wikilink") introduced JavaScript for Automation (JXA), which is built upon [JavaScriptCore](JavaScriptCore "wikilink") and the [Open Scripting Architecture](Open_Scripting_Architecture "wikilink"). It features an [Objective-C](Objective-C "wikilink") bridge that enables entire [Cocoa](Cocoa_(API) "wikilink") applications to be programmed in JavaScript.
-   Late Night Software's [JavaScript OSA](JavaScript_OSA "wikilink") (also known as JavaScript for OSA, or JSOSA) is a freeware alternative to [AppleScript](AppleScript "wikilink") for OS X. It is based on the Mozilla JavaScript 1.5 implementation, with the addition of a `MacOS` object for interaction with the operating system and third-party applications.[^76]

### Application platform

-   [ActionScript](ActionScript "wikilink"), the programming language used in [Adobe Flash](Adobe_Flash "wikilink"), is another implementation of the ECMAScript standard.
-   [Adobe Integrated Runtime](Adobe_Integrated_Runtime "wikilink") is a JavaScript runtime that allows developers to create desktop applications.
-   [Atom](Atom_(text_editor) "wikilink"), the open-source text editor developed by Github, was implemented using Javascript, and has a special API on Javascript for packages that are developed for it.
-   [CA, Inc.](CA,_Inc. "wikilink")'s AutoShell cross-application scripting environment is built on the [SpiderMonkey](SpiderMonkey_(JavaScript_engine) "wikilink") JavaScript engine. It contains [preprocessor](preprocessor "wikilink")-like extensions for command definition, as well as custom classes for various system-related tasks like file I/O, operation system command invocation and redirection, and COM scripting.
-   [GNOME Shell](GNOME_Shell "wikilink"), the shell for the desktop environment,[^77] made JavaScript its default programming language in 2013.[^78]
-   The [Mozilla](Mozilla "wikilink") platform, which underlies [Firefox](Firefox "wikilink"), [Thunderbird](Mozilla_Thunderbird "wikilink"), and some other Web browsers, uses JavaScript to implement the [graphical user interface](graphical_user_interface "wikilink") (GUI) of its various products.
-   [Qt Quick](Qt_Quick "wikilink")'s markup language (available since Qt 4.7) uses JavaScript for its application logic. Its declarative syntax is also similar to JavaScript.
-   [TypeScript](TypeScript "wikilink") is a programming language based on JavaScript that adds support for optional [type annotations](type_annotation "wikilink") and some other language extensions such as classes, interfaces and modules. A TS-script compiles into plain JavaScript and can be executed in any JS host supporting [ECMAScript](ECMAScript "wikilink") 3 or higher. The compiler is itself written in TypeScript.
-   [Ubuntu Touch](Ubuntu_Touch "wikilink") provides a JavaScript API for its unified usability interface.
-   [webOS](webOS "wikilink") uses the [WebKit](WebKit "wikilink") implementation of JavaScript in its [SDK](Software_development_kit "wikilink") to allow developers to create stand-alone applications solely in JavaScript.
-   [WinJS](Windows_Runtime#JavaScript "wikilink") provides a special Windows Library for JavaScript functionality in [Windows 8](Windows_8 "wikilink") that enables the development of [Modern style](Metro_(design_language) "wikilink") (formerly *Metro style*) applications in [HTML5](HTML5 "wikilink") and JavaScript.

## Development tools

Within JavaScript, access to a [debugger](debugger "wikilink") becomes invaluable when developing large, non-trivial programs. Because there can be implementation differences between the various browsers (particularly within the DOM), it is useful to have access to a debugger for each of the browsers that a Web application targets.[^79]

Script debuggers are integrated within [Internet Explorer](Internet_Explorer "wikilink"), [Firefox](Firefox "wikilink"), [Safari](Safari_(Web_browser) "wikilink"), [Google Chrome](Google_Chrome "wikilink"), [Opera](Opera_(Web_browser) "wikilink") and [Node.js](Node.js "wikilink").[^80][^81][^82]

In addition to the native [Internet Explorer Developer Tools](Internet_Explorer_Developer_Tools "wikilink"), three debuggers are available for Internet Explorer: [Microsoft Visual Studio](Microsoft_Visual_Studio "wikilink") is the richest of the three, closely followed by [Microsoft Script Editor](Microsoft_Script_Editor "wikilink") (a component of [Microsoft Office](Microsoft_Office "wikilink")),[^83] and finally the free [Microsoft Script Debugger](Microsoft_Script_Debugger "wikilink") that is far more basic than the other two. The free [Microsoft Visual Web Developer Express](Microsoft_Visual_Web_Developer_Express "wikilink") provides a limited version of the JavaScript debugging functionality in Microsoft Visual Studio. Internet Explorer has included developer tools since version 8.

In comparison to Internet Explorer, Firefox has a more comprehensive set of developer tools, which include a debugger as well. Old versions of Firefox without these tools used a [Firefox addon](Firefox_addon "wikilink") called [Firebug](Firebug_(Firefox_extension) "wikilink"), or the older [Venkman](Venkman "wikilink") debugger. Also, [WebKit](WebKit "wikilink")'s Web Inspector includes a JavaScript debugger,[^84] which is used in [Safari](Safari_(Web_browser) "wikilink"). A modified version called Blink DevTools is used in [Google Chrome](Google_Chrome "wikilink"). [Node.js](Node.js "wikilink") has Node Inspector, an interactive debugger that integrates with the Blink DevTools, available in [Google Chrome](Google_Chrome "wikilink"). [Opera](Opera_(Web_browser) "wikilink") includes a set of tools called [Dragonfly](Opera_Dragonfly "wikilink").[^85]

In addition to the native computer software, there are online JavaScript IDEs, debugging aids that are themselves written in JavaScript and built to run on the Web. An example is the program [JSLint](JSLint "wikilink"), developed by [Douglas Crockford](Douglas_Crockford "wikilink") who has written extensively on the language. JSLint scans JavaScript code for conformance to a set of standards and guidelines. Many libraries for JavaScript, such as [three.js](three.js "wikilink"), provide links to demonstration code that can be edited by users. They are also used as a pedagogical tool by institutions such as [Khan Academy](Khan_Academy "wikilink")[^86] to allow students to experience writing code in an environment where they can see the output of their programs, without needing any setup beyond a Web browser.

## Benchmark tools for developers

Since JavaScript is getting more important for web development (frontend overtakes many aspects which were done in backend before), there is also more consideration done about performance. Especially mobile devices could have problems with rendering and processing unoptimized complex logic.

A library for doing benchmarks is [benchmark.js](https://benchmarkjs.com/). A benchmarking library that supports high-resolution timers and returns statistically significant results.

Another tool is [jsben.ch](http://jsben.ch). An online JavaScript benchmarking tool, where code snippets can be tested against each other.

## Version history

JavaScript was initially developed in 1996 for use in the [Netscape Navigator](Netscape_Navigator "wikilink") Web browser. In the same year Microsoft released an implementation for Internet Explorer. This implementation was called [JScript](JScript "wikilink") due to trademark issues. In 1997 the first standardized version of the language was released under the name [ECMAScript](ECMAScript "wikilink") in the first edition of the ECMA-252 standard. The explicit versioning and opt-in of language features was Mozilla-specific and has been removed. Firefox 4 was the last version which referred to a JavaScript version (1.8.5). With new editions of the ECMA-262 standard, JavaScript language features are now often mentioned with their initial definition in the ECMA-262 editions.

The following table is based on information from multiple sources.[^87][^88][^89]

+-------+-------+-------+-------+-------+-------+-------+-------+-------+
| Versi | Relea | Equiv | Netsc | Mozil | Inter | Opera | Safar | Googl |
| on    | se    | alent | ape\  | la\   | net\  |       | i     | e\    |
|       | date  | to    | Navig | Firef | Explo |       |       | Chrom |
|       |       |       | ator  | ox    | rer   |       |       | e     |
+=======+=======+=======+=======+=======+=======+=======+=======+=======+
|       | March |       | 2.0   |       | 3.0   |       |       |       |
|       | 1996  |       |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | Augus |       | 3.0   |       |       |       |       |       |
|       | t     |       |       |       |       |       |       |       |
|       | 1996  |       |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | June  |       | 4.0-4 |       |       | 3[^90 |       |       |
|       | 1997  |       | .05   |       |       | ]     |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | Octob | ECMA- | 4.06- |       | 4.0   | 5[^91 |       |       |
|       | er    | 262   | 4.7x  |       |       | ]     |       |       |
|       | 1998  | 1st + |       |       |       |       |       |       |
|       |       | 2nd   |       |       |       |       |       |       |
|       |       | editi |       |       |       |       |       |       |
|       |       | on    |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       |       |       | Netsc |       |       | 6     |       |       |
|       |       |       | ape\  |       |       |       |       |       |
|       |       |       | Serve |       |       |       |       |       |
|       |       |       | r     |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | Novem | ECMA- | 6.0   | 1.0   | 5.5   | 7.0   | 3.0-5 | 1.0-1 |
|       | ber   | 262   |       |       | (JScr |       |       | 0.0.6 |
|       | 2000  | 3rd   |       |       | ipt   |       |       | 66    |
|       |       | editi |       |       | 5.5), |       |       |       |
|       |       | on    |       |       | \     |       |       |       |
|       |       |       |       |       | 6     |       |       |       |
|       |       |       |       |       | (JScr |       |       |       |
|       |       |       |       |       | ipt   |       |       |       |
|       |       |       |       |       | 5.6), |       |       |       |
|       |       |       |       |       | \     |       |       |       |
|       |       |       |       |       | 7     |       |       |       |
|       |       |       |       |       | (JScr |       |       |       |
|       |       |       |       |       | ipt   |       |       |       |
|       |       |       |       |       | 5.7), |       |       |       |
|       |       |       |       |       | \     |       |       |       |
|       |       |       |       |       | 8     |       |       |       |
|       |       |       |       |       | (JScr |       |       |       |
|       |       |       |       |       | ipt   |       |       |       |
|       |       |       |       |       | 5.8)  |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | Novem | 1.5 + |       | 1.5   |       |       |       |       |
|       | ber   | array |       |       |       |       |       |       |
|       | 2005  | extra |       |       |       |       |       |       |
|       |       | s     |       |       |       |       |       |       |
|       |       | +     |       |       |       |       |       |       |
|       |       | array |       |       |       |       |       |       |
|       |       | and   |       |       |       |       |       |       |
|       |       | strin |       |       |       |       |       |       |
|       |       | g     |       |       |       |       |       |       |
|       |       | gener |       |       |       |       |       |       |
|       |       | ics   |       |       |       |       |       |       |
|       |       | +     |       |       |       |       |       |       |
|       |       | [E4X] |       |       |       |       |       |       |
|       |       | (E4X  |       |       |       |       |       |       |
|       |       | "wiki |       |       |       |       |       |       |
|       |       | link" |       |       |       |       |       |       |
|       |       | )     |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | Octob | 1.6 + |       | 2.0   |       |       |       | 28.0. |
|       | er    | [Pyth |       |       |       |       |       | 1500. |
|       | 2006  | onic  |       |       |       |       |       | 95    |
|       |       | gener |       |       |       |       |       |       |
|       |       | ators |       |       |       |       |       |       |
|       |       | ](htt |       |       |       |       |       |       |
|       |       | ps:// |       |       |       |       |       |       |
|       |       | devel |       |       |       |       |       |       |
|       |       | oper. |       |       |       |       |       |       |
|       |       | mozil |       |       |       |       |       |       |
|       |       | la.or |       |       |       |       |       |       |
|       |       | g/en- |       |       |       |       |       |       |
|       |       | US/do |       |       |       |       |       |       |
|       |       | cs/Ja |       |       |       |       |       |       |
|       |       | vaScr |       |       |       |       |       |       |
|       |       | ipt/N |       |       |       |       |       |       |
|       |       | ew_in |       |       |       |       |       |       |
|       |       | _Java |       |       |       |       |       |       |
|       |       | Scrip |       |       |       |       |       |       |
|       |       | t/1.7 |       |       |       |       |       |       |
|       |       | ?redi |       |       |       |       |       |       |
|       |       | rectl |       |       |       |       |       |       |
|       |       | ocale |       |       |       |       |       |       |
|       |       | =en-U |       |       |       |       |       |       |
|       |       | S&red |       |       |       |       |       |       |
|       |       | irect |       |       |       |       |       |       |
|       |       | slug= |       |       |       |       |       |       |
|       |       | New_i |       |       |       |       |       |       |
|       |       | n_Jav |       |       |       |       |       |       |
|       |       | aScri |       |       |       |       |       |       |
|       |       | pt_1. |       |       |       |       |       |       |
|       |       | 7#Gen |       |       |       |       |       |       |
|       |       | erato |       |       |       |       |       |       |
|       |       | rs)   |       |       |       |       |       |       |
|       |       | +     |       |       |       |       |       |       |
|       |       | itera |       |       |       |       |       |       |
|       |       | tors  |       |       |       |       |       |       |
|       |       | + let |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | June  | 1.7 + |       | 3.0   |       | 11.50 |       |       |
|       | 2008  | [gene |       |       |       |       |       |       |
|       |       | rator |       |       |       |       |       |       |
|       |       | expre |       |       |       |       |       |       |
|       |       | ssion |       |       |       |       |       |       |
|       |       | s](ge |       |       |       |       |       |       |
|       |       | nerat |       |       |       |       |       |       |
|       |       | or_(c |       |       |       |       |       |       |
|       |       | omput |       |       |       |       |       |       |
|       |       | er_pr |       |       |       |       |       |       |
|       |       | ogram |       |       |       |       |       |       |
|       |       | ming) |       |       |       |       |       |       |
|       |       |  "wik |       |       |       |       |       |       |
|       |       | ilink |       |       |       |       |       |       |
|       |       | ")    |       |       |       |       |       |       |
|       |       | +     |       |       |       |       |       |       |
|       |       | [expr |       |       |       |       |       |       |
|       |       | essio |       |       |       |       |       |       |
|       |       | n     |       |       |       |       |       |       |
|       |       | closu |       |       |       |       |       |       |
|       |       | res]( |       |       |       |       |       |       |
|       |       | closu |       |       |       |       |       |       |
|       |       | re_(c |       |       |       |       |       |       |
|       |       | omput |       |       |       |       |       |       |
|       |       | er_pr |       |       |       |       |       |       |
|       |       | ogram |       |       |       |       |       |       |
|       |       | ming) |       |       |       |       |       |       |
|       |       |  "wik |       |       |       |       |       |       |
|       |       | ilink |       |       |       |       |       |       |
|       |       | ")    |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       |       | 1.8 + |       | 3.5   |       |       |       |       |
|       |       | [nati |       |       |       |       |       |       |
|       |       | ve    |       |       |       |       |       |       |
|       |       | JSON] |       |       |       |       |       |       |
|       |       | (JSON |       |       |       |       |       |       |
|       |       | #Nati |       |       |       |       |       |       |
|       |       | ve_en |       |       |       |       |       |       |
|       |       | codin |       |       |       |       |       |       |
|       |       | g_and |       |       |       |       |       |       |
|       |       | _deco |       |       |       |       |       |       |
|       |       | ding_ |       |       |       |       |       |       |
|       |       | in_br |       |       |       |       |       |       |
|       |       | owser |       |       |       |       |       |       |
|       |       | s "wi |       |       |       |       |       |       |
|       |       | kilin |       |       |       |       |       |       |
|       |       | k")   |       |       |       |       |       |       |
|       |       | suppo |       |       |       |       |       |       |
|       |       | rt    |       |       |       |       |       |       |
|       |       | +     |       |       |       |       |       |       |
|       |       | minor |       |       |       |       |       |       |
|       |       | updat |       |       |       |       |       |       |
|       |       | es    |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | June  | 1.8.1 |       | 3.6   |       |       |       |       |
|       | 22,   | +     |       |       |       |       |       |       |
|       | 2009  | minor |       |       |       |       |       |       |
|       |       | updat |       |       |       |       |       |       |
|       |       | es    |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+
|       | July  | 1.8.2 |       | 4.0   |       |       |       |       |
|       | 27,   | + new |       |       |       |       |       |       |
|       | 2010  | featu |       |       |       |       |       |       |
|       |       | res   |       |       |       |       |       |       |
|       |       | for   |       |       |       |       |       |       |
|       |       | ECMA- |       |       |       |       |       |       |
|       |       | 262   |       |       |       |       |       |       |
|       |       | 5th   |       |       |       |       |       |       |
|       |       | editi |       |       |       |       |       |       |
|       |       | on    |       |       |       |       |       |       |
|       |       | compl |       |       |       |       |       |       |
|       |       | iance |       |       |       |       |       |       |
+-------+-------+-------+-------+-------+-------+-------+-------+-------+

## Related languages and features

[JSON](JSON "wikilink"), or JavaScript Object Notation, is a general-purpose data interchange format that is defined as a subset of JavaScript's object literal syntax. Like much of JavaScript (regexps and anonymous functions as 1st class elements, closures, flexible classes, 'use strict'), [JSON](JSON "wikilink"), except for replacing [Perl](Perl "wikilink")'s key-value operator '=&gt;' by an [RFC 822](RFC_822 "wikilink")[^92] inspired ':', is syntactically pure Perl.

[jQuery](jQuery "wikilink") is a popular JavaScript library designed to simplify [DOM](Document_Object_Model "wikilink")-oriented client-side HTML scripting along with offering cross-browser compatibility because various browsers respond differently to certain vanilla JavaScript code.

[Underscore.js](Underscore.js "wikilink") is a utility JavaScript library for data manipulation that is used in both client-side and server-side network applications.

[AngularJS](AngularJS "wikilink") is a [web application framework](web_application_framework "wikilink") to use for developing [single-page applications](single-page_applications "wikilink") and also cross-platform mobile apps.

[React (JavaScript library)](React_(JavaScript_library) "wikilink") is an [open-source](open-source "wikilink") JavaScript library providing a views that is rendered using components specified as custom HTML tags.

Mozilla browsers currently support [LiveConnect](LiveConnect "wikilink"), a feature that allows JavaScript and Java to intercommunicate on the Web. However, Mozilla-specific support for LiveConnect is scheduled to be phased out in the future in favor of passing on the LiveConnect handling via [NPAPI](NPAPI "wikilink") to the Java 1.6+ plug-in (not yet supported on the Mac ).[^93] Most browser inspection tools, such as [Firebug](Firebug_(software) "wikilink") in Firefox, include JavaScript interpreters that can act on the visible page's DOM.

[asm.js](asm.js "wikilink") is a subset of JavaScript that can be run in any JavaScript engine or run faster in an [ahead-of-time](ahead-of-time "wikilink") (AOT) compiling engine.[^94]

[JSFuck](JSFuck "wikilink") is an [esoteric programming language](esoteric_programming_language "wikilink"). Programs are written using only six different characters, but are still valid JavaScript code.

p5.js[^95] is an object oriented JavaScript library designed for artists and designers. It is based on the ideas of the [Processing](Processing_(programming_language) "wikilink") project but is for the web.

[jsben.ch](http://jsben.ch) is an online JavaScript benchmarking tool, where different code snippets can be tested against each other.

### Use as an intermediate language

As JavaScript is the most widely supported client-side language that can run within a Web browser, it has become an [intermediate language](intermediate_language "wikilink") for other languages to target. This has included both newly created languages and ports of existing languages. Some of these include:

-   OberonScript, a full implementation of the [Oberon](Oberon_(programming_language) "wikilink") programming language that compiles to high-level JavaScript.[^96]
-   [Objective-J](Objective-J "wikilink"), a superset of JavaScript that compiles to standard JavaScript. It adds traditional inheritance and [Smalltalk](Smalltalk "wikilink")/[Objective-C](Objective-C "wikilink") style dynamic dispatch and optional pseudo-static typing to JavaScript.
-   [Processing.js](Processing.js "wikilink"), a JavaScript port of the Processing programming language designed to write visualizations, images, and interactive content. It allows Web browsers to display animations, visual applications, games and other graphical rich content without the need for a Java applet or Flash plugin.
-   [CoffeeScript](CoffeeScript "wikilink"), an alternate syntax for JavaScript intended to be more concise and readable. It adds features like array comprehensions (also available in JavaScript since version 1.7)[^97] and pattern matching. Like Objective-J, it compiles to JavaScript. Ruby and Python have been cited as influential on CoffeeScript syntax.
-   [Google Web Toolkit](Google_Web_Toolkit "wikilink") translates a subset of Java to JavaScript.
-   [Scala](Scala_(programming_language) "wikilink"), an object-oriented and functional programming language, has a Scala-to-JavaScript compiler.[^98]
-   [Pyjamas](Pyjamas_(software) "wikilink"), a port of [Google Web Toolkit](Google_Web_Toolkit "wikilink") to [Python](Python_(programming_language) "wikilink") translates a subset of Python to JavaScript.
-   [Dart](Dart_(programming_language) "wikilink"), an open-source programming language developed by Google, can be compiled to JavaScript.
-   Whalesong,[^99] a [Racket](Racket_(programming_language) "wikilink")-to-JavaScript compiler.
-   [Emscripten](Emscripten "wikilink"), a [LLVM](LLVM "wikilink")-backend for porting native libraries to JavaScript.
-   [Fantom](Fantom_(programming_language) "wikilink") a programming language that runs on JVM, .NET and JavaScript.
-   [TypeScript](TypeScript "wikilink"), a free and open-source programming language developed by Microsoft. It is a superset of JavaScript, and essentially adds optional static typing and class-based object-oriented programming to the language.
-   [Haxe](Haxe "wikilink"), an open-source high-level multiplatform programming language and compiler that can produce applications and source code for many different platforms including JavaScript.
-   ClojureScript,[^100] a compiler for [Clojure](Clojure "wikilink") that targets JavaScript. It is designed to emit JavaScript code that is compatible with the advanced compilation mode of the Google Closure optimizing compiler.
-   [Kotlin](Kotlin_(programming_language) "wikilink"), a [statically-typed](Type_system#Static_type-checking "wikilink") language that also compiles to [Java byte code](Java_byte_code "wikilink").
-   [SqueakJS](https://bertfreudenberg.github.io/SqueakJS/), a virtual machine and DOM environment for the open-source [Squeak](Squeak "wikilink") implementation of the [Smalltalk](Smalltalk "wikilink") programming language.

As JavaScript has unusual limitations – such as no separate integer type, using floating point – languages that compile to JavaScript commonly have slightly different behavior than in other environments.

### JavaScript and Java

A common misconception is that JavaScript is similar or closely related to [Java](Java_(programming_language) "wikilink"). It is true that both have a C-like syntax (the C language being their most immediate common ancestor language). They also are both typically [sandboxed](Sandbox_(computer_security) "wikilink") (when used inside a browser), and JavaScript was designed with Java's syntax and standard library in mind. In particular, all Java keywords were reserved in original JavaScript, JavaScript's standard library follows Java's naming conventions, and JavaScript's Math and Date objects are based on classes from Java 1.0,[^101] but the similarities end there.

[Java](Java_(programming_language) "wikilink") and JavaScript both first appeared on 23 May 1995, but Java was developed by James Gosling of Sun Microsystems, and JavaScript by Brendan Eich of NetScape Communications.

The differences between the two languages are more prominent than their similarities. Java has [static typing](static_typing "wikilink"), while JavaScript's typing is [dynamic](Dynamic_typing "wikilink"). Java is loaded from compiled bytecode, while JavaScript is loaded as human-readable source code. Java's objects are [class-based](Class-based_programming "wikilink"), while JavaScript's are [prototype-based](Prototype-based_programming "wikilink"). Finally, Java did not support [functional programming](functional_programming "wikilink") until Java 8, while JavaScript has done so from the beginning, being influenced by [Scheme](Scheme_(programming_language) "wikilink").

## References

## Further reading

-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   

## External links

-   [Douglas Crockford](Douglas_Crockford "wikilink")'s [video lectures on JavaScript](https://www.youtube.com/playlist?list=PL62E185BB8577B63D)
-   Douglas Crockford's [A Survey of the JavaScript Programming Language](http://javascript.crockford.com/survey.html)
-   -   [List of languages that compile to JS](https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS/)

[Category:1995 introductions](Category:1995_introductions "wikilink") [Category:American inventions](Category:American_inventions "wikilink") [Category:Articles with example JavaScript code](Category:Articles_with_example_JavaScript_code "wikilink") [Category:Cross-platform software](Category:Cross-platform_software "wikilink") [Category:Dynamically typed programming languages](Category:Dynamically_typed_programming_languages "wikilink") [Category:Functional languages](Category:Functional_languages "wikilink") [ ](Category:JavaScript "wikilink") [Category:Object-based programming languages](Category:Object-based_programming_languages "wikilink") [Category:Programming languages created in 1995](Category:Programming_languages_created_in_1995 "wikilink") [Category:Programming languages with an ISO standard](Category:Programming_languages_with_an_ISO_standard "wikilink") [Category:Prototype-based programming languages](Category:Prototype-based_programming_languages "wikilink") [Category:Scripting languages](Category:Scripting_languages "wikilink") [Category:Web programming](Category:Web_programming "wikilink")

[^1]: 

[^2]: 

[^3]: 

[^4]: 

[^5]: [Press release announcing JavaScript](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html), "Netscape and Sun announce JavaScript", PR Newswire, December 4, 1995

[^6]: 

[^7]: 

[^8]: 

[^9]: 

[^10]: 

[^11]: 

[^12]: 

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

[^26]: [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

[^27]: 

[^28]: 

[^29]: 

[^30]: 

[^31]: 

[^32]: 

[^33]: [The many talents of JavaScript for generalizing Role-Oriented Programming approaches like Traits and Mixins](http://peterseliger.blogspot.de/2014/04/the-many-talents-of-javascript.html#the-many-talents-of-javascript-for-generalizing-role-oriented-programming-approaches-like-traits-and-mixins), April 11, 2014.

[^34]: [Traits for JavaScript](http://soft.vub.ac.be/~tvcutsem/traitsjs/), 2010.

[^35]: [CocktailJS – ANNOTATIONS. TRAITS. TALENTS.](http://cocktailjs.github.io/), April 2013.

[^36]: Angus Croll, [A fresh look at JavaScript Mixins](http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/), published May 31, 2011.

[^37]: 

[^38]: 

[^39]: Robert Nyman, [Getters And Setters With JavaScript – Code Samples And Demos](http://robertnyman.com/2009/05/28/getters-and-setters-with-javascript-code-samples-and-demos/), published 29 May 2009, accessed 2 January 2010.

[^40]: John Resig, [JavaScript Getters and Setters](http://ejohn.org/blog/javascript-getters-and-setters/), 18 July 2007, accessed 2 January 2010

[^41]: 

[^42]: 

[^43]: 

[^44]: 

[^45]: 

[^46]: 

[^47]: 

[^48]: Peter-Paul Koch, [Object detection](http://www.quirksmode.org/js/support.html)

[^49]: Peter-Paul Koch, [Mission Impossible – mouse position](http://www.evolt.org/node/23335)

[^50]: Peter-Paul Koch, [Browser detect](http://www.quirksmode.org/js/detect.html)

[^51]: 

[^52]: 

[^53]: MozillaZine, [Mozilla Cross-Site Scripting Vulnerability Reported and Fixed](http://www.mozillazine.org/talkback.html?article=4392)

[^54]: 

[^55]: Mozilla Corporation, [Buffer overflow in crypto.signText()](http://www.mozilla.org/security/announce/2006/mfsa2006-38.html)

[^56]: 

[^57]: SecurityTracker.com, [Apple Safari JavaScript Buffer Overflow Lets Remote Users Execute Arbitrary Code and HTTP Redirect Bug Lets Remote Users Access Files](http://securitytracker.com/alerts/2006/Mar/1015713.html)

[^58]: SecurityFocus, [Microsoft WebViewFolderIcon ActiveX Control Buffer Overflow Vulnerability](http://www.securityfocus.com/bid/19030/info)

[^59]: Fusion Authority, [Macromedia Flash ActiveX Buffer Overflow](http://www.fusionauthority.com/security/3234-macromedia-flash-activex-buffer-overflow.htm)

[^60]: Mike Friedman, [Protected Mode in Vista IE7](http://blogs.msdn.com/ie/archive/2006/02/09/528963.aspx)

[^61]: US CERT, [Vulnerability Note VU\#713878: Microsoft Internet Explorer does not properly validate source of redirected frame](https://www.kb.cert.org/vuls/id/713878)

[^62]: Mozilla Foundation, [Mozilla Foundation Security Advisory 2005–41: Privilege escalation via DOM property overrides](http://www.mozilla.org/security/announce/2005/mfsa2005-41.html)

[^63]: Microsoft Corporation, [Changes to Functionality in Microsoft Windows XP Service Pack 2: Part 5: Enhanced Browsing Security](http://technet.microsoft.com/en-us/library/bb457150.aspx#EHAA)

[^64]: For one example of a rare JavaScript Trojan Horse, see Symantec Corporation, [JS.Seeker.K](http://www.symantec.com/security_response/writeup.jsp?docid=2003-100111-0931-99)

[^65]: 

[^66]: 

[^67]: 

[^68]: THINK! The Maxwell Render Resourcer Center, [Scripting References](http://think.maxwellrender.com/scripting_references-269.html)

[^69]: [Google Apps Script](Google_Apps_Script "wikilink"), [Google Apps Script](https://www.google.com/script/start/)

[^70]: 

[^71]: 

[^72]: 

[^73]: 

[^74]: 

[^75]: Nokia Corporation, [QtScript Module](http://doc.qt.nokia.com/4.6/qtscript.html)

[^76]: [Open Scripting Architecture](Open_Scripting_Architecture "wikilink")

[^77]: 

[^78]: 

[^79]: 

[^80]: 

[^81]: 

[^82]: 

[^83]: [JScript development in Microsoft Office 11](http://msdn2.microsoft.com/en-us/library/aa202668(office.11).aspx) (MS InfoPath 2003)

[^84]: 

[^85]: 

[^86]: 

[^87]: 

[^88]: 

[^89]: 

[^90]: [History of the Opera web browser\#Version 3](History_of_the_Opera_web_browser#Version_3 "wikilink")

[^91]: 

[^92]: 

[^93]: [Release Notes for the Next-Generation Java™ Plug-In Technology (introduced in Java SE 6 update 10)](http://java.sun.com/javase/6/webnotes/6u10/plugin2/liveconnect/). Java.sun.com. Retrieved on 2013-06-13.

[^94]: 

[^95]: 

[^96]: 

[^97]: 

[^98]: 

[^99]: 

[^100]: 

[^101]: 
