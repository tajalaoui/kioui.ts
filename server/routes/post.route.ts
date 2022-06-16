import { Request, Response, Router } from "express"
import { createPost, findPosts, findPost } from "../controllers/post.controller"
import { isAuth } from "../middlewares/isAuth.middleware"

const router: Router = Router()

router.post("/", isAuth, async (req: Request, res: Response) => {
  const { content, id } = req.body

  try {
    const query = await createPost(id, content)
    res.send(query)
  } catch (error) {
    res.send(error)
  }
})

router.get("/:id?", isAuth, async (req: Request, res: Response) => {
  const { id } = req.query

  try {
    if (id) {
      const post = await findPost({
        _id: id,
      })

      return res.send(post)
    }

    const posts = await findPosts()
    res.send(posts)
  } catch (e) {
    res.send(e)
  }
})

export const postRoute: Router = router
