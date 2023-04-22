"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const api_error_1 = require("../errors/api.error");
const password_service_1 = require("./password.service");
const user5_model_1 = require("../models/user5.model");
const token_service_1 = require("./token.service");
const token_models_1 = require("../models/token.models");
const actionTokenType_enum_1 = require("../enums/actionTokenType.enum");
const Action_models_1 = require("../models/Action.models");
const email_service_1 = require("./email.service");
const email_constants_1 = require("../constants/email.constants");
class AuthService {
    async registration(body) {
        try {
            const { password } = body;
            const hashPassword = await password_service_1.passwordService.hashPassword(password);
            await user5_model_1.User5.create({ ...body, password: hashPassword });
        }
        catch (e) {
            throw new api_error_1.ApiError(e.message, e.status);
        }
    }
    async logIn5(credentials, user) {
        try {
            const isMatches = await password_service_1.passwordService.comparePassword(user.password, credentials.password);
            if (!isMatches) {
                new api_error_1.ApiError("wrong auth info", 400);
            }
            const tokenPair = token_service_1.tokenService.generateActionToken({ name: user.name, id: user._id });
            await token_models_1.Token.create({ _user_id: user._id, ...tokenPair });
            return tokenPair;
        }
        catch (e) {
            throw new api_error_1.ApiError("wrong auth info", 400);
        }
    }
    async forgotPassword(user) {
        try {
            const actionToken = token_service_1.tokenService.generateActionTokenForForgotPassword({ _id: user._id }, actionTokenType_enum_1.EActionTokenType.forgot);
            await Action_models_1.ActionToken.create({ actionToken, tokenType: actionTokenType_enum_1.EActionTokenType.forgot, _user_id: user._id });
            await email_service_1.emailService.sendMail(user.email, email_constants_1.EEmailActions.FORGOT_PASSWORD, { token: actionToken });
            console.log(actionToken);
        }
        catch (e) {
            throw new api_error_1.ApiError(e.message, e.status);
        }
    }
}
exports.authService = new AuthService();
