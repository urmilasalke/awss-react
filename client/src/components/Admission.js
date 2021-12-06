"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import Table from "react-bootstrap/Table";
const axios_1 = __importDefault(require("axios"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const AdmissionReducer_1 = require("./reducers/AdmissionReducer");
const react_router_dom_1 = require("react-router-dom");
const Breadcrumb_1 = __importDefault(require("react-bootstrap/Breadcrumb"));
require("../style/admission.css");
const Admission = () => {
    const grades = (0, react_redux_1.useSelector)((state) => state.admission.value);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_2.useEffect)(() => {
        axios_1.default
            .get(`http://localhost:5000/`)
            .then(({ data }) => {
            dispatch((0, AdmissionReducer_1.setAdmissionGrades)(data));
        })
            .catch((err) => {
            console.log(err);
        });
    }, []);
    console.log(grades);
    console.log();
    // axios.get(`http://localhost:5000/${category}`).then(()=>{}).catch(()=>{})
    return (<>
      <div>
        <section className="school"></section>
        <Breadcrumb_1.default>
          <Breadcrumb_1.default.Item href="/" className="item">
            Home
          </Breadcrumb_1.default.Item>
          <Breadcrumb_1.default.Item active className="item">
            Admission
          </Breadcrumb_1.default.Item>
        </Breadcrumb_1.default>
      </div>
      <h5 className="h5">Grades Available!</h5>
      <ul>
        <react_router_dom_1.Link to="/preprimary" style={{ textDecoration: "none" }}>
          <li>Pre-primary</li>
        </react_router_dom_1.Link>

        <react_router_dom_1.Link to="/primary" style={{ textDecoration: "none" }}>
          <li>Primary</li>
        </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/secondary" style={{ textDecoration: "none" }}>
          <li>Secondary</li>
        </react_router_dom_1.Link>
      </ul>
      {/* <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Fees</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <>
                {grade.options.map((option) => (
                  <>
                    <tr>
                      <td>{option.fees}</td>
                      <td>{option.grade}</td>
                      <td>{option.seats}</td>
                    </tr>
                  </>
                ))}
              </>
            ))}
          </tbody>
        </Table> */}
    </>);
};
exports.default = Admission;
