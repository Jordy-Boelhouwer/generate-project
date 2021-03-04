"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const services_1 = require("../services");
const config_1 = __importDefault(require("../config"));
const startServer = async () => {
    index_1.default
        .listen(config_1.default.port, () => {
        services_1.Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config_1.default.port} 🛡️
      ################################################
    `);
    })
        .on('error', (err) => {
        services_1.Logger.error(err);
        process.exit(1);
    });
};
startServer();
//# sourceMappingURL=www.js.map