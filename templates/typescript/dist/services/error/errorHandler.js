"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
const crashIfUntrustedErrorOrSendResponse = async (error, response) => {
    if (!error.isOperational) {
        process.exit(1);
    }
    response.status(error.httpCode).json(error);
};
class ErrorHandler {
    async handleError(error, responseStream) {
        logger_1.default.error(error);
        await crashIfUntrustedErrorOrSendResponse(error, responseStream);
    }
}
exports.default = new ErrorHandler();
//# sourceMappingURL=errorHandler.js.map