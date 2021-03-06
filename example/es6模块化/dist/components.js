"use strict";
var Component;
(function (Component) {
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
