"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_1 = __importDefault(require("../components/Home"));
const react_1 = require("@testing-library/react");
describe("home", () => {
    test("renders home component", () => {
        (0, react_1.render)(<Home_1.default />);
    });
});
