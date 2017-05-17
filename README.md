## **REST - EXPRESS**

**run os** : linux、windows、mac

**node version** : 0.10+

**express version**:3.0+

**database**:mysql

**Reference library** :lodash 3.0,async 2.1.0,sequelize 3.0....

github:git@github.com:kistorm/restful.git

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

### General Return Json

{ status :num\|\| 200 \|\| 500\|\| 404\|\|...,msg:string\|\|"",result:Array \|\| Entity \|\| {}}

