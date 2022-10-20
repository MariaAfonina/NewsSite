import {
    createCategory,
    deleteCategory,
    findOneCategory,
    findCategories
} from "./services/category";
import { validateCategory, validateAllnews } from "./validators/index";
import { Request, Response, Express } from 'express';
import {
    findAllnews,
    createNews,
    findCategoryAllnews,
    findActiveAllnews,
    findLatestDate,
    deleteNews
} from "./services/allnews";

export function routes(app: Express) {
    app.get('/categories', (req: Request, res: Response) =>
        findCategories(res));
    app.get('/categories/:id', (req: Request, res: Response) =>
        findOneCategory(parseInt(req.params.id), res));
    app.post('/categories/create', validateCategory, (req: Request, res: Response) =>
        createCategory(req.body, res));
    app.delete('/categories/:id/delete', (req: Request, res: Response) =>
        deleteCategory(parseInt(req.params.id), res));
    app.get('/categories/allnews', (req: Request, res: Response) =>
        findAllnews(res));
    app.post('/categories/:id/addNews', validateAllnews, (req: Request, res: Response) =>
        createNews(parseInt(req.params.id), req.body, res));
    app.get('/categories/:id/allnews', (req: Request, res: Response) =>
        findCategoryAllnews(parseInt(req.params.id), res));
    app.delete('/categories/:id/allnews/delete', (req: Request, res: Response) =>
        deleteNews(parseInt(req.params.id), res));
    app.get('/allnews/active', (req: Request, res: Response) => 
        findActiveAllnews (res));
    app.get('/allnews/latest', (req: Request, res: Response) => 
        findLatestDate (res));
}