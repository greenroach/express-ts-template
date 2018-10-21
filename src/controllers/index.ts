import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = async (req: Request, res: Response) => {
    res.render("index", { title: "Express" });
};
