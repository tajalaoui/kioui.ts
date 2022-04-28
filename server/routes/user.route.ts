import { Request, Response, Router } from "express"
import { ObjectId } from "mongoose"
import { createUser, findUserById, findUser } from "../controllers/user.controller"
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

router.get("/", async (req: Request, res: Response) => {
  const { id } = req.query

  try {
    const query = await findUserById(id)
    res.send(query)
  } catch (e) {
    res.send(e)
  }
})

export const userRoute: Router = router
