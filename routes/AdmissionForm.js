const router = require("express").Router();
const AdmissionForm = require("../model/AdmissionForm");
router.post("/", (req, res) => {
  console.log("inside admission form");
  console.log(req.body.result);
  newAdmissionform = new AdmissionForm({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    admforstandard: req.body.admforstandard,
    standardpass: req.body.standardpass,
    result: req.body.result,
    dob: req.body.dob,
    email: req.body.email,
    city: req.body.city,
    district: req.body.district,
    state: req.body.state,
    zip: req.body.zip,
  });
  newAdmissionform
    .save()
    .then((data) => res.json(data))
    .catch(() => res.json("err in adm form"));
  console.log("created");
});

module.exports = router;
