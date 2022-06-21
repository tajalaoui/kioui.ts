import { Request, Response, Router } from "express"
import {
  createPost,
  findPosts,
  findPost,
  postComment,
  postLike,
} from "../controllers/post.controller"
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

router.put("/like", isAuth, async (req: Request, res: Response) => {
  const { userId, postId } = req.body

  console.log(req.body)

  try {
    const query = await postLike(userId, postId)
    res.send(query)
  } catch (error) {
    // res.send(error)
  }
})

router.post("/comment", isAuth, async (req: Request, res: Response) => {
  const { userId, postId, comment } = req.body

  console.log(req.body)

  try {
    const query = await postComment(comment)
    res.send(query)
  } catch (error) {
    res.send(error)
  }
})

export const postRoute: Router = router
