// Create a movie object with some details about the movie
var movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    rating: 8.8,

    // This method changes the movie's rating and shows an alert
    updateRating: function (newRating) {
        this.rating = newRating;
        alert("The new rating for " + this.title + " is " + this.rating);
    }
};

// Show the original movie details in the console
console.log("Original movie object:", movie);

// Ask the user for a new movie title and update if they give one
var newTitle = prompt("Enter the new title for the movie (current: " + movie.title + "):", movie.title);
if (newTitle) {
    movie.title = newTitle;
}

// Ask for a new director and update if provided
var newDirector = prompt("Enter the new director for the movie (current: " + movie.director + "):", movie.director);
if (newDirector) {
    movie.director = newDirector;
}

// Ask for a new rating and update it by calling the method
var newRating = prompt("Enter the new rating for the movie (current: " + movie.rating + "):", movie.rating);
if (newRating) {
    movie.updateRating(newRating);
}

// Show the updated movie details in the console
console.log("Updated movie object:", movie);
