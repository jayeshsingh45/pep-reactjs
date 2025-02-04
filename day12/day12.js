const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
  ];
  
  for (let i = 0; i < movies.length - 1; i++) {
    for (let j = i + 1; j < movies.length; j++) {
      if (movies[i].rating < movies[j].rating) {
        let temp = movies[i];
        movies[i] = movies[j];
        movies[j] = temp;
      }
    }
  }
  console.log("Sorted by Rating:", movies);
  
  function findMovieByTitle(title) {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title.toLowerCase() === title.toLowerCase()) {
        return movies[i];
      }
    }
    return "Movie not found in the catalog";
  }
  console.log(findMovieByTitle('Inception'));
  
  let highRatedMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating > 8) {
      highRatedMovies.push(movies[i]);
    }
  }
  console.log("Movies with rating > 8:", highRatedMovies);
  
  let movieTitles = [];
  for (let i = 0; i < movies.length; i++) {
    movieTitles.push(movies[i].title);
  }
  console.log("All Movie Titles:", movieTitles);
  
  function countMoviesByGenre(genre) {
    let count = 0;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].genre.toLowerCase() === genre.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  console.log("Number of Sci-Fi movies:", countMoviesByGenre('Sci-Fi'));
  
  let allMoviesAbove7 = true;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating <= 7) {
      allMoviesAbove7 = false;
      break;
    }
  }
  console.log("Are all movies rated above 7?", allMoviesAbove7);
  
  let moviesAfter2000 = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].releaseYear > 2000) {
      moviesAfter2000.push(movies[i]);
    }
  }
  console.log("Movies released after 2000:", moviesAfter2000);
  