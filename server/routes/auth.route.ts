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

// * Verify jwt
router.post("/verifyJwt", (req: Request, res: Response) => {
  const { token } = req.body

  try {
    const verifyJwt = jwt.verify(token, process.env.JWT_SECRET)

    res.send(verifyJwt)
  } catch (e) {
    console.log(e)
    res.status(400).send("Error occured")
  }
})

// // * Logout
// router.post("/logout", async (req: Request, res: Response) => {
//   req.session.destroy(() => {
//     // TODO handle error
//     res.send(true)
//   })
// })

export const authRoute: Router = router
