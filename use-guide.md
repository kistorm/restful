## **Initialization**

npm install  &  run

## **exsmple**

tools:restlet client （chrome plugin）

method:list、new、findOne、upsertOne、deleteById

## requests

### list

url: [http://localhost:3009/api/rest/tableInfo](http://localhost:3009/api/rest/tableInfo)

method:get

### new

url:[http://localhost:3009/api/rest/tableInfo](http://localhost:3009/api/rest/tableInfo)

method:post

params:{field1:xx,field2:xx.....}

### findOne

url:[http://localhost:3009/api/rest/tableInfo/:id](http://localhost:3009/api/rest/tableInfo/:id)?param1=value1&param2=value2

method:get

### upsertOne

url:[http://localhost:3009/api/rest/tableInfo/:id](http://localhost:3009/api/rest/tableInfo/:id)

method:put

params:{field1:xx,field2:xx.....}

### deleteById

url:[http://localhost:3009/api/rest/tableInfo/:id](http://localhost:3009/api/rest/tableInfo/:id)

method:delete

### General Return Json

{ status :num\|\| 200 \|\| 500\|\| 404\|\|...,msg:string\|\|"",result:Array \|\| Entity \|\| {}}

