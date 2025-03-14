import express, { Request, Response } from "express";
import path from "path";
import { News, getAllNews, getNewsBySlug, getAllComments, getCommentByNewsId } from "./services/newsService";
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
    const news = await getNewsBySlug(slug);
    const comments = await getCommentByNewsId(news.id);
    res.render("details", {
        title: "News details", 
        news,
        comments
    });
        
});

router.get("/comments", async(req: Request, res: Response) => {
    const comments = await getAllComments();
    res.render("comments", {
        title: "Comments", comments: comments
    });
    console.log(comments);
});


export default router;