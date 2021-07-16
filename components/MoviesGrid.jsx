import MovieCard from "./MovieCard";

function MoviesGrid({ results }) {
  return (
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center ">
      {results.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MoviesGrid;
