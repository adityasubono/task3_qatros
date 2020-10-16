# task3_qatros

1. run npm install
2. config database at config.json
3. run sequelize db:migrate
4. Use postman to hit the service


ROUTE SERVICE: 
1. get all items => localhost:8080/api/item ( use GET method )
2. get items by code or name => localhost:8080/api/item/(code/name use GET method) 
3. get single item by code => localhost:8080/api/item/code (use GET method )
4. create new item (duplicate validation based on name will be required) => localhost:8080/api/item ( use POST method ) 
   with JSON body example :
   {
    "name": "bis",
    "description": "this is bis"
   }
5. update existing item by code => localhost:8080/api/item/code ( use PUT method ) 
   with params code, and JSON body example :
   {
    "name": "bis",
    "description": "this is bis"
   }
6. delete item by code =>  localhost:8080/api/item/code ( use DELETE method )
