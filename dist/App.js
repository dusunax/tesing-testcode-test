var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import AddAndHandle from "./components/add-and-handle";
import RandomAndScroll from "./components/random-and-scroll";
import UnknownAndNever from "./components/unknown-and-never";
function App() {
    return (_jsxs("div", __assign({ className: "App", style: { height: "120vh", paddingTop: "30vh", boxSizing: "border-box" } }, { children: [_jsx(RandomAndScroll, {}, void 0), _jsx(AddAndHandle, {}, void 0), _jsx(UnknownAndNever, {}, void 0)] }), void 0));
}
export default App;
//# sourceMappingURL=App.js.map