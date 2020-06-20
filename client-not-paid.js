(function() {
	const website_url = document.location.host;
	const websites = ["gloross-test"];
	const message = "Please pay us at www.gloross.com";
	websites.forEach(site => {
		if(website_url.indexOf(site) != -1) {
			const body = document.getElementById("body");
			body.innerHTML(`<p>${ message }</p>`);	
		}
	});
}());