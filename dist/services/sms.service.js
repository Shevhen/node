"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = void 0;
const twilio_1 = require("twilio");
class SmsService {
    constructor(client = new twilio_1.Twilio('AC16d9fc7f242c1c027d07aacdba82d005', '605c4c0d4129b0a1fb32337b8f45c7b4')) {
        this.client = client;
    }
    async sendSms(phone) {
        await this.client.messages.create({
            body: "hi hi hi",
            to: phone,
            from: ""
        });
    }
}
exports.emailService = new SmsService();
