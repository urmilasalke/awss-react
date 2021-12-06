"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
// import { Offcanvas } from 'react-bootstrap'
// import { FormControl } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
const Header = () => {
    return (<Navbar_1.default bg="bg-light" expand="lg">
  <react_bootstrap_1.Container>
    <Navbar_1.default.Brand href="/">Home</Navbar_1.default.Brand>
    <Navbar_1.default.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar_1.default.Collapse id="basic-navbar-nav">
      <Nav_1.default className="me-auto ">
        <Nav_1.default.Link href="/aboutus">About US</Nav_1.default.Link>
        <Nav_1.default.Link href="/admission">Admission</Nav_1.default.Link>
        <Nav_1.default.Link href="/contactus">Contact US</Nav_1.default.Link>
      </Nav_1.default>
    </Navbar_1.default.Collapse>
  </react_bootstrap_1.Container>
    </Navbar_1.default>);
};
exports.default = Header;
