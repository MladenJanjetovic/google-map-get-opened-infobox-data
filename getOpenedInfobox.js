javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')

function getOpenedInfobox(){
	var address = jQuery('#map-infowindow-attr-description-container').next().children(':eq(2)').text();

	var web = jQuery('#map-infowindow-attr-description-container').next().children(':eq(3)').text();

	var tel = jQuery('#map-infowindow-attr-description-container').next().children(':eq(4)').text();

	var coords = jQuery('#infowindow-measurements').first().text().split(', ');

	var title = jQuery('#map-infowindow-attr-name-value').text();

	return '\n{\n\ttitle: "'+title+'",\n\taddress: "'+address+'",\n\tclassName: "",\n\twebSite: "'+web+'",\n\ttel: "'+tel+'",\n\tlatLng: {lat: '+coords[0]+', lng: '+coords[1]+'},\n\ticon: "images/marker-logo.png"\n}\n';
}