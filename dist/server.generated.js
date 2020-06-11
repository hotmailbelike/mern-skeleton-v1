module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar config = {\n\tenv: \"development\" || false,\n\tport: process.env.PORT || 3000,\n\tjwtSecret: process.env.JWT_SECRET || 'YOUR_secret_key',\n\tmongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\nexports.default = config;\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar signin = function signin(req, res) {\n\t_user2.default.findOne({\n\t\temail: req.body.email\n\t}, function (err, user) {\n\t\tif (err || !user) {\n\t\t\treturn res.status('401').json({\n\t\t\t\terror: 'User not found'\n\t\t\t});\n\t\t}\n\t\tif (!user.authenticate(req.body.password)) {\n\t\t\treturn res.status('401').send({\n\t\t\t\terror: \"Email and password don't match.\"\n\t\t\t});\n\t\t}\n\t\tvar token = _jsonwebtoken2.default.sign({ _id: user._id }, _config2.default.jwtSecret);\n\t\tres.cookie('t', token, {\n\t\t\texpire: new Date() + 9999\n\t\t});\n\t\treturn res.json({\n\t\t\ttoken: token,\n\t\t\tuser: { _id: user._id, name: user.name, email: user.email }\n\t\t});\n\t});\n};\n\nvar signout = function signout(req, res) {\n\tres.clearCookie('t');\n\treturn res.status('200').json({ message: 'signed out' });\n};\n\nvar requireSignin = (0, _expressJwt2.default)({\n\tsecret: _config2.default.jwtSecret,\n\tuserProperty: 'auth'\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n\tvar authorized = req.profile && req.auth && req.profile._id === req.auth._id;\n\tif (!authorized) {\n\t\treturn res.statues('403').json({\n\t\t\terror: 'User is not authorized'\n\t\t});\n\t}\n\tnext();\n};\n\nexports.default = { signin: signin, signout: signout, requireSignin: requireSignin, hasAuthorization: hasAuthorization };\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res, next) {\n\tvar user = new _user2.default(req.body);\n\tuser.save(function (err, result) {\n\t\tif (err) {\n\t\t\treturn res.status(400).json({\n\t\t\t\terror: _dbErrorHandler2.default.getErrorMessage(err)\n\t\t\t});\n\t\t}\n\t\tres.status(200).json({\n\t\t\tmsg: 'Sign up Successful'\n\t\t});\n\t});\n};\n\n/**\n * Load user and append to req.\n */\nvar userByID = function userByID(req, res, next, id) {\n\t_user2.default.findById(id).exec(function (err, user) {\n\t\tif (err || !user) {\n\t\t\treturn res.status(400).json({\n\t\t\t\terror: 'User not found'\n\t\t\t});\n\t\t}\n\t\treq.profile = user;\n\t\tnext();\n\t});\n};\n\nvar list = function list(req, res) {\n\t_user2.default.find(function (err, users) {\n\t\tif (err) {\n\t\t\treturn res.status(400).json({\n\t\t\t\terror: _dbErrorHandler2.default.getErrorMessage(err)\n\t\t\t});\n\t\t}\n\t\tres.json(users);\n\t}).select('name email updated created');\n};\n\nvar read = function read(req, res) {\n\treq.profile.hashed_password = undefined;\n\treq.profile.salt = undefined;\n\treturn res.json(req.profile);\n};\n\nvar update = function update(req, res, next) {\n\tvar user = req.profile;\n\tuser = _lodash2.default.extend(user, req.body);\n\tuser.updated = Date.now();\n\tuser.save(function (err) {\n\t\tif (err) {\n\t\t\treturn res.status(400).json({ error: _dbErrorHandler2.default.getErrorMessage(err) });\n\t\t}\n\t\tuser.hashed_password = undefined;\n\t\tuser.salt = undefined;\n\t\tres.json(user);\n\t});\n};\n\nvar remove = function remove(req, res, next) {\n\tvar user = req.profile;\n\tuser.remove(function (err, deletedUser) {\n\t\tif (err) {\n\t\t\treturn res.status(400).json({\n\t\t\t\terror: _dbErrorHandler2.default.getErrorMessage(err)\n\t\t\t});\n\t\t}\n\t\tdeletedUser.hashed_password = undefined;\n\t\tdeletedUser.salt = undefined;\n\t\tres.json(deletedUser);\n\t});\n};\n\nexports.default = { create: create, userByID: userByID, read: read, list: list, remove: remove, update: update };\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.json()); //use body parser if there are errors in this line\napp.use(_express2.default.urlencoded({ extended: true })); //use body parser if there are errors in this line\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\napp.use((0, _helmet2.default)());\napp.use((0, _cors2.default)());\n\napp.use('/', _user2.default);\napp.use('/', _auth2.default);\n\n/* install body parser if there are errors */\n\napp.get('/', function (req, res) {\n\tres.status(200).send((0, _template2.default)());\n});\n\napp.use(function (err, req, res, next) {\n\tif (err.name === 'UnauthorizedError') {\n\t\tres.status(401).json({ error: err.name + ': ' + err.message });\n\t}\n});\n\nexports.default = app;\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n\tvar output = void 0;\n\ttry {\n\t\tvar fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n\t\toutput = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n\t} catch (ex) {\n\t\toutput = 'Unique field already exists';\n\t}\n\treturn output;\n};\n\nvar getErrorMessage = function getErrorMessage(err) {\n\tvar message = '';\n\tif (err.code) {\n\t\tswitch (err.code) {\n\t\t\tcase 11000:\n\t\t\tcase 11001:\n\t\t\t\tmessage = getUniqueErrorMessage(err);\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tmessage = 'Something went wrong';\n\t\t}\n\t} else {\n\t\tfor (var errName in err.errors) {\n\t\t\tif (err.errors[errName].message) message = err.errors[errName].message;\n\t\t}\n\t}\n\treturn message;\n};\n\nexports.default = { getErrorMessage: getErrorMessage };\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UserSchema = new _mongoose2.default.Schema({\n\tname: {\n\t\ttype: String,\n\t\ttrim: true,\n\t\trequired: 'Name is required'\n\t},\n\temail: {\n\t\ttype: String,\n\t\ttrim: true,\n\t\tunique: 'Email already exists',\n\t\tmatch: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n\t\trequired: 'Email is required'\n\t},\n\thashed_password: {\n\t\ttype: String,\n\t\trequired: 'Password is required'\n\t},\n\tsalt: String,\n\tcreated: {\n\t\ttype: Date,\n\t\tdefault: Date.now\n\t},\n\tupdated: Date\n});\n\nUserSchema.virtual('password').set(function (password) {\n\tthis._password = password;\n\tthis.salt = this.makeSalt();\n\tthis.hashed_password = this.encryptPassword(password);\n}).get(function () {\n\treturn this._password;\n});\n\nUserSchema.methods = {\n\tauthenticate: function authenticate(plainText) {\n\t\treturn this.encryptPassword(plainText) === this.hashed_password;\n\t},\n\tencryptPassword: function encryptPassword(password) {\n\t\tif (!password) return '';\n\t\ttry {\n\t\t\treturn _crypto2.default.createHmac('sha1', this.salt).update(password).digest('hex');\n\t\t} catch (err) {\n\t\t\treturn '';\n\t\t}\n\t},\n\tmakeSalt: function makeSalt() {\n\t\treturn Math.round(new Date().valueOf() * Math.random()) + '';\n\t}\n};\n\nUserSchema.path('hashed_password').validate(function (v) {\n\tif (this._password && this._password.length < 6) {\n\t\tthis.invalidate('password', 'Password must be at least 6 characters.');\n\t}\n\tif (this.isNew && !this._password) {\n\t\tthis.invalidate('password', 'Password is required');\n\t}\n}, null);\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/signin').post(_auth2.default.signin);\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:userId').get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_user2.default.remove, _auth2.default.hasAuthorization);\n\nrouter.param('userId', _user2.default.userByID);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(_config2.default.mongoUri, {\n\tuseNewUrlParser: true,\n\tuseUnifiedTopology: true,\n\tuseCreateIndex: true\n});\n_mongoose2.default.connection.on('error', function () {\n\tthrow new Error('unable to connect to database: ' + mongoUri);\n});\n_express2.default.listen(_config2.default.port, function (err) {\n\tif (err) {\n\t\tconsole.log(err);\n\t}\n\tconsole.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nexports.default = function () {\n\treturn \"<!doctype html>\\n<html lang=\\\"en\\\">\\n<head>\\n<meta charset=\\\"utf-8\\\">\\n<title>MERN Skeleton</title>\\n</head>\\n<body>\\n<div id=\\\"root\\\">Hello World</div>\\n</body>\\n</html>\";\n};\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /media/omar/HDD/Documents-HDD/Web Projects 2/mern_skeleton/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });