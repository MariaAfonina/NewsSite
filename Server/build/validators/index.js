"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAllnews = exports.validateCategory = void 0;
function validateCategory(req, res, next) {
    const category = req.body;
    if (category.hasOwnProperty('name')) {
        next();
    }
    else {
        res.sendStatus(400);
    }
}
exports.validateCategory = validateCategory;
function validateAllnews(req, res, next) {
    const allnews = req.body;
    if (allnews.hasOwnProperty('news') && allnews.hasOwnProperty('date_only') && allnews.hasOwnProperty('status')) {
        next();
    }
    else {
        res.sendStatus(400);
    }
}
exports.validateAllnews = validateAllnews;
