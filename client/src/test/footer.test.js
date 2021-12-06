"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Footer_1 = __importDefault(require("../components/Footer"));
const react_1 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
describe("header", () => {
    test("renders header component", () => {
        (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <Footer_1.default />
      </react_router_dom_1.BrowserRouter>);
    });
});
