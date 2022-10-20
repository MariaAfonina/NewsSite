import { Allnews } from "../entities/allnews";
import { Category } from "../entities/category";
import { Response } from "express";
import { getRepository } from "typeorm";
import { sendMessageWS } from './websocket'

const ALLNEWS_LAST_DATE = 'News Last Value'

function findAllnews(res: Response) {
    Allnews.find().then(allnews => {
        res.send(allnews);
    }).catch(err => console.error(err));
}

function createNews(categoryId: number, allnewsJson: Object, res: Response) {
    Category.findOne(categoryId).then(category => {
        if (category != null) {
            const allnews = new Allnews();
            Allnews.merge(allnews, allnewsJson);
            allnews.category = category;
            return allnews.save().then(allnews => {
                sendMessageWS({
                    type: ALLNEWS_LAST_DATE,
                    payload: {
                        value: allnews.date_only,
                        station_id: allnews.category.id
                    },
                })
                res.send(allnews);
            })
        } else 
            res.sendStatus(404);
    }).catch(err => console.error(err));
}

function findCategoryAllnews (categoryId: number, res: Response) {
    Allnews.find({ category : { id: categoryId } }).then(Allnews => {
        res.send(Allnews);
    }).catch(err => console.error(err));
}

function findActiveAllnews (res: Response) {
    getRepository(Allnews)
        .createQueryBuilder('allnews')
        .where('allnews.status = true')
        .getMany().then(allnews => {
        res.send(allnews);
    }).catch(err => console.error(err));
}

function findLatestDate (res: Response) {
    getRepository(Allnews)
        .createQueryBuilder('allnews')
        .select('category_id, date_only')
        .getRawMany().then(data => {
        res.send(data);
    }).catch(err => console.error(err));
}

function deleteNews (id: number, res: Response) {
    Allnews.findOne(id).then(news => {
        if (news != null) {
            return news.remove().then(() => {
                res.sendStatus(204);
            })} else {res.sendStatus(404)};
    }).catch(err => console.error(err));
}

export {
    findAllnews,
    createNews,
    findCategoryAllnews,
    findActiveAllnews,
    findLatestDate,
    deleteNews
}