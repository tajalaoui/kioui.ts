import { Request, Response, Router } from "express"
import { createUser, loginUser } from "../controllers/user.controller"
import jwt from "jsonwebtoken"

const router: Router = Router()

// * Register
router.post("/register", async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  const query = await createUser({
    username,
    email,
    password,
  })
  res.send(query)
})

// * Login
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const query = await loginUser({
      email,
      password,
    })

    res.send(query)
  } catch (e) {
    console.log(e)
    res.status(400).send("Error occured")
  }
})

export const authRoute: Router = router
