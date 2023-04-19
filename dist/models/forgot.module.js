"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPassword = void 0;
const mongoose_1 = require("mongoose");
const user5_model_1 = require("./user5.model");
const eforgotPassword_1 = require("../enums/eforgotPassword");
const forgotPassword = new mongoose_1.Schema({
    _id_user: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: user5_model_1.User5
    },
    activateToken: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        enum: eforgotPassword_1.EForgotPassword
    }
}, { versionKey: false, timestamps: true });
exports.ForgotPassword = (0, mongoose_1.model)('paswords', forgotPassword);
