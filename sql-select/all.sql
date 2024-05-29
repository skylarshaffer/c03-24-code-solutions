actor-forty.sql

select *
  from "actors"
 where "actorId = 40"


Get all columns for the actor with the actorId of 40.

Hint: The actor's name should be 'Johnny Cage'.

two-kilmers.sql

Get the actorId and firstName of only two actors with the lastName of 'Kilmer'.

all-genres.sql

Get all columns of all rows in the genres table.

second-store-customers.sql

Get the email of all customers that are registered at the DVD store with the storeId of 2.

twenty-films-of-06.sql

Get the title, description, and releaseYear of 20 films released in 2006.

r-rated-films.sql

Get the filmId, title, description, and length, of all R-rated films.

expensive-films.sql

Get the 10 films with the highest replacementCost.

cheap-to-rent.sql

Get the filmId and title of 50 films that cost less than 1 dollar to rent. (Tip: Use psql -d pagila -c "select * from films" to find the column that has the rental rate.)
