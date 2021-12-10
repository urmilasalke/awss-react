const router = require("express").Router();
const contactUs = require("../model/Contactus");

/**
 * @swagger
 * definitions:
 *  Contactus:
 *   type: object
 *   properties:
 *    firstName:
 *     type: string
 *     description: first name of the user
 *     example: 'urmila'
 *    lastName:
 *     type: string
 *     description: last name of the user
 *     example: 'salke'
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'urmilasalke@gmail.com'
 *    message:
 *     type: string
 *     description: Message
 *     example: 'Want to take admission'
 */

/**
 * @swagger
 * /contactus/:
 *  post:
 *   summary: create contact us
 *   description: contact us
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body of the team
 *      schema:
 *       $ref: '#/definitions/Contactus'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Contactus'
 *   responses:
 *    200:
 *     description: data saved succesfully
 *    500:
 *     description: failure while saving data
 */

// /**
//  * @swagger
//  * /contactus/:
//  *   post:
//  *     summary: Create a JSONPlaceholder user.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               firstName:
//  *                 type: string
//  *                 description: The user's name.
//  *                 example: 'Leanne Graham'
//  *               lastName:
//  *                 type: string
//  *                 description: The user's name.
//  *                 example: 'Leanne Graham'
//  *               email:
//  *                 type: string
//  *                 description: The user's name.
//  *                 example: 'Leanne Graham'
//  *               message:
//  *                 type: string
//  *                 description: The user's name.
//  *                 example: 'Leanne Graham'
//  *
//  *     responses:
//  *       200:
//  *         description: success
//  */
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
