import { Response } from "express";
import { Category } from "../entities/category";

function findCategories(res: Response) {
    Category.find().then(category => {
        res.send(category);
    }).catch(err => console.error(err));
}

function findOneCategory(id: number, res: Response) {
    Category.findOne(id).then(category => {
        if (category != null)
            res.send(category);
        else
            res.sendStatus(404);
    }).catch(err => console.error(err))
}

function createCategory(categoryBody: Object, res: Response) {
    const category = new Category();
    Category.merge(category, categoryBody);
    category.save().then(category => {
        res.send(category);
    }).catch(err => console.error(err));
}

function deleteCategory (id: number, res: Response) {
    Category.findOne(id).then(category => {
        if (category != null) {
            return category.remove().then(() => {
                res.sendStatus(204);
            })} else {res.sendStatus(404)};
    }).catch(err => console.error(err));
}

export {
    findCategories,
    createCategory,
    deleteCategory,
    findOneCategory
}