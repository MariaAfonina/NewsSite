"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const category_1 = require("./category");
const allnews_1 = require("./allnews");
const config_json_1 = require("./../config.json");
exports.connection = (0, typeorm_1.getConnectionManager)().create({
    host: config_json_1.db.host,
    username: config_json_1.db.user,
    password: config_json_1.db.password,
    database: config_json_1.db.database,
    synchronize: true,
    type: 'mysql',
    entities: [category_1.Category, allnews_1.Allnews]
});
