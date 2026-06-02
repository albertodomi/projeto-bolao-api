import "dotenv/config"
import express from "express"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import { z } from "zod"

import routes from "./routes/index.js"
import { errorHandler } from "./middlewares/error.middleware.js"
import { openApi } from "./docs/swagger.js"

const app = express()

app.use(cors())
app.use(express.json())

// Swagger
app.get("/openapi.json", (_req, res) => {
  res.json(openApi)
})
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(openApi))

// Routes
app.use("/", routes)

// Error Handler
app.use(errorHandler)

const port = z.coerce.number().int().positive().catch(3001).parse(process.env["PORT"])
app.listen(port, () => {
  process.stdout.write(`API listening on http://localhost:${port}\n`)
})
