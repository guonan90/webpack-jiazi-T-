
require('./../js/router.js');

//引入路由页面html
var cmcc = require('./html/cmcc.html');
var cmcc1 = require('./html/cmcc1.html');
var cmcc2 = require('./html/cmcc2.html');
var cmcc3 = require('./html/cmcc3.html');

//引入路由页面less
require('./less/cmcc.less');

//引入路由页面js
require('./js/cmcc.js');

//配置路由
spaRouters.map('/detail',function(transition){
    spaRouters.syncFun(function(transition){
      document.getElementById("content").innerHTML = cmcc;
    },transition);
});
spaRouters.map('/detail1',function(transition){
    spaRouters.syncFun(function(transition){
      document.getElementById("content").innerHTML = cmcc1;
    },transition);
});
spaRouters.map('/detail2',function(transition){
    spaRouters.syncFun(function(transition){
      document.getElementById("content").innerHTML = cmcc2;
    },transition);
});
spaRouters.map('/detail3',function(transition){
    spaRouters.syncFun(function(transition){
      document.getElementById("content").innerHTML = cmcc3;
    },transition);
});

//路由回调函数
spaRouters.beforeEach(function(transition){
    transition.next();//路由显示函数
    //路由跳转前回调函数
});
spaRouters.afterEach(function(transition){
    //路由跳转后回调函数
});
spaRouters.init();