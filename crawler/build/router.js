"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crawler_1 = __importDefault(require("./crawler"));
var analyzer_1 = __importDefault(require("./analyzer"));
var router = express_1.Router();
router.get('/', function (req, resp) {
    resp.send('hello world');
});
router.get('/getData', function (req, resp) {
    var url = 'http://www.dell-lee.com/';
    var analyzer = analyzer_1.default.getInstance();
    new crawler_1.default(url, analyzer);
    resp.send('hello world233 is getData');
});
exports.default = router;
