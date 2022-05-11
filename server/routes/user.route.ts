import { Request, Response, Router } from "express"
import { ObjectId } from "mongoose"
import { createUser, findUserById, findUser, loginUser } from "../controllers/user.controller"
const router: Router = Router()

// Create user
router.post("/", async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  const query = await createUser({
    username,
    email,
    password,
  })
  res.send(query)
})

// Find user
router.get("/", async (req: Request, res: Response) => {
  const { id } = req.query

  try {
    const query = await findUserById(id)
    res.send(query)
  } catch (e) {
    res.send(e)
  }
})

// Login
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body

  const query = await loginUser({
    email,
    password,
  })
  res.send(query)
})

export const userRoute: Router = router
