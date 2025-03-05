import express, { Request, Response } from "express";
import path from "path";
import { getNews,getNewsBySlug } from "./newsService";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", (req: Request, res: Response): void => {
    const items = getNews();
    res.render("index", { 
        title: "News",
        items: items
    });
});

router.get("/details/:slug",  (req: Request, res: Response): void => {
    const slug = req.params.slug;
    const news = getNewsBySlug(slug);
    // if news === undefined : redirect to 404
    res.render("details", {
        title: "News details",
        news: news
    });
});

export default router;