import { Request, Response, Router } from "express"
import { createUser } from "../controllers/user.controller"
const router: Router = Router()

router.post("/", async (req: Request, res: Response) => {
  const { username, email, password } = req.body
  const query = await createUser({
    username,
    email,
    password,
  })
  res.send(query)
})

export const userRoute: Router = router
