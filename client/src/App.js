"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home_1 = __importDefault(require("./components/Home"));
const Aboutus_1 = __importDefault(require("./components/Aboutus"));
const Admission_1 = __importDefault(require("./components/Admission"));
const Contactus_1 = __importDefault(require("./components/Contactus"));
const Header_1 = __importDefault(require("./components/Header"));
const TopHeader_1 = __importDefault(require("./components/TopHeader"));
const Footer_1 = __importDefault(require("./components/Footer"));
const PrePrimary_1 = __importDefault(require("./components/PrePrimary"));
const Primary_1 = __importDefault(require("./components/Primary"));
const Secondary_1 = __importDefault(require("./components/Secondary"));
const react_router_dom_1 = require("react-router-dom");
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <TopHeader_1.default />
      <Header_1.default />
      <div className="page">
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
          <react_router_dom_1.Route path="/aboutus" element={<Aboutus_1.default />}/>
          <react_router_dom_1.Route path="/admission" element={<Admission_1.default />}/>
          <react_router_dom_1.Route path="/contactus" element={<Contactus_1.default />}/>
          <react_router_dom_1.Route path="/primary" element={<Primary_1.default />}/>
          <react_router_dom_1.Route path="/secondary" element={<Secondary_1.default />}/>
          <react_router_dom_1.Route path="/preprimary" element={<PrePrimary_1.default />}/>
        </react_router_dom_1.Routes>
      </div>
      <Footer_1.default />
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
