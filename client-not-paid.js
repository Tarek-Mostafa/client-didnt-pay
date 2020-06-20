(function() {
  const currentWebsiteURL = document.location.host;
  const clients = [
    { 
      website_url: "rgteststore2", 
      payment_url: "https://gloross.com/collections/featured-tasks/products/add-zoom-to-product-images" 
    }
  ];
  
  clients.forEach(client => {
    if(currentWebsiteURL.indexOf(client.website_url) != -1) {
      setTimeout(function() {
        document.write(`<div style="font-size: 24px;">
						  Please pay us at 
						  <a href='${ client.payment_url }'>www.gloross.com</a>
						<div>`);
      }, 2000);
    }
  });
}());
