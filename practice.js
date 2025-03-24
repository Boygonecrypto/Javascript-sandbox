const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible 1", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little Miss forest", director: "John Doe", rating: 4.1 },
  { id: 4, title: "Mission Impossible 2", director: "Tom Cruise", rating: 4.4 },
];

//get movies rated 4.0 and above

let moviesRatedAbove4 = movies.filter((movie) => movie.rating >= 4);
console.log(moviesRatedAbove4);

// get me movies directed by tom cruise

let moviesDirectedByTomCruise = movies.filter(
  (movie) => movie.director.toLowerCase() == "TOM CRUISE".toLowerCase()
);
console.log(moviesDirectedByTomCruise);

// get the movie that has an id of 3

const movieWithId3 = movies.find((movie) => movie.id === 3);
console.log(movieWithId3);

// get movies that are rated less than 4

let moviesRatedLessThan4 = movies.filter((movie) => movie.rating < 4);
console.log(moviesRatedLessThan4);

//write a function searchMovie that takes a searchTerm as a parameter
//return the movie if it is in the array and returns no movie found if the
// searchTerm is not in the array

const searchMovie = (searchTerm) => {
  const convertedSearchTerm = searchTerm.toLowerCase();
  const search = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(convertedSearchTerm);
  });
  if (search.length > 0) {
    return search;
  } else {
    return "No movies Found";
  }
};

console.log(searchMovie("hell boy"));

//hell boy
