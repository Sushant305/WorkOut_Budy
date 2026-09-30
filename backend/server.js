// this line is use for the import the express module
const express = require('express')
// importing the env 
const dotenv = require('dotenv')

const workOutRoutes = require('./routes/workout')

dotenv.config()

// Express app
const app = express()

// middleware 
app.use(express.json())  
app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})

// routes (http://localhost:4000/)
app.get('/',(req,res)=>{
    res.json({
        messgae:"Welcome to the application"
    })
})

app.use('/api/workouts/',workOutRoutes)

// port no.
const PORT =process.env.PORT 

// listen for the requests
app.listen(PORT,()=>{
    console.log(`Server is up and listening on port : http://localhost:${PORT}`);  
})
 