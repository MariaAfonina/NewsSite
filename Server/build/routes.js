"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const category_1 = require("./services/category");
const index_1 = require("./validators/index");
const allnews_1 = require("./services/allnews");
function routes(app) {
    app.get('/categories', (req, res) => (0, category_1.findCategories)(res));
    app.get('/categories/:id', (req, res) => (0, category_1.findOneCategory)(parseInt(req.params.id), res));
    app.post('/categories/create', index_1.validateCategory, (req, res) => (0, category_1.createCategory)(req.body, res));
    app.delete('/categories/:id/delete', (req, res) => (0, category_1.deleteCategory)(parseInt(req.params.id), res));
    app.get('/categories/allnews', (req, res) => (0, allnews_1.findAllnews)(res));
    app.post('/categories/:id/addNews', index_1.validateAllnews, (req, res) => (0, allnews_1.createAllnews)(parseInt(req.params.id), req.body, res));
    app.get('/categories/:id/allnews', (req, res) => (0, allnews_1.findCategoryAllnews)(parseInt(req.params.id), res));
    app.delete('/categories/:id/allnews/delete', (req, res) => (0, allnews_1.deleteNews)(parseInt(req.params.id), res));
    app.get('/allnews/active', (req, res) => (0, allnews_1.findActiveAllnews)(res));
    app.get('/allnews/latest', (req, res) => (0, allnews_1.findLatestDate)(res));
}
exports.routes = routes;
