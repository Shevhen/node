"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersJsonModel = void 0;
const mongoose_1 = require("mongoose");
const UsersJsonModel = new mongoose_1.Schema({
    id: { type: Number },
    name: { type: String },
    username: { type: String },
    email: { type: String },
    address: {
        street: { type: String },
        suite: { type: String },
        zipcode: { type: String },
        geo: {
            lat: { type: Number },
            lng: { type: Number }
        }
    },
    phone: { type: String },
    website: { type: String },
    company: {
        name: { type: String },
        catchPhrase: { type: String },
        bs: { type: String }
    }
});
exports.usersJsonModel = (0, mongoose_1.model)('usersJson', UsersJsonModel);
