"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMideleware = void 0;
const api_error_1 = require("../errors/api.error");
const user5_model_1 = require("../models/user5.model");
const token_service_1 = require("../services/token.service");
const token_models_1 = require("../models/token.models");
const Action_models_1 = require("../models/Action.models");
const actionTokenType_enum_1 = require("../enums/actionTokenType.enum");
class AuthMidleware {
    getDynamicallyAndThrow(fieldName, from = "body", dbField = fieldName) {
        return async (req, res, next) => {
            try {
                const fieldValue = req[from][fieldName];
                const user = await user5_model_1.User5.findOne({ [dbField]: fieldValue });
                if (user) {
                    throw new api_error_1.ApiError(`User with ${fieldName}${fieldValue} already exist`, 404);
                }
                next();
            }
            catch (e) {
                next(e);
            }
        };
    }
    getDynamicallyAnd(fieldName, from = "body", dbField = "email") {
        return async (req, res, next) => {
            try {
                const fieldValue = req[from][fieldName];
                const user = await user5_model_1.User5.findOne({ [dbField]: fieldValue });
                if (!user) {
                    new api_error_1.ApiError(`User ${fieldName}${fieldValue} not found`, 409);
                }
                req.res.locals = { user };
                next();
            }
            catch (e) {
                next(e);
            }
        };
    }
    async checkAccessToken(req, res, next) {
        try {
            const accesToken = req.get("Autorization");
            if (!accesToken) {
                throw new api_error_1.ApiError(`No token`, 401);
            }
            const jwtPayload = token_service_1.tokenService.generateActionToken(accesToken);
            const tokenInfo = await token_models_1.Token.findOne({ ...accesToken }).populate("_user_id");
            if (!tokenInfo) {
                throw new api_error_1.ApiError(`Token not valid`, 401);
            }
            req.res.locals = { tokenInfo, jwtPayload };
            next();
        }
        catch (e) {
            next(e);
        }
    }
    async checkActionForgotToken(req, res, next) {
        try {
            const actionToken = req.params.token;
            if (!actionToken) {
                throw new api_error_1.ApiError(`No token`, 401);
            }
            const jwtPayload = token_service_1.tokenService.checkActionTokenForForgotPassword(actionToken, actionTokenType_enum_1.EActionTokenType.forgot);
            const tokenInfo = await Action_models_1.ActionToken.findOne({ actionToken });
            if (!tokenInfo) {
                throw new api_error_1.ApiError(`Token not valid`, 401);
            }
            req.res.locals = { tokenInfo, jwtPayload };
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.authMideleware = new AuthMidleware();
