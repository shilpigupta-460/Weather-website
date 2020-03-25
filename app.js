window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long);
            console.log(position);
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/fa67d62f5c57de09c215b732b9ac84b3/${lat},${long}`;

            fetch(api)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    document.querySelector(".temp_description").innerHTML = `
                        ${data.currently.summary}  `;
                    document.querySelector(".icon").textContent = data.currently.icon;
                    document.querySelector(
                        ".temperature_degree"
                    ).innerHTML = `${data.currently.temperature} F`;
                    console.log(`Request successful ${data.currently.temperature}`);
                })
                .catch(function(error) {
                    console.log("Request failed", error);
                });

            //Fetch API with Arrow function
            // fetch(api)
            // {
            //     .then(response => {
            //         return response.json();
            //     })

            // .then(data => {
            //     console.log(data);
            // });}
        });
    }

    function iconToday() {
        const spanIcon = document.querySelector(".icon").innerHTML;
        const icon = data.currently.icon;
        switch (icon) {
            case "clear-day":
                spanIcon = `<i class="wi wi-day-sunny"></i>`;
                break;
            case "clear-night":
                spanIcon = `<i class="wi wi-night-clear"></i>`;
                break;
            case "rain":
                spanIcon = `<i class="wi wi-rain"></i>`;
                break;
            case "snow":
                spanIcon = `<i class="wi-snowflake-cold"></i>`;
                break;

            case "sleet":
                spanIcon = `<i class="wi wi-day-sunny"></i>`;
                break;

            case "partly-cloudy-day":
                spanIcon = `<i class="wi wi-day-cloudy"></i>`;
                break;
            case "partly-cloudy-night":
                spanIcon = `<i class="wi wi-night-alt-cloudy"></i>`;
                break;
            case "wind":
                spanIcon = `<i class="wi wi-cloudy-gusts"></i>`;
                break;
            case "fog":
                spanIcon = `<i class="wi wi-day-sunny"></i>`;
                break;
        }
    }
});

/*function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        }

        function geoSuccess(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          alert("lat:" + lat + " lng:" + lng);
          codeLatLng(lat, lng);
        }
        function geoError() {
          alert("Geocoder failed.");
        }
        var geocoder;
        function initialize() {
          geocoder = new google.maps.Geocoder();
        }

        function codeLatLng(lat, lng) {
          var latlng = new google.maps.LatLng(lat, lng);
          geocoder.geocode({ latLng: latlng }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log(results);
              if (results[1]) {
                //formatted address
                var address = results[0].formatted_address;
                alert("address = " + address);
              } else {
                alert("No results found");
              }
            } else {
              alert("Geocoder failed due to: " + status);
            }
          });
        }*/