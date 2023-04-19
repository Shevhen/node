"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const api_error_1 = require("../errors/api.error");
const user5_model_1 = require("../models/user5.model");
class UserService {
    async getWithPagination(query) {
        try {
            const { page, limit, ...searchObject } = query;
            const skip = limit * (page - 1);
            const data = await user5_model_1.User5.find(searchObject).limit(+limit).skip(+skip);
            const totalCount = await user5_model_1.User5.count();
            return {
                currentPage: page,
                allPages: totalCount,
                data: { ...data }
            };
        }
        catch (e) {
            throw new api_error_1.ApiError(e.message, e.status);
        }
    }
}
exports.userService = new UserService();
