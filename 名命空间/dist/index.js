"use strict";
var Component;
(function (Component) {
    // 导出子的名命空间
    var SubComponent;
    (function (SubComponent) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponent.Test = Test;
    })(SubComponent = Component.SubComponent || (Component.SubComponent = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'Header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    Component.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'Content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    Component.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'Footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    Component.Footer = Footer;
})(Component || (Component = {}));
// console.log(123)
// 注释
/// <reference path='./components.ts' />
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: 'ko',
            };
            new Component.Header();
            new Component.Content();
            new Component.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
