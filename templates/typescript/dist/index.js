"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const services_1 = require("./services");
const services_2 = require("./services");
dotenv_1.default.config();
const app = express_1.default();
app.use(helmet_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    throw new services_2.AppError('NotFoundError', 404, 'The specified resource could not be found', true);
});
// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err, req, res, next) => {
    await services_1.errorHandler.handleError(err, res);
});
exports.default = app;
//# sourceMappingURL=index.js.map