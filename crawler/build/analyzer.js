"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var cheerio_1 = __importDefault(require("cheerio"));
var Analyzer = /** @class */ (function () {
    function Analyzer() {
    }
    Analyzer.getInstance = function () {
        if (!Analyzer.instance) {
            Analyzer.instance = new Analyzer();
        }
        return Analyzer.instance;
    };
    Analyzer.prototype.getTextInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var items = $('.course-item');
        var itemList = [];
        items.map(function (index, element) {
            var title = $(element).find('.course-desc').text();
            var img = "http://www.dell-lee.com/" + $(element)
                .find('.course-img')
                .attr('src');
            var count = +((Math.random() + 1) * 20).toFixed();
            itemList.push({ title: title, count: count, img: img });
        });
        return {
            date: new Date().getTime(),
            list: itemList,
        };
    };
    Analyzer.prototype.generateJsonContent = function (res, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[res.date] = res.list;
        return fileContent;
    };
    Analyzer.prototype.analyze = function (html, filePath) {
        var list = this.getTextInfo(html);
        var fileContent = this.generateJsonContent(list, filePath);
        return JSON.stringify(fileContent);
    };
    return Analyzer;
}());
exports.default = Analyzer;
