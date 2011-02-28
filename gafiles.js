/****************************************************
     Author: Brian J Clifton
     Url: http://www.advanced-web-metrics.com/scripts
     This script is free to use as long as this info is left in
     
     Combined script for tracking external links, file downloads and mailto links
     
     All scripts presented have been tested and validated by the author and are believed to be correct
     as of the date of publication or posting. The Google Analytics software on which they depend is 
     subject to change, however; and therefore no warranty is expressed or implied that they will
     work as described in the future. Always check the most current Google Analytics documentation.

     Thanks to Nick Mikailovski (Google) for intitial discussions & Holger Tempel from webalytics.de
     for pointing out the original flaw of doing this in IE.

     ***********

     Extended by gtathub
     Extended with asynchronous GA script and bug fixes
     
     Url: https://github.com/gtathub/ga-files-tracker
     
     Usage:
     Insert this into your body tag: <body onload="trackgafiles()">
     
****************************************************/
// Only links written to the page (already in the DOM) will be tagged

function trackgafiles() {
	var as = document.getElementsByTagName("a");
	var extTrack = ["brianjclifton.com","kampyle.com"];
	// List of local sites that should not be treated as an outbound link. Include at least your own domain here
	
	var extDoc = [".doc",".xls",".exe",".zip",".pdf",".js"];

        //List of file extensions on your site. Add/edit as you require
	
	/*If you edit no further below this line, Top Content will report as follows:
		/ext/url-of-external-site
		/downloads/filename
		/mailto/email-address-clicked
	*/
	
	for(var i=0; i<as.length; i++) {
		var flag = 0;
		var tmp = as[i].getAttribute("onclick");

                // Tracking outbound links off site
		for (var j=0; j<extTrack.length; j++) {					
			if (as[i].href.indexOf(extTrack[j]) == -1) {
				flag++;
			}
		}
		
		if (flag != extTrack.length && as[i].href.indexOf("mailto:") == -1){
			as[i].onclick = function() {
                            var splitResult = this.href.split("//");
                            _gaq.push(['_trackPageview', '/ext/' +splitResult[1]]);
                        };
		}			

		// Tracking electronic documents - doc, xls, pdf, exe, zip
		for (var j=0; j<extDoc.length; j++) {
			if (flag == extTrack.length && as[i].href.indexOf(extDoc[j]) != -1) {
				as[i].onclick = function() {
                                    var splitResult = this.href.split(window.location.host + "/");
                                    _gaq.push(['_trackPageview', '/downloads/' + splitResult[1]]);
                                }
				break;
			}
		}


		// added to track mailto links 23-Oct-2007
		// updated 31-Oct-2008 to remove break command - thanks to Victor Geerdink for spotting this
		if (as[i].href.indexOf("mailto:") != -1) {
			as[i].onclick = function() {
                            var splitResult = this.href.split(":");
                            _gaq.push(['_trackPageview', '/mailto/' +splitResult[1]]);
                        }
		}
	}
}

