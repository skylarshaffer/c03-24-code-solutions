select *
  from "films"
 where "rentalRate" < '1'
order by "rentalRate" asc
limit 50;
