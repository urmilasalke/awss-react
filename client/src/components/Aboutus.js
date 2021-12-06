"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("../style/aboutus.css");
const Breadcrumb_1 = __importDefault(require("react-bootstrap/Breadcrumb"));
// import { Accordion } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import Home from './Home';
const Aboutus = () => {
    const [home, setHome] = (0, react_1.useState)(false);
    const [vision, setVision] = (0, react_1.useState)(false);
    function homefun() {
        setHome(!home);
    }
    function visionfun() {
        setVision(!vision);
    }
    console.log(vision);
    return (<>
      <div>
        <section className="aboutschool"></section>
        <Breadcrumb_1.default>
          <Breadcrumb_1.default.Item href="/" className="item">
            Home
          </Breadcrumb_1.default.Item>
          <Breadcrumb_1.default.Item active className="item">
            About Us
          </Breadcrumb_1.default.Item>
        </Breadcrumb_1.default>
      </div>
      <div className="containers">
        <div>
          <div className="row">
            <div className="col-sm-6 about"></div>
            <div className="col-sm-6 abouttext aboutus-content">
              <h2 className="text-center">About Us</h2>
              <p>
                A school is an educational institution designed to provide
                learning spaces and learning environments for the teaching of
                students under the direction of teachers. Most countries have
                systems of formal education, which is sometimes compulsory. In
                these systems, students progress through a series of schools
              </p>
              <p>
                A school is an educational institution designed to provide
                learning spaces and learning environments for the teaching of
                students under the direction of teachers. Most countries have
                systems of formal education, which is sometimes compulsory. In
                these systems, students progress through a series of schools.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div id="home" data-testid="home-text" className="accordions" onClick={() => homefun()}>
        History
      </div>
      {home && (<p className="paccordions">
          We launched Learning Curve Public School in 2001 & since then have
          rapidly changed the face of Pre-Primary,Primary and Secondary
          education in the City. Our success as one of the leading education
          service providers raised the expectations of many hopeful parents, who
          were keen to see their children continue to blossom under our
          guidance.
        </p>)}
      <div id="vision" className="accordions" onClick={() => visionfun()}>
        Vision
      </div>
      {vision && (<p className="paccordions">
          Learning Curve Public School seeks to provide the best place for a
          child to learn, to grow and to evolve into a balanced and strong
          individual. The School intends to strive to become a second home for
          your child. The School located Hinjawadi Pune.
        </p>)}
      <br></br>
    </>);
};
exports.default = Aboutus;
