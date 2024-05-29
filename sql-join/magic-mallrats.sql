select "customers"."firstName", "customers"."lastName"
  from "films"
  join "rentals" on "rentals"."rentalId" = "films"."filmId"
  join "customers" using ("customerId")
  where "films"."title" = 'Magic Mallrats'
