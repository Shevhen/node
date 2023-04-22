"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user5Controller = void 0;
const dotenv_1 = require("dotenv");
const user5_model_1 = require("../models/user5.model");
const user_service_1 = require("../services/user.service");
(0, dotenv_1.config)();
class User5Controller {
    async getAll(req, res, next) {
        try {
            const users = await user5_model_1.User5.find();
            return res.json(users);
        }
        catch (e) {
            next(e);
        }
    }
    async post(req, res, next) {
        try {
            const body = req.body;
            const user = await user5_model_1.User5.create({ ...body });
            return res.status(201).json({ message: "User created", data: user });
        }
        catch (e) {
            next(e);
        }
    }
    async delete(req, res, next) {
        try {
            const { userId } = req.params;
            await user5_model_1.User5.deleteOne({ _id: userId });
            return res.status(200).json({ message: "User was deleted" });
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await user5_model_1.User5.findById(userId);
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
            const user = await user5_model_1.User5.updateOne({ _id: userId }, { ...body });
            return res.status(201).json({ message: "User updated", data: user });
        }
        catch (e) {
            next(e);
        }
    }
    async uploadAvatar(req, res, next) {
        try {
            const { userId } = req.params;
            const avatar = req.files.avatar;
            const user = await user_service_1.userService.uploadAvatar(avatar, userId);
            return res.status(201).json(user);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.user5Controller = new User5Controller();
