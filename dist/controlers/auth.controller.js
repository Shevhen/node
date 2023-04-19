"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const express_1 = require("express");
const auth_service_1 = require("../services/auth.service");
class AuthController {
    async registration(req, res, next) {
        try {
            await auth_service_1.authService.registration(req.body);
            res.sendStatus(201);
        }
        catch (e) {
            next(e);
        }
    }
    async logIn(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = req.res.locals;
            const tokenPair = await auth_service_1.authService.logIn({ email, password }, user);
            return res.json(tokenPair);
        }
        catch (e) {
            next(e);
        }
    }
    async changePassword(req, res, next) {
        try {
            const { tokenInfo, jwtPayload } = req.res.locals;
            console.log(tokenInfo, jwtPayload);
            res.json("test");
        }
        catch (e) {
            next(e);
        }
    }
    async forgotPassword(req, res, next) {
        try {
            const { user } = req.res.locals;
            await auth_service_1.authService.forgotPassword(user);
            console.log((0, express_1.json)(user));
            res.sendStatus(200);
        }
        catch (e) {
            next(e);
        }
    }
    async setForgotPassword(req, res, next) {
        try {
            console.log(req.res.locals);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.authController = new AuthController();
