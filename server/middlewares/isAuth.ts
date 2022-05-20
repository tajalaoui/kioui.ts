import jwt from "jsonwebtoken"

async function auth(req, res, next) {
  const decoded = await jwt.verify(req.token, process.env.JWT_SECRET)

  const bearerHeader = req.headers["authorization"]

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ")
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.status(401).send({ error: "Please Authenticate" })
  }
}
