import express, { Request, Response } from "express";
import path from "path";
import { News, getAllNews, getNewsBySlug } from "./services/newsService";
import { promises } from "dns";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", async(req: Request, res: Response) => {
    const news = await getAllNews();
    res.render("index", { 
        title: "News",
        news
    });
});

router.get("/details/:slug", async (req: Request, res: Response) => {
    const slug = req.params.slug;
    console.log(slug);
    const newsArticleSlug = await getNewsBySlug(slug);
    res.render("details", {
        title: "News details", news: newsArticleSlug});
});



export default router;