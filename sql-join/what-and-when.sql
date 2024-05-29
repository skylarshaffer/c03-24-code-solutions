select "films"."releaseYear", "genres"."name" as "genreName"
  from "films"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie'
