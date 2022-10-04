import React, { useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      id
      name
      yearOfPublication
    }
  }
`;

const DisplayData = () => {
  const [movieSearched, setMovieSearched] = useState();
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
  const [
    fetchMovie,
    { data: movieSearchedData, error: movieError },
  ] = useLazyQuery(GET_MOVIE_BY_NAME);

  if (loading) {
    return <h1>Data is Loading...</h1>;
  }

  if (data) {
    // console.log(data);
  }

  if (error) {
    console.log(error);
  }

  if (movieError) {
    console.log(movieError);
  }

  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Nationality: {user.nationallity}</h1>
            </div>
          );
        })}

      <hr />
      {movieData &&
        movieData.movies.map((movie) => {
          return <h1>Movie Name: {movie.name}</h1>;
        })}
      <div>
        <input
          type="text"
          placeholder="Interstellar..."
          onChange={(e) => setMovieSearched(e.target.value)}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          Fetch Data
        </button>
        <div>
          {movieSearchedData && (
            <div>
              <h1>Movie Name: {movieSearchedData.movie.name}</h1>
              <h1>
                Movie Year of Publication:{" "}
                {movieSearchedData.movie.yearOfPublication}
              </h1>
            </div>
          )}
          {movieError && <h1>There was an error when fetching the data...</h1>}
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
