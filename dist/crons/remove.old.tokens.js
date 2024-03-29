"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronRunner = exports.removeOldTokens = void 0;
const cron_1 = require("cron");
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const token_models_1 = require("../models/token.models");
dayjs_1.default.extend(utc_1.default);
const tokensRemover = async () => {
    const priviosMonth = (0, dayjs_1.default)().utc().subtract(1, 'month');
    await token_models_1.Token.deleteMany({ createdAt: { $lte: priviosMonth } });
};
exports.removeOldTokens = new cron_1.CronJob('* * * * * *', tokensRemover);
const cronRunner = () => {
    exports.removeOldTokens.start();
};
exports.cronRunner = cronRunner;
