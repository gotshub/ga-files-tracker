GA files tracker
================

This script adds the google analytics tracking code to links to external sites and to file downloads.

Usage
-----

* Add the javascript file to your header like here:

    &lt;html&gt;
    &lt;head&gt;
    ...
    &lt;script type="text/javascript" src="gafiles.js"&gt;&lt;/script&gt;
    ...
    &lt;/head&gt;

* Then add the function call to the onload attribute of your body tag.

    ...
    &lt;body onload="trackgafiles()"&gt;
    ...

