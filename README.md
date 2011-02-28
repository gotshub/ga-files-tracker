GA files tracker
================

This script adds the google analytics tracking code to links to external sites and to file downloads.

Usage
-----

* Add the javascript file to your header like here:
`<html>
<head>
...
<script type="text/javascript" src="gafiles.js"></script>
...
</head>`
* Then add the function call to the onload attribute of your body tag.
`...
<body onload="trackgafiles()">
...`
