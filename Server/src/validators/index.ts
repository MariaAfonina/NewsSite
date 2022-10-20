import {Response, Request} from "express";

export function validateCategory(req: Request, res: Response, next: any) {
    const category = req.body;
    if (category.hasOwnProperty('name')) {
        next();
    } else {
        res.sendStatus(400);
    }
}

export function validateAllnews(req: Request, res: Response, next: any) {
    const allnews = req.body;
    if (allnews.hasOwnProperty('news') && allnews.hasOwnProperty('date_only') && allnews.hasOwnProperty('status')) {
        next();
    } else {
        res.sendStatus(400);
    }
}