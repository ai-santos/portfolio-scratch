'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

//view engine setup
server.set('views', _path2.default.join(__dirname, 'views'));
server.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
server.set('view engine', 'pug');

server.get('/', function (require, response) {
  response.render('index');
});

server.listen(5000, function () {
  console.log('Example app listening to 3000');
});