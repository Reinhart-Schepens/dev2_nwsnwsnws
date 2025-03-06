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
    const news = await getNewsBySlug(slug);
    res.render("details", {
        title: "News details",
        news
    });
});


router.get("/news", async (req: Request, res: Response) => {
  const news: News[] = await getAllNews();

  res.render("news", { news, title: "Recent nieuws" });
});



export default router;