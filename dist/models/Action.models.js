"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionToken = void 0;
const mongoose_1 = require("mongoose");
const user5_model_1 = require("./user5.model");
const actionTokenType_enum_1 = require("../enums/actionTokenType.enum");
const actionTokensSchema = new mongoose_1.Schema({
    _user_id: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: user5_model_1.User5
    },
    actionToken: {
        type: String,
        required: true
    },
    tokenType: {
        type: String,
        enum: actionTokenType_enum_1.EActionTokenType
    },
}, { versionKey: false, timestamps: true });
exports.ActionToken = (0, mongoose_1.model)('Action', actionTokensSchema);
