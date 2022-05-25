import { Request, Response, Router } from "express"
import { createPost, findPosts, findPost } from "../controllers/post.controller"
import { isAuth } from "../middlewares/isAuth.middleware"
import jwt from "jsonwebtoken"

const router: Router = Router()

// * Create post
router.post("/", async (req: Request, res: Response) => {
  const { content, user } = req.body

  // TODO implement this route in the frontend
  const query = await createPost({
    content,
    user,
  })
  res.send(query)
})

// * Get posts
router.get("/all", isAuth, async (req: Request, res: Response) => {
  const query = await findPosts()
  // console.log(+process.env.EXPRESS_SESSION_AGE_SAVE_UNINTIALIZED === 1 ? true : false)
  res.send(query)
})

// * Get post
// TODO Add optional params
router.get("/", async (req: Request, res: Response) => {
  const query = await findPost({
    content: "loremipsum",
  })
  res.send(query)
})

export const postRoute: Router = router
