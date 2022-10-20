"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNews = exports.findLatestDate = exports.findActiveAllnews = exports.findCategoryAllnews = exports.createAllnews = exports.findAllnews = void 0;
const allnews_1 = require("../entities/allnews");
const category_1 = require("../entities/category");
const typeorm_1 = require("typeorm");
const websocket_1 = require("./websocket");
const ALLNEWS_LAST_DATE = 'News Last Value';
function findAllnews(res) {
    allnews_1.Allnews.find().then(allnews => {
        res.send(allnews);
    }).catch(err => console.error(err));
}
exports.findAllnews = findAllnews;
function createAllnews(categoryId, allnewsJson, res) {
    category_1.Category.findOne(categoryId).then(category => {
        if (category != null) {
            const allnews = new allnews_1.Allnews();
            allnews_1.Allnews.merge(allnews, allnewsJson);
            allnews.category = category;
            return allnews.save().then(allnews => {
                (0, websocket_1.sendMessageWS)({
                    type: ALLNEWS_LAST_DATE,
                    payload: {
                        value: allnews.date_only,
                        station_id: allnews.category.id
                    },
                });
                res.send(allnews);
            });
        }
        else
            res.sendStatus(404);
    }).catch(err => console.error(err));
}
exports.createAllnews = createAllnews;
function findCategoryAllnews(categoryId, res) {
    allnews_1.Allnews.find({ category: { id: categoryId } }).then(Allnews => {
        res.send(Allnews);
    }).catch(err => console.error(err));
}
exports.findCategoryAllnews = findCategoryAllnews;
function findActiveAllnews(res) {
    (0, typeorm_1.getRepository)(allnews_1.Allnews)
        .createQueryBuilder('allnews')
        .where('allnews.status = true')
        .getMany().then(allnews => {
        res.send(allnews);
    }).catch(err => console.error(err));
}
exports.findActiveAllnews = findActiveAllnews;
function findLatestDate(res) {
    (0, typeorm_1.getRepository)(allnews_1.Allnews)
        .createQueryBuilder('allnews')
        .select('category_id, date_only')
        .getRawMany().then(data => {
        res.send(data);
    }).catch(err => console.error(err));
}
exports.findLatestDate = findLatestDate;
function deleteNews(id, res) {
    allnews_1.Allnews.findOne(id).then(news => {
        if (news != null) {
            return news.remove().then(() => {
                res.sendStatus(204);
            });
        }
        else {
            res.sendStatus(404);
        }
        ;
    }).catch(err => console.error(err));
}
exports.deleteNews = deleteNews;
