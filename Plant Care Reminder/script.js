// Get references to the important parts of the page
var addPlantBtn = document.getElementById("add-plant-btn");
var addPlantScreen = document.getElementById("add-plant-screen");
var initialScreen = document.getElementById("initial-screen");
var addPlantForm = document.getElementById("add-plant-form");
var plantList = document.getElementById("plant-list");
var weatherStatus = document.getElementById("weather-status");
var weatherComment = document.getElementById("weather-comment");
var timeline = document.getElementById("timeline");

// Function to get current weather info (from OpenWeather API)
var fetchWeather = function() {
  var apiKey = "e6656fae63b58b11c2e6af775e93ef98";
  var city = "Toronto";
  var unit = "metric"; // Using metric system for temperature
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&appid=" + apiKey;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.cod === 200) {
        // Show weather details
        var weather = data.weather[0].description;
        var temp = Math.round(data.main.temp);
        weatherStatus.textContent = weather.charAt(0).toUpperCase() + weather.slice(1) + ", " + temp + "°C";
        weatherComment.textContent = weather.includes("rain")
          ? "No need to water your plants today!"
          : "Perfect day for watering your indoor plants!";
      } else {
        // Handle cases when weather data isn't available
        weatherStatus.textContent = "Weather data unavailable.";
        weatherComment.textContent = "Unable to determine if plants need watering.";
      }
    })
    .catch(function(error) {
      // If there's an error in fetching the data
      console.error("Error fetching weather data:", error);
      weatherStatus.textContent = "Failed to load weather data.";
      weatherComment.textContent = "Check your internet connection.";
    });
};

// Function to update the plant care timeline
var renderTimeline = function() {
  var plants = JSON.parse(localStorage.getItem("plants")) || [];
  timeline.innerHTML = "<h2>Plant Care Timeline</h2>";

  plants.forEach(function(plant) {
    var lastWatered = plant.lastWatered || "Never";
    var daysSince = calculateDaysSince(lastWatered);
    var progress = document.createElement("div");
    progress.classList.add("timeline-item");
    progress.innerHTML = `
      <p>${plant.name} - Last Watered: ${lastWatered}</p>
      <progress value="${daysSince}" max="${plant.wateringDays}"></progress>
    `;
    timeline.appendChild(progress);
  });
};

// Helper to calculate how many days since last watered
var calculateDaysSince = function(date) {
  if (!date) return 0; // If no date, return 0
  var lastWatered = new Date(date);
  var today = new Date();
  return Math.floor((today - lastWatered) / (1000 * 60 * 60 * 24));
};

// Save plant details from the form to localStorage
var savePlant = function(e) {
  e.preventDefault();
  var photoInput = document.getElementById("plant-photo").files[0];
  var name = document.getElementById("plant-name").value;
  var type = document.getElementById("plant-type").value;
  var wateringDays = document.getElementById("watering-schedule").value;
  var customReminder = document.getElementById("custom-reminder").value;

  var reader = new FileReader();
  reader.onload = function() {
    var plants = JSON.parse(localStorage.getItem("plants")) || [];
    var newPlant = {
      id: Date.now(),
      photo: reader.result, // Save image as base64
      name: name,
      type: type,
      wateringDays: wateringDays,
      customReminder: customReminder,
      lastWatered: null
    };
    plants.push(newPlant);
    localStorage.setItem("plants", JSON.stringify(plants));
    loadPlants();
    renderTimeline();
    addPlantForm.reset(); // Clear the form
    toggleScreen(); // Go back to main screen
  };
  reader.readAsDataURL(photoInput); // Convert photo to base64
};

// Load saved plants from localStorage and display them
var loadPlants = function() {
  var plants = JSON.parse(localStorage.getItem("plants")) || [];
  plantList.innerHTML = plants.map(function(plant) {
    return `
      <div class="plant-card">
        <img src="${plant.photo}" alt="${plant.name}">
        <h3>${plant.name}</h3>
        <p>Type: ${plant.type}</p>
        <p>Watering: Every ${plant.wateringDays} days</p>
        <p>Reminder: ${plant.customReminder || "None"}</p>
        <p>Last Watered: ${plant.lastWatered || "Not Watered Yet"}</p>
        <button class="water-btn" data-id="${plant.id}">Water</button>
        <button class="delete-btn" data-id="${plant.id}">Delete</button>
      </div>
    `;
  }).join("");

  var waterButtons = document.querySelectorAll('.water-btn');
  waterButtons.forEach(function(button) {
    button.addEventListener('click', waterPlant);
  });

  var deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', deletePlant);
  });
};

// Mark a plant as watered
var waterPlant = function(e) {
  var plantId = e.target.getAttribute("data-id");
  var plants = JSON.parse(localStorage.getItem("plants")) || [];
  var updatedPlants = plants.map(function(plant) {
    if (plant.id == plantId) {
      plant.lastWatered = new Date().toLocaleDateString(); // Update the last watered date
    }
    return plant;
  });

  localStorage.setItem("plants", JSON.stringify(updatedPlants));
  loadPlants();
  renderTimeline();
};

// Delete a plant
var deletePlant = function(e) {
  var plantId = e.target.getAttribute("data-id");

  if (confirm("Are you sure you want to delete this plant?")) {
    var plants = JSON.parse(localStorage.getItem("plants")) || [];
    var updatedPlants = plants.filter(function(plant) {
      return plant.id != plantId;
    });
    localStorage.setItem("plants", JSON.stringify(updatedPlants));
    loadPlants();
    renderTimeline();
  }
};

// Array of tips to help take care of plants
var careTips = [
  "Ensure your plant gets enough indirect sunlight.",
  "Water your plant only when the topsoil is dry.",
  // Add more tips...
];

// Show a random care tip for a random plant
var displayCareTip = function() {
  var plants = JSON.parse(localStorage.getItem("plants")) || [];
  if (plants.length === 0) {
    alert("No plants added yet! Please add a plant to get care tips.");
    return;
  }

  var randomPlant = plants[Math.floor(Math.random() * plants.length)];
  var randomTip = careTips[Math.floor(Math.random() * careTips.length)];
  alert("Care Tip for " + randomPlant.name + ": " + randomTip);
};

// Button to show care tips
var careTipsBtn = document.getElementById("care-tips-btn");
if (careTipsBtn) {
  careTipsBtn.addEventListener("click", displayCareTip);
}

// Switch between screens
var toggleScreen = function() {
  addPlantScreen.classList.toggle("hidden");
  initialScreen.classList.toggle("hidden");
};

// Event listeners for initial actions
addPlantBtn.addEventListener("click", toggleScreen);
addPlantForm.addEventListener("submit", savePlant);

// Load everything when the page loads
fetchWeather();
loadPlants();
renderTimeline();
