/**
 * @file js通用库文件
 * @author lvtianyu
 */

//路由
require('./router/route.js');

//css less
require('./css/reset.css');
require('./css/global.css');
require('./css/index.less');

//引入模块
var allen = require('./modules/name.js');
allen.sayName();

//引入组件
require('./components/header/header.js');
require('./components/aside/aside.js');