function generateRoute() {
    var locations = [
      "Palace of Peace and Reconciliation",
      "Khan Shatyr Entertainment Center",
      "Astana Opera",
      "Bayterek Tower",
      "Astana Central Park",
      "National Museum of the Republic of Kazakhstan",
      "Astana Ballet Theatre"
    ];
    
    var route = [];
    
    while (locations.length > 0) {
      var randomIndex = Math.floor(Math.random() * locations.length);
      var location = locations[randomIndex];
      route.push(location);
      locations.splice(randomIndex, 1);
    }
    
    return route;
  }
  
  var interestingRoute = generateRoute();
  console.log("Interesting Route:", interestingRoute);

  function generateRoute() {
    var locations = [
      { name: "Palace of Peace and Reconciliation", description: "A unique and impressive building located in the heart of Astana, the Palace of Peace and Reconciliation is a symbol of unity and peace. It has a concert hall and conference rooms and serves as a center for international and inter-religious dialogue." },
      { name: "Khan Shatyr Entertainment Center", description: "An iconic landmark of Astana, the Khan Shatyr Entertainment Center is a huge tent-shaped building that offers a range of entertainment options, including shopping, dining, and entertainment facilities." },
      { name: "Astana Opera", description: "One of the largest and most modern opera theaters in Central Asia, the Astana Opera is a stunning building that offers a variety of classical and contemporary performances and events." },
      { name: "Bayterek Tower", description: "An iconic symbol of Astana, the Bayterek Tower is a 97-meter tall structure that provides panoramic views of the city and houses a museum and observation deck." },
      { name: "Astana Central Park", description: "A popular gathering place for residents and visitors, Astana Central Park offers a range of recreational activities and stunning landscaped gardens and fountains." },
      { name: "National Museum of the Republic of Kazakhstan", description: "A fascinating museum that showcases the rich history and culture of Kazakhstan, the National Museum of the Republic of Kazakhstan offers a range of exhibits and interactive displays on the country's heritage and traditions." },
      { name: "Astana Ballet Theatre", description: "A world-class theater that presents a range of ballet performances, the Astana Ballet Theatre is a stunning building that offers an unforgettable cultural experience for visitors." }
    ];
    
    var route = [];
    
    while (locations.length > 0) {
      var randomIndex = Math.floor(Math.random() * locations.length);
      var location = locations[randomIndex];
      route.push(location);
      locations.splice(randomIndex, 1);
    }
    
    var html = "";
    
    route.forEach(function(location) {
      html += "<h3>" + location.name + "</h3><p>" + location.description + "</p>";
    });
    
    return html;
  }
  
  var interestingRoute = generateRoute();
  document.body.innerHTML = interestingRoute;
  
