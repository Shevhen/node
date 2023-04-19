"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_router_1 = require("./routers/user.router");
const user5_router_1 = require("./routers/user5.router");
const auth_router_1 = require("./routers/auth.router");
const remove_old_tokens_1 = require("./crons/remove.old.tokens");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/users", user_router_1.userRouter);
app.use("/users5", user5_router_1.user5Router);
app.use("/auth", auth_router_1.authRouter);
app.use((err, req, res, next) => {
    const status = err.status;
    return res.status(status).json({
        message: err.message,
        status
    });
});
app.listen(5100, () => {
    mongoose_1.default.connect("mongodb+srv://Yevhen:Yevhen@cluster0.ct2xzoh.mongodb.net/?retryWrites=true&w=majority");
    (0, remove_old_tokens_1.cronRunner)();
    console.log("Server has been started!");
});
