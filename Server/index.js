const Express = require('express')
const app = Express()
const PORT = 5000
const cors = require('cors')
const recipeRouter = require('./routers/recipeRouter')
const userRouter = require('./routers/userRouter')

app.use(cors())
app.use(Express.json())

app.use(userRouter)
app.use(recipeRouter)



app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})