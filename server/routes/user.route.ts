import { Request, Response, Router } from "express"
import { createUser, findUserById, loginUser } from "../controllers/user.controller"

const router: Router = Router()

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

export const userRoute: Router = router
