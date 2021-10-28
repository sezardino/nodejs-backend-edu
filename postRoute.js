import Router from "express";
import postController from "./postController.js";

const router = new Router();

router.post("/posts", postController.addPost);
router.get("/posts", postController.getAllPosts);
router.get("/posts/:id", postController.getPost);
router.put("/posts", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

export default router;
