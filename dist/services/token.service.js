"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const actionTokenType_enum_1 = require("../enums/actionTokenType.enum");
const api_error_1 = require("../errors/api.error");
class TokenService {
    generateActionToken(payload) {
        const accessToken = jwt.sign(payload, "Yevhen", { expiresIn: "15m" });
        const refreshToken = jwt.sign(payload, "Refresh_Yevhen", { expiresIn: "30d" });
        return { accessToken, refreshToken };
    }
    generateActionTokenForForgotPassword(payload, tokenType) {
        let sectet = "";
        switch (tokenType) {
            case actionTokenType_enum_1.EActionTokenType.activate:
                sectet = "JON";
                break;
            case actionTokenType_enum_1.EActionTokenType.forgot:
                sectet = "JON_JON";
                break;
        }
        return jwt.sign(payload, sectet, { expiresIn: "7d" });
    }
    checkActionTokenForForgotPassword(token, tokenType = actionTokenType_enum_1.EActionTokenType.forgot) {
        try {
            let sectet = "";
            switch (tokenType) {
                case actionTokenType_enum_1.EActionTokenType.forgot:
                    sectet = "JON_JON";
                    break;
            }
            return jwt.verify(token, sectet);
        }
        catch (e) {
            throw new api_error_1.ApiError('Token is not valid', 200);
        }
    }
}
exports.tokenService = new TokenService();
