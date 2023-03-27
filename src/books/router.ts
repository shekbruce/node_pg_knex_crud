import express, { Router, Response, Request, NextFunction } from "express";
import { deleteBook, getAllBooks, getBook, saveBooks, updateBook } from "./db";
import { validateCreateableBook, validateUpdateBook } from "./validation";

const router: Router = express.Router();
export default router;

router.get("/", async (req: Request, res: Response) => {
  try {
    const rval = await getAllBooks();
    res.send(rval);
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
});

router.post(
  "/",
  validateCreateableBook,
  async (req: Request, res: Response) => {
    try {
      const rval = await saveBooks(req.body);
      res.send(rval);
    } catch (err: any) {
      res.status(500).send(err.toString());
    }
  }
);

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const rval = await getBook(Number(id));
    res.send(rval);
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
});

router.put("/:id", validateUpdateBook, async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const rval = await updateBook(Number(id), req.body);
    res.send(rval);
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteBook(Number(id));
    res.sendStatus(201);
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
});
