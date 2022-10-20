"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneCategory = exports.deleteCategory = exports.createCategory = exports.findCategories = void 0;
const category_1 = require("../entities/category");
function findCategories(res) {
    category_1.Category.find().then(category => {
        res.send(category);
    }).catch(err => console.error(err));
}
exports.findCategories = findCategories;
function findOneCategory(id, res) {
    category_1.Category.findOne(id).then(category => {
        if (category != null)
            res.send(category);
        else
            res.sendStatus(404);
    }).catch(err => console.error(err));
}
exports.findOneCategory = findOneCategory;
function createCategory(categoryBody, res) {
    const category = new category_1.Category();
    category_1.Category.merge(category, categoryBody);
    category.save().then(category => {
        res.send(category);
    }).catch(err => console.error(err));
}
exports.createCategory = createCategory;
function deleteCategory(id, res) {
    category_1.Category.findOne(id).then(category => {
        if (category != null) {
            return category.remove().then(() => {
                res.sendStatus(204);
            });
        }
        else {
            res.sendStatus(404);
        }
        ;
    }).catch(err => console.error(err));
}
exports.deleteCategory = deleteCategory;
