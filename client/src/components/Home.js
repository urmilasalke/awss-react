"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../style/home.css");
const Home = () => {
    return (<>
      <div>
        <h2 className="text-center h2">Learning Curve Public School</h2>
        <section className="school"></section>
      </div>
    </>);
};
exports.default = Home;
