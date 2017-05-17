## **Initialization**

npm install  &  run

## **exsmple**

tools:restlet client （chrome plugin）

## **request **

### **list  **

url: [http://localhost:3009/api/rest/tableInfo](http://localhost:3009/api/rest/tableInfo)

method:get

### new

url:[http://localhost:3009/api/rest/tableInfo](http://localhost:3009/api/rest/tableInfo)

method:post

params:{field1:xx,field2:xx.....}

### findOne

url:[http://localhost:3009/api/rest/tableInfo/:id](http://localhost:3009/api/rest/tableInfo/:id)

method:get

### upsertOne

url:[http://localhost:3009/api/rest/tableInfo/:id](http://localhost:3009/api/rest/tableInfo/:id)

method:put

params:{field1:xx,field2:xx.....}

### deleteById

url:[http://localhost:3009/api/rest/tableInfo/:id](http://localhost:3009/api/rest/tableInfo/:id)

method:delete



return json

{ status :num\|\| 200 \|\| 500\|\| 404\|\|...,msg:string\|\|"",result:Array \|\| Entity \|\| {}}



