import { getConnectionManager } from "typeorm";
import { Category } from "./category";
import { Allnews } from "./allnews";
import { db } from "./../config.json"

export const connection = getConnectionManager().create ({
    host: db.host,
    username: db.user,
    password: db.password,
    database: db.database,
    synchronize: true,
    type: 'mysql',
    entities: [Category, Allnews]
});