const router = require("express").Router();
const Student = require("../model/Student");
router.post("/register", async (req, res) => {
  console.log("inside register");
  var user = new Student({
    name: req.body.name,
    email: req.body.email,
    class: req.body.class,
    rollNo: req.body.rollNo,
    photoid: req.body.photoid,
    password: req.body.password,
    section: req.body.section,
    bloodGroup: req.body.bloodGroup,
    gender: req.body.gender,
    date: req.body.date,
  });

  user
    .save()
    .then(() => res.json("data saved"))
    .catch(() => res.json("err"));
  console.log("created");
});

// router.get("/:studentusername", (req, res) => {
//   console.log("inside student");
//   Student.findOne({ email: req.params.studentusername })
//     .then((data) => res.json(data))
//     .catch(() => res.json("err"));
//   console.log("created");
// });

router.get("/", (req, res) => {
  console.log("inside student");
  Student.find()
    .then((data) => res.json(data))
    .catch(() => res.json("err"));
  console.log("created");
});

module.exports = router;
