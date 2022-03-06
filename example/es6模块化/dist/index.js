var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = exports.SubComponent = void 0;
    // 导出子的名命空间
    var SubComponent;
    (function (SubComponent) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponent.Test = Test;
    })(SubComponent = exports.SubComponent || (exports.SubComponent = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'Header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'Content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'Footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("index", ["require", "exports", "components"], function (require, exports, Component) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Page = void 0;
    Component = __importStar(Component);
    var Page = /** @class */ (function () {
        function Page() {
            new Component.Header();
            new Component.Content();
            new Component.Footer();
        }
        return Page;
    }());
    exports.Page = Page;
});
