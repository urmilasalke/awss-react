const router = require("express").Router();
const contactUs = require("../model/Contactus");
router.post("/", (req, res) => {
  console.log("inside admission");
  newContactus = new contactUs({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message,
  });

  newContactus
    .save()
    .then((data) => res.json(data))
    .catch(() => res.json("err"));
  console.log("created");
});

module.exports = router;
