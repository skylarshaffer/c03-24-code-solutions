select "countries"."name",
       count(*) as "totalCities"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId"
