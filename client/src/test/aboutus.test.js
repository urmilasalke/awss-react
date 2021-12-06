"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aboutus_1 = __importDefault(require("../components/Aboutus"));
const react_1 = require("@testing-library/react");
describe("home", () => {
    test("renders home component", () => {
        (0, react_1.render)(<Aboutus_1.default />);
    });
});
// test("increment counter", () => {
//   render(<Aboutus />);
//   const btnIncrement = screen.findByLabelText("History");
//   fireEvent.click(btnIncrement);
//   expect(screen.getByTestId("home-text")).toHaveTextContent("1");
// });
