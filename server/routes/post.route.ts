import { Request, Response, Router } from "express"
import { createPost } from "../controllers/post.controller"

const router: Router = Router()

router.post("/", async (req: Request, res: Response) => {
  const query = await createPost({
    content: "loremipsum",
  })
  res.send(query)
})

export const postRoute: Router = router
