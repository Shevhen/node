"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User5 = void 0;
const mongoose_1 = require("mongoose");
const user5Schema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String, unique: true, required: [true, 'email is required'], trim: true },
    password: { type: String, required: true },
    gender: { type: String }
});
exports.User5 = (0, mongoose_1.model)('user5', user5Schema);
