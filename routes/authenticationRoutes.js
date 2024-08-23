const express = require("express");
const router = express.Router();
const User = require("../controller/authrnticationController");
const AuthorizeToken = require("../middleware/AuthorizeToken");

router.post("/register",User.RegisterUser);
router.post("/login",User.LoginUser);
router.get("/Getallusers",AuthorizeToken  ,User.GetAllUsers);
router.get('/current',AuthorizeToken, User.CurrentUser);
router.put('/updatedata',AuthorizeToken, User.UpdateUser);
router.get('/verify-email', User.VerifyUser);
router.post('/reset-password', User.ResetPassword);
router.get('/verify-reset-password', User.VerifyResetPassword);
router.post('/update-password', User.UpdatePassword);
router.delete('/delete-user',AuthorizeToken, User.DeleteUser);

module.exports = router;
