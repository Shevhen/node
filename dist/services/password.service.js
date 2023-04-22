"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class PasswordService {
    hashPassword(password) {
        return bcrypt_1.default.hash(password, 10);
    }
    async comparePassword(password, hashedPassword) {
        return bcrypt_1.default.compare(password, hashedPassword);
        console.log(password);
        console.log(hashedPassword);
    }
}
exports.passwordService = new PasswordService();
