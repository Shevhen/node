"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMideleware = void 0;
const user_model_1 = require("../models/user.model");
const api_error_1 = require("../errors/api.error");
const user_validator_1 = require("../validators/user.validator");
class UserMideleware {
    async getByIdAndNext(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await user_model_1.User.findById(userId);
            if (!user) {
                new api_error_1.ApiError('User not found', 404);
            }
            else
                next();
        }
        catch (e) {
            next(e);
        }
    }
    async isValidLogin(req, res, next) {
        try {
            const { error } = user_validator_1.UserValidator.loginUser.validate(req.body);
            if (error) {
                throw new api_error_1.ApiError(error.message, 400);
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
    async isValidChangePassword(req, res, next) {
        try {
            const { error } = user_validator_1.UserValidator.changeUserPassword.validate(req.body);
            if (error) {
                throw new api_error_1.ApiError(error.message, 400);
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.userMideleware = new UserMideleware();
