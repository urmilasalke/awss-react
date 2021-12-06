"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TopHeader_1 = __importDefault(require("../components/TopHeader"));
const react_1 = require("@testing-library/react");
describe("Top header", () => {
    test("renders top header component", () => {
        (0, react_1.render)(<TopHeader_1.default />);
    });
});
