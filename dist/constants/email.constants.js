"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTemplates = exports.EEmailActions = void 0;
var EEmailActions;
(function (EEmailActions) {
    EEmailActions[EEmailActions["WELCOME"] = 0] = "WELCOME";
    EEmailActions[EEmailActions["FORGOT_PASSWORD"] = 1] = "FORGOT_PASSWORD";
})(EEmailActions = exports.EEmailActions || (exports.EEmailActions = {}));
exports.allTemplates = {
    [EEmailActions.WELCOME]: {
        subject: "hello how are you",
        templateInfo: "register"
    },
    [EEmailActions.FORGOT_PASSWORD]: {
        subject: "we are here",
        templateInfo: "register"
    }
};
