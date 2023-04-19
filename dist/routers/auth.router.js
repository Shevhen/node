"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_midleware_1 = require("../midlewares/auth.midleware");
const auth_controller_1 = require("../controlers/auth.controller");
const user_mideleware_1 = require("../midlewares/user.mideleware");
const router = (0, express_1.Router)();
router.post("/register", auth_midleware_1.authMideleware.getDynamicallyAndThrow("email", "body"), auth_controller_1.authController.registration);
router.post("/login", user_mideleware_1.userMideleware.isValidLogin, auth_midleware_1.authMideleware.getDynamicallyAnd("email"), auth_controller_1.authController.logIn);
router.post("/password/change", user_mideleware_1.userMideleware.isValidChangePassword, auth_controller_1.authController.changePassword);
router.post("/password/forgot", auth_midleware_1.authMideleware.getDynamicallyAnd("email"), auth_controller_1.authController.forgotPassword);
router.put("/password/forgot:token", auth_midleware_1.authMideleware.checkActionForgotToken, auth_controller_1.authController.setForgotPassword);
exports.authRouter = router;
