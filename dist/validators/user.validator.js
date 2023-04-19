"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
class UserValidator {
}
exports.UserValidator = UserValidator;
_a = UserValidator;
UserValidator.password = joi_1.default.string().regex(/^[a-zA-Z0-9]{3,30}$/);
UserValidator.email = joi_1.default.string()
    .regex(/^[@.a-zA-Z0-9]{3,30}$/)
    .lowercase()
    .trim();
UserValidator.loginUser = joi_1.default.object({
    email: _a.email.required(),
    password: _a.password.required()
});
UserValidator.changeUserPassword = joi_1.default.object({
    oldPassword: _a.password.required(),
    newPassword: _a.password.required()
});
