import { Request, Response, Router } from "express"
import { createPost, findPosts, findPost } from "../controllers/post.controller"

const router: Router = Router()

// * Create post
router.post("/", async (req: Request, res: Response) => {
  const query = await createPost({
    content: "loremipsum",
  })
  res.send(query)
})

// * Get posts
router.get("/all", async (req: Request, res: Response) => {
  const query = await findPosts()
  res.send(query)
})

// * Get post
router.get("/", async (req: Request, res: Response) => {
  const query = await findPost({
    content: "loremipsum",
  })
  res.send(query)
})

export const postRoute: Router = router
