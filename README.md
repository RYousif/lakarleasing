program som konsumerar ett web-api. Programmet ska lista användare, när man väljer en användare ska programmet hämta all information om den specifika användaren och presentera det. Api server kräver att en api key skickas med i headers med namnet x-api-key.

Hur programmet visar resultaten är upp till dig (kan vara en console application eller websida)

Teknisk information:

Api url: https://testing.euw.istaffsystems.com

Api Key: b2ac60d8-6e21-41b1-980f-33ec13134ed0

Paths: 

•	GET /users

Kommer retunera alla befinntliga users i json formatet:

[ { ”id”: int, ”name”: string } ]

ex. GET http://testing.istaffsystems.com/users kommer retunera en array med simpelt user format


•	GET /user/:id

Kommer returnera user med specificerat id i json formatet

{  ”id”: int, ”firstname”: string, ”lastname”: string, ”email”: string }

Om du skickar ett id som inte finns kommer ett 404 retuneras


Ex. GET http://testing.istaffsystems.com/user/3 kommer retunera user med id 3
