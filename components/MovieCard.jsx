import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const BASE_URL = "https://image.tmdb.org/t/p/original/";
const MovieCard = forwardRef(({ movie }, ref) => {
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_title}
        height={1000}
        width={1920}
      />
      <div className="p-2 group-hover:text-white ">
        <p className="truncate max-w-md ">{movie.overview}</p>
        <h2 className="ml-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type}`}{" "}
          {movie.release_date || movie.first_air_date}{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

MovieCard.displayName = "MovieCard";

export default MovieCard;
