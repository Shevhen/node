"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const dotenv_1 = require("dotenv");
const user_model_1 = require("../models/user.model");
const email_service_1 = require("../services/email.service");
const user_service_1 = require("../services/user.service");
(0, dotenv_1.config)();
class UserController {
    async getAll(req, res, next) {
        try {
            const users = await user_model_1.User.find();
            return res.json(users);
        }
        catch (e) {
            next(e);
        }
    }
    async getAllWithPagination(req, res, next) {
        try {
            const pagination = await user_service_1.userService.getWithPagination(req.query);
            console.log(pagination);
            return res.json(pagination);
        }
        catch (e) {
            next(e);
        }
    }
    async post(req, res, next) {
        try {
            const body = req.body;
            const user = await user_model_1.User.create({ ...body });
            return res.status(201).json({ message: "User created", data: user });
        }
        catch (e) {
            next(e);
        }
    }
    async delete(req, res, next) {
        try {
            const { userId } = req.params;
            await user_model_1.User.deleteOne({ _id: userId });
            await email_service_1.emailService.sendMail('sheva88705071991@gmail.com', 1);
            return res.status(200).json({ message: "User was deleted" });
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await user_model_1.User.findById(userId);
            return res.status(200).json({ message: "found", data: user });
        }
        catch (e) {
            next(e);
        }
    }
    async update(req, res, next) {
        try {
            const { userId } = req.params;
            const body = req.body;
            const user = await user_model_1.User.updateOne({ _id: userId }, { ...body });
            return res.status(201).json({ message: "User updated", data: user });
        }
        catch (e) {
            next(e);
        }
    }
}
exports.userController = new UserController();
