import jwt from "jsonwebtoken"

export function isAuth(req, res, next) {
  let token
  const authHeader = req.headers["authorization"]

  // TODO improve token verification

  // Authentication
  const isAuthenticated = authHeader ? true : false
  if (!isAuthenticated) res.sendStatus(401)
  else token = authHeader.split(" ")[1]

  // Authorization
  const isAuthorized = isAuthenticated ? true : false
  if (!isAuthorized) res.sendStatus(403)
  else jwt.verify(token, process.env.JWT_SECRET)

  req.token = token
  
  next()
}
