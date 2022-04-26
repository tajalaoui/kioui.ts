import { Request, Response, Router } from "express"
import { createUser } from "../controllers/user.controller"
const router: Router = Router()

router.post("/", async (req: Request, res: Response) => {
  const query = await createUser({
    email: "tajeddine.js@hotmail.com",
    username: "Tajeddine",
    password: "123",
  })
  res.send(query)
})

export const userRoute: Router = router
