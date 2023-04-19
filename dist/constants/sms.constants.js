"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smsTemplates = exports.ESmsActions = void 0;
var ESmsActions;
(function (ESmsActions) {
    ESmsActions[ESmsActions["WELCOME"] = 0] = "WELCOME";
    ESmsActions[ESmsActions["FORGOT_PASSWORD"] = 1] = "FORGOT_PASSWORD";
})(ESmsActions = exports.ESmsActions || (exports.ESmsActions = {}));
exports.smsTemplates = {
    [ESmsActions.WELCOME]: "hello how are you",
    [ESmsActions.FORGOT_PASSWORD]: "we are here"
};
