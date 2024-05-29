select "customers"."firstName", "customers"."lastName",
       sum("payments"."amount" ) as "totalPayments"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "totalPayments" desc
