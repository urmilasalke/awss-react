"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contactus_1 = __importDefault(require("../components/Contactus"));
const react_1 = require("@testing-library/react");
describe("header", () => {
    test("renders header component", () => {
        (0, react_1.render)(<Contactus_1.default />);
    });
});
