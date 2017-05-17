/**
 * Created by kistorm on 2017/4/30.
 */

// console.log(require('./index').connection);
// console.error(require('./index').instance);
// console.log(require('./index').crud);
// console.error(require('./index').models);

// var CRUD = require('./index.js').crud;
// var baseinfo = new CRUD("tableInfo");
// var traceinfo = new CRUD("traceinfo");
//
// var vo = {
//     creator: "kistorm77x",
//     createTS: "1-20-31-52",
//     baseName: "mb",
//     baseAddress: "sss",
//     baseHead: "fdsafds",
//     baseDesc: "fdsfdsfds",
//     companyNo: "ffdsdsds",
//     status: "dfsfdsa",
//     baseNo:"xhinjlkdas"
// };
//
// var vo1 = {
//     creator: "kistorm-2",
//     createTS: "1-20-31-52",
//     baseName: "mb",
//     baseAddress: "sss",
//     baseHead: "123321",
//     baseDesc: "fdsfdsfds",
//     companyNo: "ffdsdsds",
//     baseNo: "123321a",
//     workShopNo: "123321a",
//     speciesNo: "123321a",
//     farmingBatchNo: "123321a",
//     earTagNo: "123321a",
//     traceNo: "123321a",
//     status: "fds"
// };
// baseinfo.create([vo,vo1],function(err,result){
//     console.log(err)
// });

// baseinfo.acquire({where:{}},function(err,result){
//     console.log(err,result)
// })

// baseinfo.list({},function(err,result){
//     console.log(err,result)
// })

// baseinfo.list({},function(err,result){
//     console.log(err,result)
// })

// baseinfo.queryBySQL({
//     sql:"SELECT * FROM baseinfo",
//     keys:null,
//     sqlType:null,
//     modelName:"baseinfo"
// },function(err,result){
//     console.log(err,result)
// })

// baseinfo.queryBySQL({
//     sql:"delete FROM baseinfo where creator = ?",
//     keys:["kistorm-2"],
//     sqlType:null,
//     modelName:"baseinfo"
// },function(err,result){
//     console.log(err,result)
// })