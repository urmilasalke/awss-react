"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const AdmissionReducer_1 = require("./reducers/AdmissionReducer");
const axios_1 = __importDefault(require("axios"));
const react_bootstrap_1 = require("react-bootstrap");
require("../style/secondary.css");
const Breadcrumb_1 = __importDefault(require("react-bootstrap/Breadcrumb"));
const Secondary = () => {
    const grades = (0, react_redux_1.useSelector)((state) => state.admission.value);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_2.useEffect)(() => {
        axios_1.default
            .get(`http://localhost:4000/secondary`)
            .then(({ data }) => {
            dispatch((0, AdmissionReducer_1.setAdmissionGrades)(data));
        })
            .catch((err) => {
            console.log(err);
        });
    }, []);
    return (<>
      <div>
        <section className="secondaryimg"></section>
        <Breadcrumb_1.default>
          <Breadcrumb_1.default.Item href="/" className="item">
            Home
          </Breadcrumb_1.default.Item>
          <Breadcrumb_1.default.Item href="/admission" className="item">
            Admission
          </Breadcrumb_1.default.Item>
          <Breadcrumb_1.default.Item active className="item">
            Secondary
          </Breadcrumb_1.default.Item>
        </Breadcrumb_1.default>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <react_bootstrap_1.Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Fees</th>
                  <th>Seats</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade) => (<>
                    {grade.options.map((option) => (<>
                        <tr>
                          <td>{option.grade}</td>
                          <td>{option.fees}</td>
                          <td>{option.seats}</td>
                        </tr>
                      </>))}
                  </>))}
              </tbody>
            </react_bootstrap_1.Table>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>);
};
exports.default = Secondary;
