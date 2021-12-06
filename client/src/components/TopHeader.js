"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("../style/topheader.css");
const TopHeader = () => {
    return (<div className="topheader">
      <div className="container">
        <div className="row py-1">
          <div className="col-sm-2">
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faPhone} color="green"></react_fontawesome_1.FontAwesomeIcon>
            +91 9567238389
          </div>
          <div className="col-sm-4">
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faMailBulk} color="red"></react_fontawesome_1.FontAwesomeIcon>
            lcps.preprimary@learningcurve.in
          </div>
          <div className="col-sm-6 schoolname">
            {" "}
            Learning Curve public School
          </div>
        </div>
      </div>
    </div>);
};
exports.default = TopHeader;
